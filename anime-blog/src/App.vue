<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="scss">
/* 字體 */
// Fira Code 400 500 700
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap');

@font-face {
  font-family: 'SourceHanSansTW';
  src: url('./assets/fonts/SourceHanSansTW-VF.otf.woff2');
}

/* root font for rem */
html {
  font-size: 20px;
}

/* 全局 */
#app {
  font-family: 'Fira Code', 'SourceHanSansTW', monospace;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  overflow: hidden;
  background: {
    image: url('./assets/default/background.webp');
    attachment: fixed;
    position: center center;
    size: cover;
    repeat: no-repeat;
  }

  // 黑色遮罩
  &::before {
    position: fixed;
    z-index: 999;
    content: '';
    height: 100%;
    width: 100%;
    background-color: rgba($color: #000, $alpha: .2);
    pointer-events: none;
  }

  height: 3000px; // test nav
}

/* 滾動條 */
body::-webkit-scrollbar {
  width: 0.3rem;
}

body::-webkit-scrollbar-track {
  background-color: #000;
}

body::-webkit-scrollbar-thumb {
  background-color: rgb(68, 68, 68);
}
</style>
