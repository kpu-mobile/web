import { i18n } from '@/locales'

// 自定义指令
import directive from '@/utils/directive'
import App from './App.vue'
import router from './router'
import pinia from './store'
import ui from './ui/provider'
import errorLog from './utils/error.log'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'

import '@/utils/baidu'
// UnoCSS
import 'virtual:uno.css'
// 全局样式
import '@/assets/styles/globals.css'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(ui)
app.use(i18n)
directive(app)
errorLog(app)

app.mount('#app')
