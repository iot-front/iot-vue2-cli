import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import { setLanguage } from '@/assets/js/cookies'
import { getLocale } from '@/locales'
import i18n from '@/locales/index'

Vue.use(Vuex)
export default new Vuex.Store({
	state: {
    language: getLocale()
  },
  mutations: {
    updateLanguage(state, language) {
      state.language = language
      setLanguage(state.language)
      i18n.locale = state.language
    }
  },
  actions: {},
	modules: {
		user
	}
})
