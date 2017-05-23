<template>
	<div class="main_content">
		<Headers :userId="getUserId()"/>
		<div class="container clear">
			<div class="perfect_wrap list">
				<img src="/pony_cart.jpeg" class="pony_cart">
				<form action="/login" methods="post" class="perfect_form" @submit.prevent="submit">
					<div class="group">
						<span>昵称：</span>
						<input type="text" name="name" placeholder="昵称" v-model.trim="name" required>
					</div>
					<div class="group">
						<span>简介：</span>
						<textarea name="desc" placeholder="简介" v-model.trim="desc" required></textarea>
					</div>
					<div class="group">
						<button type="submit" class="submit">提交</button>
					</div>
					<div class="group">
						<a href="javascript:history.go(-1);" class="submit">返回</a>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
<style lang="sass">
	@import './form.css';
	.perfect_wrap{
		position: relative;
		.pony_cart{
			position:absolute;
		}
	}
	.perfect_form{
	    margin-left: 200px;
	    text-align: center;
	    margin-top: 30px;
		input{
			width: 400px;
			height: 40px;
		}
		textarea{
			width: 400px;
			border: 1px solid #dadada;
			padding: 8px;
			border-radius: 4px;
			box-shadow: 0px 0px;
			box-shadow: 0 0px 2px 1px rgba(0, 0, 0, 0.1);
			min-height: 200px;
			vertical-align: text-top;
		}
	}
</style>
<script type="text/javascript">
	import Headers from './common/header.vue';
	export default{
		data () {
			return {
				name : null,
				desc : null
			}
		},
		methods:{
			submit () {
				if ( !this.name ) {
					return alert('昵称为空');
				}
				if ( !this.desc ) {
					return alert('简介为空');
				}
				this.$http.post('/perfect',{
					name : this.name,
					desc : this.desc
				}).then(function (req) {
					if ( req.ok ) {
						if ( req.data.status ) {
							this.$router.push(req.data.url ? req.data.url : '/')
						}else{
							alert(req.data.massage);
						}
					} 
				})
			},
			getUserId () {
				return sessionStorage.getItem('userId');
			}
		},
		components:{
			Headers
		}
	}
</script>