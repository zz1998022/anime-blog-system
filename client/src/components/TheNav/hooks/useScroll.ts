import { ref, onMounted, onUnmounted } from 'vue'
import _throttle from 'lodash/throttle'


export default function () {
  const setupScrollValue = document.documentElement.scrollTop // setup 時的 scrollTop
  const isScrolled = ref(setupScrollValue !== 0) // 是否滾動（不為 0
  const isScrollDown = ref(setupScrollValue > 0) // 是否滾下
  let lastScrollValue = 0 // 紀錄上次的 scrollTop

  // 滾動事件迴調
  const handlerScrollEvent = () => {
    const currentScrollValue = document.documentElement.scrollTop // 觸發 scroll 時的 scrollTop

    // 切換 class 'scrollDown'
    isScrollDown.value = currentScrollValue - lastScrollValue > 0

    lastScrollValue = currentScrollValue

    // 判斷 當前是否滾動 和 當前位置 切換 class 'scrolled'
    if (isScrolled.value === false && currentScrollValue !== 0) {
      isScrolled.value = true
    } else if (isScrolled.value === true && currentScrollValue === 0) {
      isScrolled.value = false
    }
  }

  // 滾動事件綁定
  onMounted(() => {
    // 頁面加載完成時再調用一次（防止剛進入滾動條不為 0 的情況）
    handlerScrollEvent()

    window.addEventListener('scroll', _throttle(handlerScrollEvent, 150))
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', _throttle(handlerScrollEvent, 150))
  })

  return {
    isScrolled,
    isScrollDown
  }
}
