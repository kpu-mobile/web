import { requestClient } from '@/api/request.ts'

/** 登录接口参数 */
export interface LoginParams {
  password?: string
  account?: string
}

/** 登录接口返回值 */
export interface LoginResult {
  account: string
  avatar: string
  token: string
}

export interface RefreshTokenResult {
  data: string
  status: number
}

export interface PermissionResult {
  permissions: string[]
}

export default {
  // 登录
  login: (data: LoginParams) => requestClient.post<LoginResult>('user/login', data, {
    baseURL: '/mock/',
  }),

  // 获取权限
  permission: () => requestClient.get<PermissionResult>('user/permission', {
    baseURL: '/mock/',
  }),
}
/**
 * 刷新accessToken
 */
export async function refreshTokenApi() {
  return requestClient.post<{
    token: string
    status: number
  }>(
    '/auth/refresh',
    null,
    {
      withCredentials: true,
      baseURL: '/mock/',
    },
  )
}
