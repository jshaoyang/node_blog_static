<template>
	<div class="main_content">
		<Headers :userId="getUserId()"/>
		<div class="container clear list">
			<ul class="article_list">
				<li class="item" v-for="( i ,e ) in listShow">
					<router-link to="/detail/:id" class="arcicle_t">{{i.title}}</router-link>
					<div class="content">{{i.value}}</div>
					<div class="artcle_f">
						<a href="/user/id" class="user">用户{{i.userId}}</a>
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
<script type="text/javascript">
	import Headers from './common/header.vue';
	export default{
		data () {
			return {
				pages : 0,
				listShow : null
			}
		},
		methods:{
			getUserId () {
				return sessionStorage.getItem('userId');
			},
			getDate () {
				this.$http.post('/',{
					pages:this.pages
				}).then(function (res) {
					if (res.data.status) {
						this.listShow = res.data.data;
						return this.$store.commit('addListData',res.data.data);
					}
					alert(res.data.massage);
				})
			}
		},
		created () {
			this.getDate();
		},
		computed:{

		},
		components:{
			Headers
		}
	}
</script>
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