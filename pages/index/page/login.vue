<template>
	<div class="main_content">
		<Headers :userId="getUserId()"/>
		<div class="container clear">
			<div class="form_wrap list">
				<img src="/pony_cart.jpeg" class="pony_cart">
				<form action="/login" methods="post" class="form" @submit.prevent="submit">
					<div class="group">
						<span>用户名：</span>
						<input type="text" name="username" placeholder="用户名" v-model.trim="username">
					</div>
					<div class="group">
						<span>密码：</span>
						<input type="password" name="username" placeholder="密码" v-model="password">
					</div>
					<div class="group">
						<button type="submit" class="submit">登录</button>
					</div>
					<div class="group">
						<a href="javascript:history.go(-1);" class="submit">返回</a>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
<style lang="css">
	@import './form.css';
</style>
<script type="text/javascript">
	import Headers from './common/header.vue';
	export default{
		data () {
			return {
				username : null,
				password : null
			}
		},
		methods:{
			submit () {
				if ( !this.username ) {
					return alert('用户名为空');
				}
				if ( !this.password ) {
					return alert('密码为空');
				}
				this.$http.post('/login',{
					username : this.username,
					password : this.password
				}).then(function (req) {
					if ( req.ok ) {
						if ( req.data.status ) {
							sessionStorage.setItem('userId',req.data.userId);
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