import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

export function useRouterState() {
  const routePath = ref(window.location.pathname)

  const routeName = computed(() => {
    if (routePath.value === '/library') return 'library'
    if (routePath.value.startsWith('/pattern/')) return 'pattern'
    if (routePath.value === '/heritage') return 'heritage'
    if (routePath.value === '/find-blue') return 'find-menu'
    if (routePath.value === '/find-blue/card') return 'find-card'
    if (routePath.value === '/find-blue/game') return 'find-game'
    if (routePath.value === '/patternx') return 'patternx'
    return 'home'
  })

  function navigate(path) {
    if (routePath.value !== path) {
      window.history.pushState({}, '', path)
      routePath.value = window.location.pathname
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function onPopState() {
    routePath.value = window.location.pathname
  }

  onMounted(() => {
    window.addEventListener('popstate', onPopState)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('popstate', onPopState)
  })

  return {
    routeName,
    routePath,
    navigate,
  }
}
