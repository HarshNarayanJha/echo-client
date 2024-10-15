import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'halfmoon/css/cores/halfmoon.cores.css'
import 'halfmoon/css/halfmoon.min.css'
import './base.css'

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './themeHelper.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
