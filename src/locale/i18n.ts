import { createI18n } from 'vue-i18n'
import ru from './messages/ru'
import en from './messages/ru'

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */
function loadLocaleMessages () {
  return {
    ru, en
  }
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

export default createI18n({
  legacy: false,
  locale: (import.meta.env.VITE_I18N_LOCALE || 'en') as string,
  fallbackLocale: (import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'en') as string,
  messages: loadLocaleMessages()
})
