import { createApp } from 'vue'
import { Button } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'

const app = createApp(App)

const antUi = [Button]
antUi.forEach(ui => {
  app.use(ui)
})

app.mount('#app')
