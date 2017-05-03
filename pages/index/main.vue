<template>
	<section class="main">
		<router-view></router-view>
	</section>
</template>
<style lang="sass">
	@import './common.scss';
	.main{
		overflow: hidden;
	}
	.main_content{
    	padding-bottom: 50px;
	}
</style>
<script type="text/javascript">
	export default {
	}
</script>