import { createApp } from 'vue'
// import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store'
// import messages from './lang'

import LayoutDefault from '@/layouts/DefaultLayout.vue'
import LayoutSimple from '@/layouts/SimpleLayout.vue'

// const i18n = createI18n({
//   legacy: false,
//   locale: 'ru',
//   fallbackLocale: 'en',
//   messages
// })

const app = createApp(App)

// app.use(i18n)
app.use(router)
app.use(store)

app.component('LayoutDefault', LayoutDefault)
app.component('LayoutSimple', LayoutSimple)

app.mount('#app')
