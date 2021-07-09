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
    <div class="recent-post">
      <template v-for="post in recentPost" :key="post.id">
        <a href="#">
          <div class="card recent-post-card">
            <!-- 文章封面 -->
            <div class="post-card-picture">
              <img :src="post.picture" loading="lazy">
            </div>

            <!-- 文章資訊 -->
            <div class="post-info">
              <h3 class="post-title">
                {{ post.title }}
              </h3>
              <span>發表於 {{ post.publistTime }} | </span>
              <span v-if="post.updateTime">更新於 {{ post.updateTime }} | </span>
              <span>{{ post.category }} | </span>
              <span>{{ post.tag }} | </span>
              <p class="post-content-preview"> {{ post.content }}</p>
            </div>
          </div>
        </a>
      </template>
    </div>

    <!-- 側邊資訊 -->
    <div class="right aside-content">
      <!-- 第一塊 - 個人資訊 -->
      <div class="card info-card">
        <!-- 頭像 名稱 簡介 -->
        <div class="info-card-avatar">
          <a-avatar class="avatar" :size="110" src="/default/avatar.webp"></a-avatar>
          <h2>NekoChan</h2>
          <h3>一位愛貓人士</h3>
        </div>
        <!-- 部落格資訊 -->
        <div class="info-card-data">
          <!-- 文章數量 -->
          <div class="info-card-data-item">
            <a href="#">
              <div class="headline">文章</div>
              <div class="length-num">1</div>
            </a>
          </div>
          <!-- 標籤數量 -->
          <div class="info-card-data-item">
            <a href="#">
              <div class="headline">標籤</div>
              <div class="length-num">1</div>
            </a>
          </div>
          <!-- 分類數量 -->
          <div class="info-card-data-item">
            <a href="#">
              <div class="headline">分類</div>
              <div class="length-num">1</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- 底部 -->
  <Footer />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'
import { Nav, Footer } from '../components/'

export default defineComponent({
  name: 'Home',
  components: {
    Nav,
    Footer
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
@import '../styles/variable';

// 背景圖
.main-background {
  position: relative;
  z-index: 9998;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: {
    image: url('/default/Home/main.webp');
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
    width: 75%;

    .recent-post-card {
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
          transition: color .5s;

          // 單行省略號
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        // 發表時間、更新時間、分類、標籤
        span {
          font: {
            size: 16px;
            weight: bold;
          }
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

      &:hover .post-info .post-title {
        color: $theme-color;
      }
    }
  }

  // 側邊資訊
  .aside-content {
    width: 25%;
    padding-left: 15px;

    // 第一塊 - 個人資訊
    .info-card {
      display: flex;
      flex-direction: column;
      justify-items: center;
      align-items: center;
      padding: 20px 24px;
      text-align: center;

      // 頭像 名稱 簡介
      .info-card-avatar {
        .avatar {
          transition: transform .5s;

          &:hover {
            transform: scale(1.1) rotate(360deg);
          }
        }

        h2 {
          margin: {
            top: 10px;
            bottom: 0;
          }
          font: {
            weight: 500;
            size: 1.2rem;
          }
          color: #fff;
        }

        h3 {
          color: #fff;
        }
      }

      // 部落格資訊
      .info-card-data {
        display: flex;
        flex-direction: row;
        margin: {
          top: 14px;
          bottom: 4px;
        }
        user-select: none;

        .info-card-data-item {
          width: 76.5px;
          height: 70px;

          a {
            color: #fff;

            .headline {
              font-size: .8rem;
            }

            .length-num {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>