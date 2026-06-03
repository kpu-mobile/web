import type { HTMLAttributes } from 'vue'

export const CANVAS_SIZE = 400 as const

export interface BaseProps {
  /** 二维码内容 */
  value?: string
  /** 显示尺寸（px） */
  size?: number
  /** 错误纠正级别 */
  errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H'
  /** Logo 图片地址 */
  logo?: string
  /** Logo 大小比例（相对于二维码） */
  logoSize?: number
  /** Logo 背景色 */
  logoBackgroundColor?: string
  /** 前景色（二维码颜色） */
  foregroundColor?: string
  /** 背景色 */
  backgroundColor?: string
  /** 状态（loading/error/success 等） */
  status?: 'loading' | 'success' | 'expired' | 'error'
  /** 自定义类名 */
  class?: HTMLAttributes['class']
}
