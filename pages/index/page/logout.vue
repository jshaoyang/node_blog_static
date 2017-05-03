<template>
	<div class="container clear">
		<div class="form_wrap">
			<img src="/pony_cart.jpeg" class="pony_cart">
			<div>退出登录成功</div>
		</div>
	</div>
</template>
<style lang="css">
	@import './form.css';
</style>
<script type="text/javascript">
	export default{
		data () {
			return {

			}
		},
		beforeCreate () {

		},
		methods:{

		},
		mounted () {
			this.$store.commit('removeLogoInId');
			sessionStorage.removeItem('userId');
		}
	}
</script>