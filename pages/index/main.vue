<template>
	<section class="main">
		<Headers/>
		<MainContent/>
	</section>
</template>
<style lang="sass">
	@import './common.scss';
	.main{
		overflow: hidden;
	}
</style>
<script type="text/javascript">
	import Headers from './header.vue';
	import MainContent from './content.vue';
	export default {
		components:{
			Headers , MainContent
		}
	}
</script>