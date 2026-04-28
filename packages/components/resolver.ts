import type { ImportsMap } from 'unplugin-auto-import/types'
import type { ComponentResolver, TypeImport } from 'unplugin-vue-components'

const COMPONENT_PREFIX = 'Km'
const PACKAGE_NAME = '@kpu-mobile/components'

const COMPONENT_NAMES = [
  'KmAnimatedCountTo',
  'KmAnimatedCountToGroup',
  'KmAvatar',
  'KmBadge',
  'KmBorderBeam',
  'KmBlurReveal',
  'KmButton',
  'KmButtonGroup',
  'KmFlipWords',
  'KmGradientButton',
  'KmCard',
  'KmCheckbox',
  'KmEmpty',
  'KmCode',
  'KmCodePreview',
  'KmCountTo',
  'KmDigitalCard',
  'KmDivider',
  'KmDrawer',
  'KmIcon',
  'KmInput',
  'KmLoading',
  'KmMarquee',
  'KmModal',
  'KmMultiStepLoader',
  'KmPageMain',
  'KmParticlesBg',
  'KmPatternBg',
  'KmQrcode',
  'KmScratchOff',
  'KmScrollArea',
  'KmScrollingText',
  'KmSelect',
  'KmSlider',
  'KmSmoothSwipe',
  'KmSparklesText',
  'KmSparkline',
  'KmSpringDrawer',
  'KmSwitch',
  'KmTabs',
  'KmTextHighlight',
  'KmTimeAgo',
  'KmTimeline',
  'KmToast',
  'KmTrend',
] as const

const AUTO_IMPORT_NAMES = [
  'useKmDrawer',
  'useKmLoading',
  'useKmModal',
  'kmToast',
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
