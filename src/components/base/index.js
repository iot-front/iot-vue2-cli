const components = require.context('./', false, /\.vue$/)

export default Vue => {
	components.keys().map(el => {
		Vue.component(el.replace(/(\w*).\/(.*).vue(.*)/g, '$1h-$2'), components(el).default)
	})
}
