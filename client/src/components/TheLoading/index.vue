<template>
  <div class="blackMask" :class="fade"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useOnload } from './hooks'

export default defineComponent({
  name: 'TheLoading',
  setup() {
    const { fade } = useOnload()

    return {
      fade,
    }
  },
})
</script>

<style lang="scss" scoped>
.blackMask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999999;
  height: 100vh;
  width: 100%;
  background-color: #000;
  transition: opacity 5s;
}

.fadeOut {
  opacity: 0;
}
</style>
