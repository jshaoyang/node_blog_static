<template>
	<div class="main" ref="main">
		<transition name="view" v-on:before-enter="beforeEnter" v-on:after-leave="afterLeave">
			<router-view></router-view>
		</transition>
	</div>
</template>
<style lang="sass">
	@import './common.scss';
	.main{
		overflow: hidden;
		width:100%;
	}
	.main_content{
		padding-bottom: 50px;
		float:left;
		width:100%;
	}
	.view-enter-active {
		transition: all .5s ease;
	}
	.view-leave-active {
		transition: all .5s ease;
	}
	.view-enter-to{
		transform: translateX(-100%);
	}
	.view-leave-to{
		opacity: 0;
	}
</style>
<script type="text/javascript">
	export default {
		data () {
			return {
				width : window.innerWidth - 15
			}
		},
		mounted () {
		},
		methods:{
			beforeEnter () {
				var main = this.$refs.main;
				main.style.width = this.width * 2 + 'px';
				main.children[0].style.width = this.width + 'px';
				main.children[1].style.width = this.width + 'px';

			},
			afterLeave () {
				var main = this.$refs.main;
				main.style.width = this.width + 'px';
			} 
		}
	}
</script>