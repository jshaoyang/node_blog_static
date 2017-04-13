<template>
	<section class="main">
		<article class="left_nav">
			<ul>
				<li><router-link to="/pages/index">首页</router-link></li>
				<li><router-link to="/pages/new">最新 note</router-link></li>
				<li><router-link to="/pages/hot">最热 note</router-link></li>
				<li><router-link to="/pages/login">Buddy Login</router-link></li>
			</ul>
		</article>
		<router-view></router-view>
	</section>
</template>
<style lang="sass">
	@import './index.scss';
</style>
<script type="text/javascript">
	export default {
		
	}
</script>