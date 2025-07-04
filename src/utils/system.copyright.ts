// 请勿删除
if (import.meta.env.PROD) {
  const copyright_common_style = 'font-size: 14px; margin-bottom: 2px; padding: 6px 8px; color: #fff;'
  const copyright_main_style = `${copyright_common_style} background: #e24329;`
  const copyright_sub_style = `${copyright_common_style} background: #707070;`
  if (navigator.language.toLowerCase() === 'zh-cn') {
    // eslint-disable-next-line no-console
    console.info('%c由%cKpu-mobile%c驱动', copyright_sub_style, copyright_main_style, copyright_sub_style, '\nhttps://kpu-mobile.kpui.top')
  }
  else {
    // eslint-disable-next-line no-console
    console.info('%cPowered by%cKpu-mobile', copyright_sub_style, copyright_main_style, '\nhttps://kpu-mobile.kpui.top')
  }
}

export {}
