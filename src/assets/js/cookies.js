import Cookies from 'vue-cookies'
export const getLanguage = () => Cookies.get('language')
export const setLanguage = (language) => Cookies.set('language', language)
