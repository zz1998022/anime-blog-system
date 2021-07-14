<template>
  <!-- 遮罩 -->
  <div class="mask" :class="maskClass">
    <h3 class="loadingText">Loading</h3>
    <!-- 讀取背景圖 -->
    <div class="backgroundImage" :class="backgroundImageClass"></div>
  </div>

  <!-- 隱式讀取背景圖，讀取完畢後自動刪除元素 -->
  <img src="/default/loading.webp" style="display: none" @load="loadingImageLoaded" />
</template>

<script lang="ts">
import { defineComponent, reactive, onBeforeMount } from 'vue'

export default defineComponent({
  name: 'TheLoading',
  setup() {
    /**
     *  * 執行順序：
     *  - 1. 顯示 mask 與 LoadingText(延遲五秒後顯示) 直到 隱式讀取背景圖 觸發 load 事件 ; 主要針對 網過過慢、讀取背景圖檔案過大。
     *  - 2. 顯示背景圖 直到觸發 window load 事件 ; 顯示背景圖後，會自動刪除　隱式讀取背景圖 元素。
     */

    const maskClass = reactive({
      fadeOutMask: false,
    })
    const backgroundImageClass = reactive({
      fadeInBackgroundImage: false,
    })

    // window loaded callback
    const handleWindowOnLoad = () => {
      setTimeout(() => {
        maskClass.fadeOutMask = true // 開發時可能需要註釋這行(不淡出遮罩)
      }, 500) // 至少等待 500 毫秒
    }

    // image loaded callback
    const loadingImageLoaded = (e: any) => {
      e.target.remove() // 刪除自身 (img)
      backgroundImageClass.fadeInBackgroundImage = true // 淡入背景圖
    }

    onBeforeMount(() => {
      // * 注意 : window load 事件在 build 後才會正常觸發
      window.addEventListener('load', handleWindowOnLoad)

      /**
       * 在開發環境中，修改此組件時，dev server 刷新時不會觸發 window load 事件，
       * 所以加了一個條件判斷是否為開發環境，並手動觸發 handleWindowOnLoad 。
       */
      // console.log(import.meta.env)
      if (import.meta.env.DEV) handleWindowOnLoad()
    })

    return {
      maskClass,
      backgroundImageClass,
      loadingImageLoaded,
    }
  },
})
</script>

<style lang="scss" scoped>
@keyframes loadingText {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}

.mask {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999999;
  height: 100vh;
  width: 100%;
  background-color: #000;
  transition: opacity 2s;

  .loadingText {
    color: #fff;
    opacity: 0;
    text-shadow: 0px 0px 20px #fff;
    font-size: 2rem;
    animation: loadingText 10s 5s linear infinite;
  }
}

.fadeOutMask {
  opacity: 0;
  pointer-events: none;
}

.backgroundImage {
  position: absolute;
  z-index: 999999999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/default/loading.webp');
  opacity: 0;
  transition: opacity 2s;
}

.fadeInBackgroundImage {
  opacity: 1;
}
</style>
