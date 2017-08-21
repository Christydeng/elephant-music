<template>
	<div class="login_box" style="background: #383838;">
		<div class="container">
			<div class="row" style="padding: 30px;">
				<form style="color: white; font-size: 13px;">
					<label>
						<p>用户名或邮箱</p>
						<input class="name" type="text" v-model="userInfo.userName"/>
					</label>
					<label>
						<p>密码</p>
						<input class="password" type="password" v-model="userInfo.password" @keyup.enter.native="submitUserInfo"/>
					</label>
					<input class="highlight_btu" type="button" value="登录"  @click="submitUserInfo"/>
					<input class="highlight_border" type="button" value="注册" />
					<p style="float: left; color: #cccccc;">测试账号：test/123</p>
					<p style="float: right;">
						<router-link to="" style="color: #cccccc;">找回密码</router-link>
					</p>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import { mapGetters } from 'vuex'
 	export default {
 	  name: 'home',
 	  //使用vuex的方法共享数据
 	  data: function () {
 	    return {
 	    }
 	  },
 	  mounted: function () {
 	  	console.log( this.$store.state.userInfo)
 	  	let vm = this;
 	  },
 	  computed: {
 	  },
 	  methods:{
 	  	getData: function () {
 	  		//这里可以写ajax方法
 	  	},
 	  },
 	  //使用sessionStorage的方法共享数据
 	  data: function () {
 	  	return {
  			userInfo: {
  				userName: '',
  				password: ''
  			}
 	  	}
 	  },
 	  mounted: function () {
 	  	let vm = this;
 	  	console.log("登录用户：==========" , vm.userInfo)
 	  },
 	  methods: {
 	  	getData: function () {
 	  		//这里可以写ajax方法
 	  	},
 	  	submitUserInfo: function () {
 	  		let vm = this;
 	  		//将JSON对象转化成字符串存储
 	  		sessionStorage.userInfo = JSON.stringify(vm.userInfo)
 	  		this.$router.push('/index/recommend')
 	  	}
 	  }
 	}
</script>
<style>
	.login_box {
		padding-top: 130px;
		height: 550px;
	}

	.login_box input {
		padding-top: 4px;
		padding-bottom: 4px;
		margin-bottom: 20px;
		margin-top: 8px;
		display: block;
		border: 1px solid #5b5b5b !important;
		color: #cccccc !important;
		border-radius: 5px;
		background: #383838;
		height: 30px;
	}

	.login_box input,
	.login_box label {
		width: 100%;
	}

	.login_box label p {
		font-weight: normal;
	}

	.login_box .highlight_btu {
		background: #e4e4e4;
		color: black !important;
	}

	.login_box .highlight_border {
		border: 1px solid white !important;
	}

</style>