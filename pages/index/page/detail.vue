<template>
	<div class="main_content">
		<Headers :userId="getUserId()"/>
		<div class="article_detail container">
			<div class="userInfo">
				<img src="/userImg/defaultUser.jpeg" class="userLogo" alt="用户图片">
				<p class="descript">
					<h2>{{username}}</h2>
				</p>
			</div>
			<div class="detailTitle">
				{{title}}
			</div>
			<div class="detailContent" v-html="content"></div>
		</div>
	</div>
</template>
<script>
	import Headers from './common/header.vue';
	export default{
		data () {
			return {
				username:'商腾飞',
				content:'',
				title:''
			}
		},
		methods:{
			getUserId () {
				return sessionStorage.getItem('userId');
			}
		},
		created () {
			const id = this.$route.params.id;
			this.$http.post('/detail/info',{
				id:id
			}).then(function (res) {
				if (res.data.status) {
					var data = res.data.data;
					this.username = data.username;
					this.title = data.title;
					return this.content = data.value.replace(/\n/g,'<br/>').replace(/\s/g,'&nbsp;');
				}
				alert(res.data.massage);
			});
		},
		components:{
			Headers
		}
	}
</script>
<style lang="sass">
	.article_detail{
		padding-top:60px;
		padding-left:200px;
		position:relative;
		box-sizing: border-box;
	}
	.userLogo{
		width: 120px
	}
	.userInfo{
		position: absolute;
		left: 0;
		top: 80px;
		width: 180px;
		margin-right: 20px;
		text-align: center;
	}
	.detailTitle{
		word-wrap: break-word;
		font-size:18px;
		margin-top: 10px;
		margin-bottom: 15px;
	}
	.detailContent{
		word-wrap: break-word;
	}
</style>