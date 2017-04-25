<template>
	<div class="container clear">
		<div class="form_wrap">
			<img src="/pony_cart.jpeg" class="pony_cart">
			<form action="/login" methods="post" class="form">
				<div class="group">
					<span>用户名：</span>
					<input type="text" name="username" placeholder="用户名">
				</div>
				<div class="group">
					<span>密码：</span>
					<input type="text" name="username" placeholder="密码">
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
</template>
<style lang="css">
	@import './form.css';
</style>
<script type="text/javascript">
	export default{
		data () {
			return {

			}
		}
	}
</script>