import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { getLanguage } from '@/assets/js/cookies';
import elementEnLocale from 'element-ui/lib/locale/lang/en';
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN';

// User defined lang
import enLocale from './en';
import zhLocale from './zh-cn';
const messages = {
	en: {
		...enLocale,
		...elementEnLocale
	},
	'zh-cn': {
		...zhLocale,
		...elementZhLocale
	}
};

export const getLocale = () => {
	const cookieLanguage = getLanguage();
	if (cookieLanguage) {
		return cookieLanguage;
	}
	const language = navigator.language.toLowerCase();
	const locales = Object.keys(messages);
	for (const locale of locales) {
		if (language.indexOf(locale) > -1) {
			return locale;
		}
	}
	return 'zh';
};
Vue.use(VueI18n);
const i18n = new VueI18n({
	locale: getLocale(),
	messages: messages
});

export default i18n;
