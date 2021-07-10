<template>
  <a-layout-header class="nav" :class="{ scrolled: isScrolled, scrollDown: isScrollDown }">
    <a href="#">
      <a-typography-title class="title" :level="4">
        NekoChan
      </a-typography-title>
    </a>
    <a-menu class="menu" mode="horizontal">
      <a-menu-item class="item" key="test1">
        <a href="#Item1">首頁</a>
      </a-menu-item>
      <a-menu-item class="item" key="test2">
        <a href="#Item2">歸檔</a>
      </a-menu-item>
      <a-menu-item class="item" key="test3">
        <a href="#Item3">標籤</a>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useScroll from './hooks/useScroll'

export default defineComponent({
  name: 'NekoNav',
  setup() {
    const { isScrolled, isScrollDown } = useScroll()

    return {
      isScrolled,
      isScrollDown
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../../styles/variable';

.nav {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 9999;
  width: 100%;
  border-radius: 0;
  font-weight: 900;
  background-color: transparent;
  transition: all .3s;
  user-select: none;

  .title {
    margin: 0;
    color: rgba($color: #fff, $alpha: .7);
    transition: color .3s;

    &:hover {
      color: #fff;
    }
  }

  .menu {
    flex-grow: 1;
    justify-content: flex-end;
    border-bottom: none;
    background-color: transparent;
    font-size: .8rem;
    text-shadow: 1px 1px 1px rgba($color: #000, $alpha: .3);

    .item a {
      color: rgba($color: #fff, $alpha: .7);

      &:hover {
        color: #fff;
      }
    }
  }
}

.scrolled {
  border-bottom: none;
  background-color: rgba($color: #000000, $alpha: .7);

  .title {
    color: rgba($color: #fff, $alpha: .7);

    &:hover {
      color: $theme-color;
    }
  }

  .menu .item a {
    color: rgba($color: #fff, $alpha: .7);

    &:hover {
      color: $theme-color;
    }
  }
}

.scrollDown {
  transform: translateY(-64px);
}
</style>