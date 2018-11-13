import Vue from 'vue'
import Router from 'vue-router'
import layout from '../components/layout'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
	linkExactActiveClass: 'actived',
	routes: [
		{
			path: '/',
			redirect: '/login'
		},
		{
			path: '/login',
			name: 'login',
			//component: HelloWorld,
			//路由懒加载
			component: resolve => require(['@/components/login'] ,resolve)
		},
		{
			path: '',
			redirect: 'dashboard',
			component: layout,
			children: [
				{
					path: 'dashboard',
					name: 'dashboard',
					component: resolve => require(['@/components/dashboard'] ,resolve)
				},
				{
					path: 'admin',
					name: 'admin',
					component: resolve => require(['@/components/admin'] ,resolve)
				},
				{
					path: 'visiter',
					name: 'visiter',
					component: resolve => require(['@/components/visiter'] ,resolve)
				}
			]
		},
		{
			path: '*',
			name: '404',
			component: resolve => require(['@/components/404'] ,resolve)
		}
	]
})
