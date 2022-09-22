import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'virtual:windi.css'

import { createPinia } from 'pinia'
const pinia = createPinia()

createApp(App).use(pinia).mount('#app')
