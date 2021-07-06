import { createApp } from 'vue'
import { router } from './router'
import { Layout, Typography, Menu } from 'ant-design-vue'
import App from './App.vue'

createApp(App)
  // 路由
  .use(router)

  // Ant Design Vue
  .use(Layout)
  .use(Typography)
  .use(Menu)

  .mount('#app')