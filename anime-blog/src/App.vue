<template>
  App
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

body::-webkit-scrollbar {
  width: 0.3em;
}

body::-webkit-scrollbar-thumb {
  background-color: gray;
}
</style>
