import { faker } from '@faker-js/faker'
import { defineFakeRoute } from 'vite-plugin-fake-server/client'

// let i = 1
export default defineFakeRoute([
  {
    url: '/mock/user/login',
    method: 'post',
    response: ({ body }) => {
      return {
        msg: '',
        code: 0,
        data: {
          account: body.account,
          token: `${body.account}:${faker.internet.jwt()}`,
          avatar: 'https://kpu-mobile.kpui.top/logo.png',
        },
      }
    },
  },
  {
    url: '/mock/user/permission',
    method: 'get',
    response: ({ headers }, _req, _res) => {
      let permissions: string[] = []
      if (headers.token?.indexOf('admin') === 7) {
        permissions = [
          'permission.browse',
          'permission.create',
          'permission.edit',
          'permission.remove',
        ]
      }
      else if (headers.token?.indexOf('test') === 7) {
        permissions = [
          'permission.browse',
        ]
      }
      // 测试 401 错误
      // const code = i++ % 2 === 0 ? 0 : 401
      // if (code === 401) {
      //   res.statusCode = 401
      //   return {
      //     msg: 'token is expired',
      //     code,
      //     data: {},
      //   }
      // }
      return {
        msg: '',
        code: 0,
        data: {
          permissions,
        },
      }
    },
  },
  {
    url: '/mock/auth/refresh',
    method: 'post',
    response: ({ headers }) => {
      let token: string = ''
      if (headers.token?.indexOf('admin') === 7) {
        token = `admin:${faker.internet.jwt()}`
      }
      else if (headers.token?.indexOf('test') === 7) {
        token = `test:${faker.internet.jwt()}`
      }
      return {
        msg: '',
        code: 0,
        data: {
          token,
        },
      }
    },
  },
])
