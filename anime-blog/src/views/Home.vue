<template>
  <!-- 頭部 -->
  <header>
    <!-- 導航條 -->
    <Nav />

    <!-- 背景圖與標題 -->
    <a-layout-content class="main-background">
      <div class="title-container">
        <h2 class="main-title">NekoChan</h2>
        <h3 class="sub-title">愛貓就不要％貓 </h3>
      </div>
    </a-layout-content>
  </header>

  <!-- 文章區 -->
  <!-- <HomePost /> -->
  <h1>{{ postData }}</h1>
  <!-- 我覺得這個 HomePost 可以不用寫成一個組件 -->
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'
import Nav from '../components/Nav/index.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Nav
  },
  setup() {
    const postData = ref([])

    axios.get('http://localhost:3000/test/postData.json')
      .then(res => {
        console.log(res)
        postData.value = res.data
      })

    return {
      postData
    }
  }
})
</script>

<style lang="scss" scoped>
// 背景圖
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

  // 標題容器
  .title-container {
    z-index: 1;
    position: relative;
    top: -.5rem;
    text-align: center;
    user-select: none;

    // 主標題
    .main-title {
      margin-bottom: 0;
      color: #fff;
      text-shadow: rgb(255 255 255 / 40%) 0 0 10px, rgb(255 255 255 / 40%) 0 0 20px, rgb(255 255 255 / 40%) 0 0 30px, rgb(255 255 0 / 40%) 0 0 40px, rgb(255 255 0 / 40%) 0 0 70px, rgb(255 255 0 / 40%) 0 0 80px;
      font: {
        size: 2.2rem;
        weight: 600;
      }
    }

    // 副標題
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