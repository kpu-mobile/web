import type { ImportsMap } from 'unplugin-auto-import/types'
import type { ComponentResolver, TypeImport } from 'unplugin-vue-components'
import { createRequire } from 'node:module'

const COMPONENT_PREFIX = 'Km'
const PACKAGE_NAME = createRequire(import.meta.url)('./package.json').name

const BASIC_COMPONENT_NAMES = [
  'KmAlert',
  'KmAvatar',
  'KmBadge',
  'KmButton',
  'KmButtonGroup',
  'KmCard',
  'KmCheckbox',
  'KmCheckboxGroup',
  'KmDivider',
  'KmDrawer',
  'KmIcon',
  'KmInput',
  'KmLabel',
  'KmLoading',
  'KmModal',
  'KmPageMain',
  'KmRadioGroup',
  'KmScrollArea',
  'KmSelect',
  'KmSlider',
  'KmSwitch',
  'KmTabs',
  'KmToast',
  'KmTrend',
] as const

const PRO_COMPONENT_NAMES = [
  'KmAnimatedCountToGroup',
  'KmAnimatedCountTo',
  'KmBlurReveal',
  'KmBorderBeam',
  'KmCodePreview',
  'KmCode',
  'KmCountTo',
  'KmDigitalCard',
  'KmEmpty',
  'KmFlipWords',
  'KmGradientButton',
  'KmMarquee',
  'KmMultiStepLoader',
  'KmParticlesBg',
  'KmPatternBg',
  'KmQrcode',
  'KmScratchOff',
  'KmScrollingText',
  'KmSmoothSwipe',
  'KmSparklesText',
  'KmSparkline',
  'KmSpringDrawer',
  'KmTextHighlight',
  'KmTimeAgo',
  'KmTimeline',
] as const

const COMPONENT_NAMES = [
  ...BASIC_COMPONENT_NAMES,
  ...PRO_COMPONENT_NAMES,
] as const

const AUTO_IMPORT_NAMES = [
  'useKmDrawer',
  'useKmLoading',
  'useKmModal',
  'useKmToast',
] as const

export const AutoImports: ImportsMap = {
  [PACKAGE_NAME]: [...AUTO_IMPORT_NAMES],
}

export function ComponentsResolver(): ComponentResolver {
  const names = new Set<string>(COMPONENT_NAMES)
  return {
    type: 'component',
    resolve(name: string) {
      if (name.startsWith(COMPONENT_PREFIX) && names.has(name)) {
        return {
          name,
          from: PACKAGE_NAME,
        }
      }
    },
  }
}

export const ComponentsType: TypeImport = {
  from: PACKAGE_NAME,
  names: [...COMPONENT_NAMES],
}
