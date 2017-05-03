<template>
	<div class="main_content">
		<Headers/>
		<div class="container clear">
			<div class="form_wrap logout_wrap list">
				<img src="/pony_cart.jpeg" class="pony_cart">
				<div>退出登录成功</div>
				<router-link to="/" class="goHomeLink">
					<button class="goHome">回首页</button>
				</router-link>
			</div>
		</div>
	</div>
</template>
<style lang="css">
	@import './form.css';
	.goHome{
		width: 100px;
		height: 36px;
		line-height: 36px;
			color: #fff;
	}
	.logout_wrap{
		text-align: center;
	}
	.goHomeLink{
		margin-top: 40px;
		display: inline-block;
		background: rgba(21, 99, 150, 0.9);
	}
</style>
<script type="text/javascript">
	import Headers from './common/header.vue';
	export default{
		data () {
			return {

			}
		},
		beforeCreate () {
			sessionStorage.removeItem('userId');
		},
		methods:{

		},
		components:{
			Headers
		}
	}
</script>