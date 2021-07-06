<template>
  <header>
    <Nav />
    <a-layout-content class="main-background">
      <div class="title-container">
        <h2 class="main-title">NekoChan</h2>
        <h3 class="sub-title">愛貓就不要％貓 </h3>
      </div>
    </a-layout-content>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Nav from '../components/Nav/index.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Nav
  },
  setup() {
    return {
    }
  }
})
</script>

<style lang="scss" scoped>
.main-background {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: {
    image: url('../assets/default/Home/main.webp');
    attachment: fixed;
    position: center center;
    size: cover;
    repeat: no-repeat;
  }

  &::before {
    content: '';
    position: absolute;
    background-color: rgba($color: #000, $alpha: .3);
    width: 100%;
    height: 100%;
  }

  .title-container {
    z-index: 1;
    position: relative;
    top: -.5rem;
    text-align: center;
    user-select: none;

    .main-title {
      margin-bottom: 0;
      color: #fff;
      text-shadow: rgb(255 255 255 / 40%) 0 0 10px, rgb(255 255 255 / 40%) 0 0 20px, rgb(255 255 255 / 40%) 0 0 30px, rgb(255 255 0 / 40%) 0 0 40px, rgb(255 255 0 / 40%) 0 0 70px, rgb(255 255 0 / 40%) 0 0 80px;
      font: {
        size: 2.2rem;
        weight: 600;
      }
    }

    .sub-title {
      color: #fff;
      text-shadow: rgb(255 255 255 / 80%) 0 0 10px, rgb(255 255 255 / 80%) 0 0 20px, rgb(255 255 255 / 80%) 0 0 30px, rgb(255 0 102 / 80%) 0 0 40px, rgb(255 0 102 / 80%) 0 0 70px;
      font: {
        size: 1.2rem;
        weight: 500;
      }
    }
  }
}
</style>