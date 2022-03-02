import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRouter from './home'
Vue.use(VueRouter)
const router = new VueRouter({
	mode: 'hash',
	routes: [
		{
			path: '/home',
			component: () =>	import ( /* webpackChunkName: "home" */ '@/views/home.vue'),
			name: 'home',
			meta: {
				keepAlive: false
			},
			children: homeRouter
		},
		{
			path: '*',
			redirect: {
				path: '/home'
			}
		}
	]
})
router.beforeEach((to, from, next) => {
  next()
})
export default router