import 'vue'

declare module 'vue' {
  export interface GlobalComponents {
    KmAvatar: typeof import('./index')['KmAvatar']
    KmBadge: typeof import('./index')['KmBadge']
    KmButton: typeof import('./index')['KmButton']
    KmButtonGroup: typeof import('./index')['KmButtonGroup']
    KmCard: typeof import('./index')['KmCard']
    KmCheckbox: typeof import('./index')['KmCheckbox']
    KmDivider: typeof import('./index')['KmDivider']
    KmDrawer: typeof import('./index')['KmDrawer']
    KmIcon: typeof import('./index')['KmIcon']
    KmInput: typeof import('./index')['KmInput']
    KmBorderBeam: typeof import('./index')['KmBorderBeam']
    KmBlurReveal: typeof import('./index')['KmBlurReveal']
    KmLoading: typeof import('./index')['KmLoading']
    KmModal: typeof import('./index')['KmModal']
    KmPageMain: typeof import('./index')['KmPageMain']
    KmScrollArea: typeof import('./index')['KmScrollArea']
    KmSelect: typeof import('./index')['KmSelect']
    KmSlider: typeof import('./index')['KmSlider']
    KmSwitch: typeof import('./index')['KmSwitch']
    KmTabs: typeof import('./index')['KmTabs']
    KmToast: typeof import('./index')['KmToast']
    KmTrend: typeof import('./index')['KmTrend']
  }
}

export {}
