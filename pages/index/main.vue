<template>
	<transition name="view">
		<router-view></router-view>
	</transition>
</template>
<style lang="sass">
	@import './common.scss';
	.main{
		overflow: hidden;
	}
	.main_content{
		padding-bottom: 50px;
	}
	.view-enter-active {
		transition: all .4s ease;
	}
	.view-leave-active {
		transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.view-enter{
		transform: translateX(100%);
		margin-right:-100%;
	}
	.view-leave-to{
		transform: translateX(-100%);
	}
</style>
<script type="text/javascript">
	export default {
	}
</script>