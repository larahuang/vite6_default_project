import { createApp } from 'vue'
// 路由
import { setupRouter } from './router/router'
import './style.css'
import App from './App.vue'


createApp(App)
.use(setupRouter) 
.mount('#app')