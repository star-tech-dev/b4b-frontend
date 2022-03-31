import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './locale/i18n'

import LayoutDefault from '@/layouts/DefaultLayout.vue'
import LayoutSimple from '@/layouts/SimpleLayout.vue'

const app = createApp(App).use(i18n).use(i18n)

// app.use(i18n)
app.use(router)
app.use(store)

app.component('LayoutDefault', LayoutDefault)
app.component('LayoutSimple', LayoutSimple)

app.mount('#app')
