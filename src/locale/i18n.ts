import { createI18n } from 'vue-i18n'
import ru from './messages/ru'
import en from './messages/en'

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */
function loadLocaleMessages () {
  return { ru, en }
  // const locales = require.context('./locale/messages', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  // const messages = {}
  // locales.keys().forEach(key => {
  //   const matched = key.match(/([A-Za-z0-9-_]+)\./i)
  //   if (matched && matched.length > 1) {
  //     const locale = matched[1]
  //     messages[locale] = locales(key).default
  //   }
  // })
  // return messages
}

const decideCurrentLocale = () => {
  const storedValue = window.localStorage.getItem('locale')
  const locale = storedValue || 'en'
  window.localStorage.setItem('locale', locale)
  return locale
}

export const setLocale = (i18n: any, locale: string) => {
  window.localStorage.setItem('locale', locale)
  i18n.locale.value = locale
  window.location.reload()
}

export default createI18n({
  // globalInjection: true,
  legacy: false,
  locale: decideCurrentLocale(),
  fallbackLocale: 'en',
  // availableLocales: ['ru', 'en'],
  localeDir: './messages',
  messages: loadLocaleMessages()
  // messages: { ru: {}, en: {} }
})
