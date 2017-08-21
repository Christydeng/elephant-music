import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		userInfo:{
			userName: null,
			password: null
		}
	},
	getters: {
	    getUserInfo: state =>{
	        return state.userInfo
	    }
	},
	mutations: {
		//提交用户信息方法，state是当前vuex实例下user的state，
		//newUserInfo是触发SET_USERINFO方法时的入参
		SET_USERINFO: (state, newUserInfo) => {
		  state.userInfo = newUserInfo
		},
	},
	//Action 通过 store.dispatch 方法触发
	actions: {
		//newUserInfo为自己的传参
		setUserInfo({ dispatch, commit, state},newUserInfo){
			console.log('用户信息：',newUserInfo)
			commit('SET_USERINFO',newUserInfo)
		}
	}
})

export default store