import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/base.css'
import utils from '@/assets/js/utils.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import i18n from './locales/index'
import Components from './components/base'
Vue.use(Components) //基础组件
window.loginDateCallback = function(){	//登录过期
	if (self != top) {
		parent.window.location.href = '/developercenter/static/develop.html#/system/login'
	} else {
		window.location.href = '/developercenter/static/develop.html#/system/login'
	}
}
Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$bus = new Vue()
Vue.prototype.$utils = utils //js公共方法
Vue.prototype.$formRuleError = utils.formRuleError
Vue.prototype.$cookies = utils.cookies
// qiankun
let instance = null
function render(props = {}) {
  const { container } = props
	new Vue({
		router,
		store,
		i18n,
		render: h => h(App)
	}).$mount(container ? container.querySelector('#childapp') : '#childapp')
}
// webpack打包公共文件路径
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}
// 独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}
// 生命周期
export async function bootstrap() {
  console.log('[vue] vue app bootstraped')
}
export async function mount(props) {
  render(props)
}
export async function unmount() {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}
