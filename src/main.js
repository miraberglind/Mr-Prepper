// Import styles
import 'bootstrap/dist/css/bootstrap.min.css' // Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css' // Bootstrap Icons
import 'bootstrap/dist/js/bootstrap.bundle.min.js' //bootstrap-Js
import './assets/main.css' // Custom styles, make sure to import last to override Bootstrap styles if needed

// Import scripts and GSAP libraries
import { createApp } from 'vue' // Vue 3 createApp function
import { createPinia } from 'pinia' // State management with Pinia
import { gsap } from 'gsap' // GSAP for animations
import { ScrollTrigger } from 'gsap/ScrollTrigger' // ScrollTrigger plugin for GSAP

import App from './App.vue' // Root Vue component
import router from './router' // Vue Router for navigation

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

// Create and mount the Vue application
const app = createApp(App)
app.use(createPinia()) // Use Pinia for state management
app.use(router) // Use Vue Router for navigation
app.mount('#app') // Mount the app to the DOM
