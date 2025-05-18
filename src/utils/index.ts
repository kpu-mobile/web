import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export * from './inference'
export * from './merge'
export * from './util'

export { cloneDeep, get, isEqual, set } from 'lodash-es'
// export { default as cloneDeep } from 'lodash.clonedeep';
// export { default as get } from 'lodash.get';
// export { default as isEqual } from 'lodash.isequal';
// export { default as set } from 'lodash.set';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
