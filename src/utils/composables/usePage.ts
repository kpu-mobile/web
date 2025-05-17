import useSettingsStore from '@/store/modules/settings.ts'

export default function usePage() {
  const route = useRoute()
  const router = useRouter()

  const settingsStore = useSettingsStore()
  function reload() {
    router.push({
      name: 'reload',
    })
  }
  function setCustomTitle(title: string) {
    settingsStore.setCustomTitle(route.fullPath, title)
  }
  function resetCustomTitle() {
    settingsStore.resetCustomTitle(route.fullPath)
  }
  return {
    reload,
    setCustomTitle,
    resetCustomTitle,
  }
}
