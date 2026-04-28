# 登录

:::tip 说明
如果业务不需要用户体系，可以直接将 `apps/<app>/src/views/login.vue` 文件删除或修改为 `_login.vue` ，这样就不会生成登录路由。
:::

开发者在接入登录功能的时候，经常会遇到一些问题，比如：

- 替换真实接口后，无法正常登录
- 登录接口请求成功，但依旧提示登录
- ...

针对这些问题你需要依次检查以下几点：

1. 在 `.env.development` 里检查接口请求地址是否正确。
2. 在 `apps/<app>/src/api/index.ts` 里修改响应拦截器里的代码，按照实际情况进行调整。例如什么状态下是请求成功，什么状态下是请求异常，并进行错误提示。
3. 在 `apps/<app>/src/api/modules/user.ts` 里修改 `login` 函数，确保接口可以请求成功。
4. 在 `apps/<app>/src/store/modules/user.ts` 里修改 `isLogin` 计算属性，这部分需要根据实际存储的用户信息去判断是否登录。
