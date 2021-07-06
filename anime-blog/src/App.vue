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
// Fira Code 400 500 700
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap');

@font-face {
  font-family: 'SourceHanSansTW';
  src: url('./assets/fonts/SourceHanSansTW-VF.otf.woff2');
}

html {
  font-size: 20px;
}

#app {
  font-family: 'Fira Code', monospace;
  font-family: 'Fira Code', 'SourceHanSansTW', monospace;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  height: 3000px; // test nav
}

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
