<template>
	<div class="main_content">
		<Headers :userId="getUserId()"/>
		<div class="article_wrap container">
			<h1 class="title">文章发布 <span class="username">{{username}}：您已登录！</span></h1>
			<form method="post" action="/article" @submit.prevent="submit">
				<div class="input_wrap clear">
					<span class="title_name">标题：</span>
					<input type="text" class="title_input" required="required" name="title" v-model.trim="title">
				</div>
				<div class="input_wrap">
					<span class="title_name">文章：</span>
					<textarea class="input_text" name="value" required="required" v-model.trim="value"></textarea>
				</div>
				<div class="input_wrap"><button class="submit">提交</button></div>
			</form>
		</div>
	</div>
</template>
<script type="text/javascript">
	import Headers from './common/header.vue';
	export default{
		data () {
			return {
				username:'',
				title:'',
				value:''
			}
		},
		created () {
			this.$http.post('/article/info').then((res)=>{
					if (res.data.status) {
						var data = res.data.data;
						this.username = data.username;
						return document.title = data.title;
					}
					alert(res.data.massage)
				})
		},
		methods:{
			getUserId () {
				return sessionStorage.getItem('userId');
			},
			submit () {
				this.$http.post('/article/publish', {
					title:this.title,
					value:this.value
				}).then((res)=>{
					if (res.data.status) {
						alert(res.data.massage);
						return location.reload();
					}
					alert(res.data.massage);
				})
			}
		},
		components:{
			Headers
		}
	}
</script>
<style lang="sass">
	@import './form.css';
	.article_wrap{
		padding-top: 60px;
	}
	.title{
		font-weight: normal;
		margin-top:0px;
		margin-bottom: 30px;
	}
	.username{
		float: right;
		margin-right: 100px;
		font-size: 24px;
		line-height: 28px;
	}
	.input_text{
		width: 800px;
		height: 400px;
		border: 1px solid #927474;
		border-radius: 5px;
		resize: auto;
		padding:5px;
		box-sizing:border-box;
		float: left;
		text-indent:2em;
	}
	.input_wrap{
		margin-bottom: 30px;
		text-align: center;
		.submit{
			margin-top:20px;
		}
	}
	.title_name{
		float: left;
		width: 100px;
		font-size: 20px;
		text-align: center;
		color: #292626;
		line-height: 36px;
	}
	.title_input{
		border: 1px solid #927474;
	    border-radius: 5px;
	    height: 36px;
	    width: 800px;
	    padding: 5px;
	    box-sizing: border-box;
	    float: left;
	}
	.title_input:focus,.input_text:focus{
		border:1px solid #2e8074;
		box-shadow:0px 0px 3px 1px #2e8074;
	}
</style>