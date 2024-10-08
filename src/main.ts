import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import 'halfmoon/css/halfmoon.min.css'
import 'halfmoon/css/cores/halfmoon.cores.css'

import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './themeHelper.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
