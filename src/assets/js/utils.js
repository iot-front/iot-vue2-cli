import VueCookies from 'vue-cookies';
/**
 * 去除字符串前后空格
 * @param {string} str 要去除空格的的数据
 * @returns 去空格后的数据
 */
const trim = str => {
	if (!(str instanceof String)) {
		return str;
	}
	if (!str) {
		return '';
	}
	return str.toString().replace(/(^\s*)|(\s*$)/g, '');
};
// 浅剔除对象的空属性
const filterParams = obj => {
	var _newObj = {};
	for (var key in obj) {
		if (obj[key] || obj[key] === 0) {
			if (trim(obj[key]) || obj[key] === 0) {
				_newObj[key] = trim(obj[key]);
			}
		}
	}
	return _newObj;
};
//cookie统一管理
const cookies = {
	get: name => {
		let getcookie = VueCookies.get(name);
		try {
			return JSON.parse(getcookie);
		} catch (e) {
			return getcookie;
		}
	},
	set: (key, value, time) => {
		if (!time) {
			time = '1d';
		}
		if (Object.prototype.toString.call(value) === '[object Object]') {
			value = JSON.stringify(value);
		}
		VueCookies.set(key, value, time);
	},
	remove: name => {
		VueCookies.remove(name);
	}
};
export default {
	trim,
	cookies,
	filterParams
};
