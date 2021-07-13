<template>
  <div class="mask">loading</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheLoading',
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
  background-color: #000;
  transition: opacity 5s;
  color: #fff;
  font-size: 100px;
  font-weight: 600;
  text-align: center;
}
</style>
