// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
	state: {
		authList: [
			{
				to: '/dashboard',
				name: 'dashboard'
			},
			{
				to: '/admin',
				name: 'admin'
			},
			// {
			// 	to: '/visiter',
			// 	name: 'visiter'
			// }
		]
	},
	getters: {  //计算属性
		
		authList: state => {

			if(sessionStorage.getItem('authList')){
				state.authList = JSON.parse(sessionStorage.getItem('authList'))
			}

			return state.authList
		},
		
	},
	mutations: {
		pushList(state ,obj){
			state.authList.push(obj)
		},
		clearList(state){
			state.authList = [
				{
					to: '/dashboard',
					name: 'dashboard'
				},
				{
					to: '/admin',
					name: 'admin'
				}
			]
		}
	}
})

router.beforeEach((to ,from ,next) => {
	console.log('to' ,to)
	console.log('from' ,from)
	next()
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
})
