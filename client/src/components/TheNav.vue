<template>
  <a-layout-header class="nav" :class="{ scrolled: isScrolled, scrollDown: isScrollDown }">
    <a href="#">
      <a-typography-title class="title" :level="4">NekoChan</a-typography-title>
    </a>
    <a-menu class="menu" mode="horizontal">
      <a-menu-item class="item" key="test1">
        <a href="#Item1">首頁</a>
      </a-menu-item>
      <a-menu-item class="item" key="test2">
        <a href="#Item2">歸檔</a>
      </a-menu-item>
      <a-menu-item class="item" key="test3">
        <a href="#Item3">標籤</a>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref, onMounted, onUnmounted } from 'vue'
import _throttle from 'lodash/throttle'

export default defineComponent({
  name: 'TheNav',
  setup() {
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

    return {
      isScrolled,
      isScrollDown,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/variable';

.nav {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 9999;
  width: 100%;
  border-radius: 0;
  font-weight: 900;
  background-color: transparent;
  transition: all 0.3s;
  user-select: none;

  .title {
    margin: 0;
    color: rgba($color: #fff, $alpha: 0.7);
    transition: color 0.3s;

    &:hover {
      color: #fff;
    }
  }

  .menu {
    flex-grow: 1;
    justify-content: flex-end;
    border-bottom: none;
    background-color: transparent;
    font-size: 0.8rem;
    text-shadow: 1px 1px 1px rgba($color: #000, $alpha: 0.3);

    .item a {
      color: rgba($color: #fff, $alpha: 0.7);

      &:hover {
        color: #fff;
      }
    }
  }
}

.scrolled {
  border-bottom: none;
  background-color: rgba($color: #000000, $alpha: 0.7);

  .title {
    color: rgba($color: #fff, $alpha: 0.7);

    &:hover {
      color: $theme-color;
    }
  }

  .menu .item a {
    color: rgba($color: #fff, $alpha: 0.7);

    &:hover {
      color: $theme-color;
    }
  }
}

.scrollDown {
  transform: translateY(-64px);
}
</style>
