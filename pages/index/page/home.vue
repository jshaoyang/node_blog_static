<template>
	<div class="main_content">
		<Headers :userId="getUserId()"/>
		<div class="container clear">
			<div class="list home_wrap">
				<img src="/pony_cart.jpeg" class="userImg">
				<div class="right_info">
					<h1>个人中心</h1>
					<button class="add_article">
						<router-link to="/article/:id" class="arcicle_t">发布文章</router-link>
					</button>
					<button class="add_article">
						<router-link to="/article/:id" class="arcicle_t">完善信息</router-link>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="sass">
	@import './form.css';
	.home_wrap{
		overflow: hidden;
	}
	.userImg{
		width: 400px;
		height: 400px;
		border-radius: 200px;
		float: left;
		margin-top: 40px;
	}
	.right_info{
		margin-top: 40px;
		text-align: center;
		h1{
			text-align: center;
			width:100%;
			font-size: 28px;
		}
	}
	.add_article{
		margin-top: 60px;
		margin-right:15px;
		padding: 10px 20px;
		border-radius: 15px;
		cursor: pointer;
		background: rgba(21, 99, 150, 0.9);
	}
	.add_article a{
		font-size: 30px;
		color:#bdbdbd;;
		font-weight: normal;
	}
	.add_article:hover,.add_article a:hover{
		color: #fff;
	}
</style>
<script type="text/javascript">
	import Headers from './common/header.vue';
	export default{
		data () {
			return {
				username : null,
				password : null
			}
		},
		methods:{
			submit () {
				if ( !this.username ) {
					return alert('用户名为空');
				}
				if ( !this.password ) {
					return alert('密码为空');
				}
				this.$http.post('/login',{
					username : this.username,
					password : this.password
				}).then(function (req) {
					if ( req.ok ) {
						if ( req.data.status ) {
							sessionStorage.setItem('userId',req.data.userId);
							this.$router.go(req.data.url ? req.data.url : '/');
						}else{
							alert(req.data.massage);
						}
					} 
				})
			},
			getUserId () {
				return sessionStorage.getItem('userId');
			}
		},
		components:{
			Headers
		}
	}
</script>