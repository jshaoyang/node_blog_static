<template>
	<div class="main_content">
		<Headers :userId="getUserId()"/>
		<div class="container clear list">
			<ul class="article_list">
				<li class="item">
					<router-link to="/article/:id" class="arcicle_t">最新文章asdfad{{name}}</router-link>
					<div class="content">用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户</div>
					<div class="artcle_f">
						<a href="/user/id" class="user">用户</a>
					</div>
				</li>
			</ul>
			<div class="bubble">
				<div class="box">
					<h2 class="bubb_title">冒泡</h2>
				</div>
			</div>
		</div>
	</div>
</template>
<style type="text/css">
	.article_list{
		float:left;
		width:680px;
		margin:0;
	}
	.item{
		list-style: none;
		padding: 10px 15px;
		background: #fbfbfb;
		border: 1px solid #fff;
		box-shadow: 0 0 10px #dfdfdf;
		position: relative;
		margin-bottom: 20px;
		line-height: 24px;
		text-align: left;
		word-break: break-all;
	}
	.bubble{
		float:right;
		width:300px;
	}
	.box{
		padding: 10px 15px;
		background: #fbfbfb;
		border: 1px solid #fff;
		box-shadow: 0 0 10px #dfdfdf;
	}
	.arcicle_t{
		max-width: 520px;
		padding-bottom: 5px;	
	}
	.arcicle_t:hover{
		color: #268800;
		cursor: pointer;
	}
	.bubb_title{
		color:#3d5f30;
		font-weight: 700;
		font-size: 16px;
		border-bottom: 2px solid #48a623;
	}
	.content{
		line-height: 24px;
		text-align: left;
		word-break: break-all;
	}
	.artcle_f{
		text-align: right;
		line-height: 1.2;
	}
	.user{
		display: inline-block;
		font-size: 14px;
		color: #999;
	}
	.list{
		padding-top: 60px;
	}
</style>
<script type="text/javascript">
	import Headers from './common/header.vue';
	export default{
		data () {
			return {
				name:123
			}
		},
		methods:{
			getUserId () {
				return sessionStorage.getItem('userId');
			}
		},
		components:{
			Headers
		}
	}
</script>