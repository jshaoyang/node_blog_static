<template>
	<div class="main_content">
		<Headers/>
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
						<input type="password" name="username" placeholder="密码" v-model.trim="password">
					</div>
					<div class="group">
						<span>确认密码：</span>
						<input type="password" name="username" placeholder="密码" v-model.trim="passwords">
					</div>
					<div class="group">
						<button type="submit" class="submit">注册</button>
					</div>
					<div class="group">
						<router-link to="/login" class="submit">登录</router-link>
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
				username:'',
				password:'',
				passwords:''
			}
		},
		methods:{
			submit () {
				if ( !this.username ) {
					return alert('输入用户名')
				}
				if ( !this.password || !this.passwords ) {
					return alert('输入密码')
				}
				if ( this.password !== this.passwords ) {
					return alert('输入的密码不一致')
				}
				if ( this.username.length < 4 ) {
					return alert('用户不能小于四位');
				}
				if ( this.password.length < 6 ) {
					return alert('密码不能小于六位');
				}
				this.$http.post('/register/',{ 
					username : this.username,
					password :this.password 
				}).then( req => {
					if ( req.ok ) {
						if ( req.data.status ) {
							sessionStorage.setItem('userId',req.data.userId);
							this.$router.go(req.data.url ? req.data.url : '/');
						}else{
							alert(req.data.massage);
						}
					}else{
						alert('网络错误');
					}
				}).catch( req => {

				})
			}
		},
		components:{
			Headers
		}
	}
</script>