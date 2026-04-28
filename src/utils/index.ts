import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export * from './inference'
export * from './merge'
export * from './util'

export { cloneDeep, get, isEqual, set } from 'es-toolkit/compat'
// export { default as cloneDeep } from 'lodash.clonedeep';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
