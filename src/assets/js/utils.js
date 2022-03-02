import VueCookies from 'vue-cookies'
// 通过时间戳获取时间格式
const changetime = (time, type) => {
	var d = new Date(time)
	var y = d.getFullYear()
	var m = d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1
	var D = d.getDate() < 10 ? '0' + d.getDate() : d.getDate()
	var h = d.getHours() < 10 ? '0' + d.getHours() : d.getHours()
	var M = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
	var s = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds()
	switch (type) {
		case 1:
			return y + '-' + m + '-' + D + ' ' + h + ':' + M + ':' + s
		case 2:
			return y + '-' + m + '-' + D
		case 3:
			return y + '年' + m + '月' + D + '日  ' + h + ':' + M
		default:
			return y + '-' + m + '-' + D + ' ' + h + ':' + M
	}
}
// 去除字符串前后空格
const trim = str => {
	if (!(str instanceof String)) {
		return str
	}
	if (!str) {
		return ''
	}
	return str.toString().replace(/(^\s*)|(\s*$)/g, '')
}
// 浅剔除对象的空属性
const filterParams = obj => {
	var _newObj = {}
	for (var key in obj) {
		if (obj[key] || obj[key] === 0) {
			if (trim(obj[key]) || obj[key] === 0) {
				_newObj[key] = trim(obj[key])
			}
		}
	}
	return _newObj
}
//cookie统一管理
const cookies = {
	get: name => {
		let getcookie = VueCookies.get(name)
		try {
			return JSON.parse(getcookie)
		} catch (e) {
			return getcookie
		}
	},
	set: (key, value, time) => {
		if (!time) {
			time = '1d'
		}
		if (Object.prototype.toString.call(value) === '[object Object]') {
			value = JSON.stringify(value)
		}
		VueCookies.set(key, value, time)
	},
	remove: name => {
		VueCookies.remove(name)
	}
}
const formRuleError = () => {
	//form表单校验-失败后自动获取焦点
	setTimeout(() => {
		var isError = document.getElementsByClassName('is-error')
		if (isError[0].querySelector('input')) {
			isError[0].querySelector('input').focus()
		} else if (isError[0].querySelector('textarea')) {
			isError[0].querySelector('textarea').focus()
		}
	}, 100)
}

export default {
	changetime,
	trim,
	cookies,
	formRuleError,
	filterParams
}
