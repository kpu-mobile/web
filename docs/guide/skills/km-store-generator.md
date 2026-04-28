# km-store-generator

## 适用场景

- 多个页面需要共享数据
- 数据需要持久化，刷新后不能丢
- 需要管理登录态、用户信息、购物车、通知或权限等全局状态

## 使用方式

直接说明以下信息即可：

- 目标应用，例如 `example`
- Store 的用途
- 需要哪些 state 字段
- 是否需要持久化
- 是否需要异步 action 或 computed

示例：

```text
在 example 应用里创建一个购物车 store，
需要保存商品列表、总价和勾选状态，刷新后保留数据。
```

## 结果

通常会修改或新增：

- `apps/<app>/src/store/modules/<name>.ts`

必要时会补充说明：

- 如何在组件中直接使用 `useXxxStore()`
- 如何在组件外传入 pinia 实例调用
