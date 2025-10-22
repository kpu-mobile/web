import i18n from '@/locales'

// 自定义指令
import directive from '@/utils/directive'
import errorLog from '@/utils/error.log'
import App from './App.vue'
import router from './router'
import pinia from './store'

import ui from './ui/provider'
import '@/utils/baidu'
import './utils/system.copyright'

// 加载 svg 图标
import 'virtual:svg-icons-register'
// UnoCSS
import '@unocss/reset/tailwind-compat.css'
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
