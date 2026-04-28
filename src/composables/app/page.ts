export function useAppPage() {
  const route = useRoute()
  const router = useRouter()

  const appSettingsStore = useAppSettingsStore()
  function reload() {
    router.push({
      name: 'reload',
    })
  }
  function setCustomTitle(title: string) {
    appSettingsStore.setCustomTitle(route.fullPath, title)
  }
  function resetCustomTitle() {
    appSettingsStore.resetCustomTitle(route.fullPath)
  }
  return {
    reload,
    setCustomTitle,
    resetCustomTitle,
  }
}
