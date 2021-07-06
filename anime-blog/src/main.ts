import { createApp } from 'vue'
import { router } from './router'
import { Layout, Typography, Menu } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'

const app = createApp(App)

const antUi = [Layout, Typography, Menu]
antUi.forEach(ui => {
  app.use(ui)
})

app.use(router)

app.mount('#app')
