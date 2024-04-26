import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { createApp } from 'vue/dist/vue.esm-bundler' //'vue'
import App from './App.vue'
import router from './router'
import i18n from "./i18n"

import VueCookieComply from 'vue-cookie-comply'
import 'vue-cookie-comply/dist/style.css'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(VueCookieComply)
app.mount('#app')