# Kpu-mobile 内建组件目录

本文档列出所有可用的框架内建组件及其使用场景。组件位于 `apps/<app>/src/ui/components/`。

> **提示**: 每个组件目录下都有 `README.md` 使用文档，包含完整的 API 说明 (Props/Slots/Events/Methods) 和示例代码。
> 查阅方式：`Read: apps/<app>/src/ui/components/Km[ComponentName]/README.md`

## 基础组件

### KmButton / KmButtonGroup
**用途**: 按钮组件，支持多种样式和状态
**特性**: loading 状态、disabled 状态、按钮组

### KmBadge
**用途**: 徽章标签，用于状态标识和数量提示

### KmIcon
**用途**: 图标组件，基于 [iconify](https://icon-sets.iconify.design/)
**示例**: `<KmIcon name="i-mdi:home" />`

### KmAvatar
**用途**: 头像组件

### KmCheckbox
**用途**: 复选框组件

### KmInput
**用途**: 输入框组件

### KmSelect
**用途**: 下拉选择组件

### KmSlider
**用途**: 滑块组件

### KmSwitch
**用途**: 开关组件

## 布局组件

### KmCard
**用途**: 卡片容器，支持标题、描述、内容、底部插槽
**特性**: title, description, footer slot

### KmDivider
**用途**: 分割线组件

### KmPageLayout
**用途**: 页面布局容器

### KmPageMain
**用途**: 页面主体容器

### KmScrollArea
**用途**: 滚动区域容器

### KmTabs
**用途**: 标签页组件

## 反馈组件

### KmModal
**用途**: 弹窗/对话框
**编程式用法**: `useKmModal()` — 打开/关闭弹窗、confirm 确认框

### KmDrawer
**用途**: 抽屉组件（侧边滑出）

### KmToast
**用途**: 轻提示消息（成功/错误/警告）
**编程式用法**: `import { kmToast } from '@/ui/components/KmToast'`，然后 `kmToast.success('操作成功')`

### KmLoading
**用途**: 加载遮罩
**编程式用法**: `useKmLoading(options)` — 控制加载状态

## 数据展示

### KmTrend
**用途**: 趋势指标组件
