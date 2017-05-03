<template>
	<header class="header">
		<div class="container clear">
			<router-link to="/" class="logo">pony&nbsp;cart</router-link>
			<div class="user_pass" >
				<template v-if="!userId">
					<router-link to="/login" class="login" >登录</router-link>
					<router-link to="/register" class="register">注册</router-link>
				</template>
				<template v-else>
					<router-link to="/home" class="login">个人中心</router-link>
					<router-link to="/logout" class="login">退出登录</router-link>
				</template>
			</div>
		</div>
	</header>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				
			}
		},
		props:{
			userId : {
				type:String,
				default:null
			}
		}
	}
</script>
<style type="sass">
	.header{
		position: fixed;
		width:100%;
		height:40px;
		background:rgba(21, 99, 150, 0.9);
		box-shadow: 0 1px 1px #aaa;
		z-index: 2;
	}
	.logo{
		text-decoration: none;
		color: #062a5a;
		display: inline-block;
		vertical-align: top;
		font-size: 26px;
		line-height: 40px;
		font-weight: 100;
		text-shadow: 0 0 8px #eee;
		color: #eee\9;
		color: #eee\8;
		_color: #eee;
	}
	.user_pass{
		float:right;
	}
	.user_pass>a{
		text-decoration: none;
		margin-left: 20px;
		height: 40px;
		line-height: 40px;
		font-size: 14px;
		color: #bdbdbd;
		display: inline-block;
		vertical-align: top;
		letter-spacing: normal;
		word-spacing: normal;
	}
	.login:hover,.register:hover{
		color:#ffffff;
	}
</style>