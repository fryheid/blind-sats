import { createApp } from 'vue'
import { vfmPlugin } from 'vue-final-modal'
import Toast, { PluginOptions, POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import './assets/css/style.css'
import App from './App.vue'

const options: PluginOptions = {
  position: POSITION.TOP_CENTER
};

createApp(App)
.use(vfmPlugin as any)
.use(Toast, options)
.mount('#app')
