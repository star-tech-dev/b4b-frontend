import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import LayoutDefault from '@/layouts/DefaultLayout.vue'
import LayoutSimple from '@/layouts/SimpleLayout.vue'

const app = createApp(App)

app.use(router)

app.component('LayoutDefault', LayoutDefault)
app.component('LayoutSimple', LayoutSimple)

app.mount('#app')
