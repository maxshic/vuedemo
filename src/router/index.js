import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'HelloWorld',
			//component: HelloWorld,
			//路由懒加载
			component: resolve => require(['@/components/HelloWorld'] ,resolve)
		}
	]
})
