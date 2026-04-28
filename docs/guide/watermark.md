# 页面水印&#x20;

## 使用

在应用配置中设置：

```ts {2-4}
export default setSettings({
  app: {
    watermark: true,
  },
})
```

效果如下：

![](/watermark.png){data-zoomable}

## 设置水印内容

在 `apps/<app>/src/store/modules/app/watermark.ts` 中可修改水印展示内容，以及其他水印相关配置。

水印同时支持动态更新，示例：

```vue
<script setup lang="ts">
const appWatermarkStore = useAppWatermarkStore()

appWatermarkStore.update({
  text: '设置水印',
  // 更多设置项请查看 apps/<app>/src/utils/watermark.ts 中 settingsType 类型定义
})

// 重置水印，恢复到默认设置
appWatermarkStore.update()
</script>
```
