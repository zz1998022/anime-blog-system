import { createApp } from 'vue'
import { store } from './store'
import { router } from './router'
import { Layout, Typography, Menu } from 'ant-design-vue'
import App from './App.vue'

createApp(App)
  .use(store)
  .use(router)

  // Ant Design Vue
  .use(Layout)
  .use(Typography)
  .use(Menu)

  .mount('#app')
