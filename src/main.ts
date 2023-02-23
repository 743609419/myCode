import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/el-message.css';
import "normalize.css";
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import "./assets/css/index.less";
import router from './router';

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(createPinia())
app.use(router)

app.mount('#app')
