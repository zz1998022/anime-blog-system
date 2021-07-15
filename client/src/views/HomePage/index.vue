<template>
  <!-- 頭部 -->
  <header>
    <!-- 導航條 -->
    <TheNav />

    <!-- 背景圖與標題 -->
    <div class="main-background">
      <div class="title-container">
        <h2 class="main-title">NekoChan</h2>
        <h3 class="sub-title">{{ subTitle }}</h3>
      </div>
    </div>
  </header>

  <!-- 主要內容 -->
  <main class="main middle">
    <!-- 最近文章 -->
    <div class="recent-post">
      <!-- 請求完成、有文章 -->
      <template v-if="getRecentPostStatus && recentPost.length > 0">
        <template v-for="post in recentPost" :key="post.id">
          <a class="card recent-post-card" href="#">
            <!-- 文章封面 -->
            <div class="post-card-picture">
              <img :src="post.picture" loading="lazy" />
            </div>
            <!-- 文章資訊 -->
            <div class="post-info">
              <h3 class="post-title">
                {{ post.title }}
              </h3>
              <span>發表於 {{ post.publishTime }}</span>
              <span v-if="post.updateTime"> | 更新於 {{ post.updateTime }}</span>
              <span v-if="post.category"> | {{ post.category }}</span>
              <span v-if="post.tag"> | {{ post.tag }}</span>
              <p class="post-content-preview">{{ post.content }}</p>
            </div>
          </a>
        </template>
      </template>
      <!-- 請求完成、沒有文章 -->
      <template v-else-if="getRecentPostStatus && recentPost.length === 0">
        <div class="card no-post">這裡什麼文章都沒有，<br />大家可以回家了。</div>
      </template>
      <!-- 請求尚未完成 -->
      <template v-else-if="!getRecentPostStatus">
        <div class="card no-post">文章請求中...</div>
      </template>
      <!-- 其他狀況 -->
      <template v-else>
        <div class="card no-post">看看你幹了什麼，<br />我連最近文章的數量都偵測不到了。</div>
      </template>
    </div>

    <!-- 側邊資訊 -->
    <div class="right aside-content">
      <!-- 第一塊 - 個人資訊 -->
      <div class="card info-card">
        <!-- 頭像 名稱 簡介 -->
        <div class="info-card-avatar">
          <img class="avatar" src="/default/avatar.webp" alt="" />
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
  <TheFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { TheNav, TheFooter } from '@/components'
import { useGetRecentPost, useGetTitle } from './hooks'

export default defineComponent({
  name: 'HomePage',
  components: {
    TheNav,
    TheFooter,
  },
  setup() {
    /**
     * TODO: 最近文章翻頁 (需要後端接口，首頁的基本資料："文章總數"、分類數量、標籤數量、標題...)
     */

    const { recentPost, getRecentPostStatus } = useGetRecentPost()
    const { subTitle } = useGetTitle()

    return {
      recentPost,
      getRecentPostStatus,
      subTitle,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/common';

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
    background-color: rgba($color: #000, $alpha: 0.3);
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  // 標題容器
  .title-container {
    position: relative;
    top: -0.5rem;
    height: 10rem;
    text-align: center;
    user-select: none;

    // 主標題
    .main-title {
      margin-bottom: 0;
      color: #fff;
      text-shadow: rgb(255 255 255 / 40%) 0 0 10px, rgb(255 255 255 / 40%) 0 0 20px, rgb(255 255 255 / 40%) 0 0 30px,
        rgb(255 255 0 / 40%) 0 0 40px, rgb(255 255 0 / 40%) 0 0 70px, rgb(255 255 0 / 40%) 0 0 80px;
      font: {
        size: 2.2rem;
        weight: 600;
      }
    }

    // 副標題
    .sub-title {
      display: inline-block;
      height: 1.2rem;
      border-right: solid 0.2rem #fff;
      padding-right: 0.3rem;
      color: #fff;
      text-shadow: rgb(255 255 255 / 80%) 0 0 10px, rgb(255 255 255 / 80%) 0 0 20px, rgb(255 255 255 / 80%) 0 0 30px,
        rgb(255 0 102 / 80%) 0 0 40px, rgb(255 0 102 / 80%) 0 0 70px;
      line-height: 100%;
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
    flex-direction: column;
    width: 75%;

    // 文章卡片
    .recent-post-card {
      display: flex;
      align-items: center;
      height: 17rem;

      // 文章間距
      &:not(:first-child) {
        margin-top: 1rem;
      }

      // 偶數
      &:nth-child(even) {
        // 封面
        .post-card-picture {
          order: 1;
        }
      }

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
          transition: transform 0.6s;

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
          transition: color 0.5s;

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
    }

    // 沒有文章
    .no-post {
      padding: 2rem;
      text-align: center;
      font-size: 2rem;
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
          width: 110px;
          height: 110px;
          border-radius: 50%;
          transition: transform 0.5s;

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
              font-size: 0.8rem;
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
