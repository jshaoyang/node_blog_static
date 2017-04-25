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
<style lang="sass">
	.form_wrap{
		width:600px;
		margin:0 auto;
		text-align: center;
	}
	.form{
		padding-top: 30px;
	}
	.pony_cart{
		width:200px;
		border-radius: 200px;
		margin-top:80px;
	}
	.group{
		margin-top:10px;
		span{
			display:inline-block;
			width:80px;
		}
		input{
			border: 1px solid #dadada;
			padding: 0 8px;
			height: 36px;
		    border-radius: 4px;
		    width: 200px;
		    box-shadow: 0px 0px;
		    box-shadow: 0 0px 2px 1px rgba(0,0,0,0.1);
		}
	}
	.submit{
		margin-top: 10px;
		display: inline-block;
		height:36px;
		line-height: 36px;
		width:290px;
		background:rgba(21, 150, 77, 0.9);
		border-radius:5px;
		margin-left:15px;
		cursor:pointer;
		color:#fff;
	}
	.submit:hover{
		background:rgba(18, 119, 62, 0.9);
	}
</style>
<script type="text/javascript">
	export default{
		data () {
			return {

			}
		}
	}
</script>