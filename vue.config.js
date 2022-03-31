/* eslint-disable no-undef */
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locale/messages',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true
    }
  }
})
