import { createApp } from 'vue'
import { vfmPlugin } from 'vue-final-modal'
import './assets/css/style.css'
import App from './App.vue'

createApp(App)
.use(vfmPlugin as any)
.mount('#app')
