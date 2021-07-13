import { ref, onBeforeMount, onUnmounted } from 'vue'

export const useOnload = () => {
  const fade = ref('')

  function handleWindowOnLoad() {
    fade.value = 'fadeOut'
  }

  onBeforeMount(() => {
    window.addEventListener('load', handleWindowOnLoad)
  })

  onUnmounted(() => {
    window.removeEventListener('load', handleWindowOnLoad)
  })

  return {
    fade,
  }
}
