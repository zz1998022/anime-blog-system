<template>
  <div class="mask" :class="loadingClass"></div>
</template>

<script lang="ts">
import { defineComponent, reactive, onBeforeMount } from 'vue'

export default defineComponent({
  name: 'TheLoading',
  setup() {
    const loadingClass = reactive({
      fadeOut: false,
    })

    const handleWindowOnLoad = () => {
      loadingClass.fadeOut = true
    }

    onBeforeMount(() => {
      window.addEventListener('load', handleWindowOnLoad)
    })

    return {
      loadingClass,
    }
  },
})
</script>

<style lang="scss" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999999;
  height: 100vh;
  width: 100%;
  color: #fff;
  font-size: 100px;
  font-weight: 600;
  text-align: center;
  background-color: #000;
  transition: opacity 5s;
  pointer-events: none;
}

.fadeOut {
  opacity: 0;
}
</style>
