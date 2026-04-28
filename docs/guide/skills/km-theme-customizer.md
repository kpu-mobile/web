# km-theme-customizer

## 适用场景

- 需要一套新的品牌主题
- 想做清新、科技感、莫兰迪、北欧极简等风格主题
- 想把设计稿颜色或品牌色转换成 Kpu-mobile 主题

## 使用方式

直接说明以下信息即可：

- 目标应用，例如 `example`
- 想要的风格
- 品牌主色或参考色
- 是否需要直接启用该主题

示例：

```text
在 example 应用里做一套新的 Kpu-mobile 主题，
风格偏科技感，品牌主色是 #2563EB，并直接启用。
```

## 结果

通常会修改：

- `apps/<app>/themes/index.ts`
- `apps/<app>/src/settings/index.ts`

主题结果通常同时包含：

- light 主题
- dark 主题
