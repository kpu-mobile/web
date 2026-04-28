import type { App } from 'vue'
import dayjs from './dayjs'

export default function errorLog(app: App) {
  const appSettingsStore = useAppSettingsStore()
  if (import.meta.env.MODE !== 'development' && appSettingsStore.settings.app.errorLog) {
    // 由于 errorHandler 拦截错误，如果不进行手动输出，在开发者控制台里将看不到任何错误提示
    // 所以默认在开发环境强制关闭该功能
    app.config.errorHandler = (err: any, _vm, info) => {
      // 在此处编写错误上报代码
      // 以下代码为演示代码

      const log = {
        url: location.href,
        err: {
          message: err.message,
          stack: err.stack,
        },
        info,
        datetime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      }
      sessionStorage.setItem('errorLog', JSON.stringify(log))
    }
  }
}
