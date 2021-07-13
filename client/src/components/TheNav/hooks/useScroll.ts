import { reactive, onMounted, onUnmounted } from 'vue'
import _throttle from 'lodash/throttle'

export const useScroll = () => {
  const setupScrollValue = document.documentElement.scrollTop // setup 時的 scrollTop
  const scrollClass = reactive({
    scrolled: setupScrollValue !== 0, // 是否滾動（不為 0
    scrollDown: setupScrollValue > 0, // 是否滾下
  })
  let lastScrollValue = 0 // 紀錄上次的 scrollTop

  // 滾動事件迴調
  const handlerScrollEvent = () => {
    const currentScrollValue = document.documentElement.scrollTop // 觸發 scroll 時的 scrollTop

    // 切換 class 'scrollDown'
    scrollClass.scrollDown = currentScrollValue - lastScrollValue > 0

    lastScrollValue = currentScrollValue

    // 判斷 當前是否滾動 和 當前位置 切換 class 'scrolled'
    if (scrollClass.scrolled === false && currentScrollValue !== 0) {
      scrollClass.scrolled = true
    } else if (scrollClass.scrolled === true && currentScrollValue === 0) {
      scrollClass.scrolled = false
    }
  }

  onMounted(() => {
    // 頁面加載完成時再調用一次（防止剛進入滾動條不為 0 的情況）
    handlerScrollEvent()

    // 滾動事件綁定
    window.addEventListener('scroll', _throttle(handlerScrollEvent, 150))
  })

  // 滾動事件解綁
  onUnmounted(() => {
    window.removeEventListener('scroll', _throttle(handlerScrollEvent, 150))
  })

  return { scrollClass }
}
