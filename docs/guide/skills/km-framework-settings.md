# km-framework-settings

## 适用场景

- 需要修改 `apps/<app>/src/settings/index.ts`
- 例如开关权限、水印、错误日志、哀悼模式
- 例如切换默认语言、明暗模式、主题、导航栏、标签栏、页面动画和版权信息

## 使用方式

直接说明以下信息即可：

- 目标应用，例如 `example`
- 要调整哪些设置项
- 期望效果

示例：

```text
在 example 应用里修改框架设置：
默认语言改成英文，开启水印，标签栏改成图文模式，并关闭页面进度条。
```

## 结果

通常会修改：

- `apps/<app>/src/settings/index.ts`

必要时会参考但不会直接修改：

- `apps/<app>/src/types/global.d.ts`
- `apps/<app>/src/settings/default.ts`
