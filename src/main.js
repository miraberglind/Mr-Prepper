import './assets/main.css'
// Import bootstrap into the project
import 'bootstrap/dist/css/bootstrap.min.css'
// Import bootstrap-icons into the project
import 'bootstrap-icons/font/bootstrap-icons.css'
// Import bootstrap-Js into the project
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
