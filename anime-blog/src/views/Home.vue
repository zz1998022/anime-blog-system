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

  <!-- 主要內容 -->
  <main class="main middle">
    <!-- 最近文章 -->
    <template v-for="post in recentPost" :key="post.id">
      <a href="#">
        <div class="card recent-post">
          <!-- 文章封面 -->
          <div class="post-card-picture">
            <img :src="post.picture">
          </div>

          <!-- 文章資訊 -->
          <div class="post-info">
            <!-- 文章標題 -->
            <h3 class="post-title">
              {{ post.title }}
            </h3>
            <!-- 發表時間 -->
            <span>發表於 {{ post.publistTime }} | </span>
            <!-- 更新時間 -->
            <span v-if="post.updateTime">更新於 {{ post.updateTime }} | </span>
            <!-- 分類 -->
            <span>{{ post.category }} | </span>
            <!-- 標籤 -->
            <span>{{ post.tag }} | </span>
            <!-- 文章內容 -->
            <p class="post-content-preview"> {{ post.content }}</p>
          </div>
        </div>
      </a>
    </template>
  </main>
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
    const recentPost = ref([])

    axios.get('http://localhost:3000/test/recentPost.json')
      .then(res => (recentPost.value = res.data))

    return {
      recentPost
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../styles/common';

// 背景圖
.main-background {
  position: relative;
  z-index: 9998;
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
    pointer-events: none;
  }

  // 標題容器
  .title-container {
    // z-index: 9999;
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

// 主要內容
.main {
  display: flex;
  padding: 40px 15px;

  // 最近文章
  .recent-post {
    display: flex;
    align-items: center;
    height: 17rem;

    // 文章封面容器
    .post-card-picture {
      width: 45%;
      height: 100%;
      overflow: hidden;

      // 文章封面
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform .6s;

        // 縮放封面
        &:hover {
          transform: scale(1.1);
        }
      }
    }

    // 文章資訊容器
    .post-info {
      width: 55%;
      padding: 0 40px;

      // 文章標題
      .post-title {
        margin-bottom: 6px;
        font-size: 1.4rem;
        color: #fff;

        // 單行省略號
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      // 發表時間、更新時間、分類、標籤
      span {
        font-size: 16px;
        font-weight: bold;
        color: #858585;
      }

      // 文章內容預覽
      .post-content-preview {
        margin: 6px 0 0 0;
        font-size: 16px;

        /* === 暫時 === */
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        // 限制在一個塊元素顯示的文本行數
        -webkit-line-clamp: 3;
        // 設定伸縮盒的子元素排列方式
        -webkit-box-orient: vertical;
      }
    }
  }
}

</style>