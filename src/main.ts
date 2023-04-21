import { createApp } from 'vue'

import App from './App.vue'
import router from '@/router/index'
import { createPinia } from 'pinia';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'amfe-flexible/index.js'

import './style/index.css'
import './style/tailwind.css'
import 'element-plus/dist/index.css';
const app = createApp(App);
app.use(createPinia()).use(router).mount('#app')
// 注册elementplus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
