import { createApp } from 'vue'
import { router } from './router'
import { Button } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'

const app = createApp(App)

const antUi = [Button]
antUi.forEach(ui => {
  app.use(ui)
})

app.use(router)

app.mount('#app')
