<template>
  <footer class="footer">
    <div class="copyright">©2020 - 2021 By NekoChan</div>
    <div class="other">Nyahello!</div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer',
})
</script>

<style lang="scss" scoped>
@keyframes Gradient {
    0% {
        background-position: 0 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0 50%;
    }
}

.footer {
  padding: 2rem 1rem;
  color: #fff;
  text-align: center;
  background: linear-gradient(-45deg, #ee7752, #ce3e75, #ff5c5c, #fd589d);
  background-size: 400% 400%;
  animation: Gradient 10s ease infinite;
  box-shadow: rgba(245,122,122,0.4) 0px 0px 10px, rgba(245,122,122,0.4) 0px 0px 20px, rgba(245,122,122,0.4) 0px 0px 30px, rgba(245,122,122,0.5) 0px 0px 50px, rgba(245,122,122,0.6) 0px 0px 70px;
  user-select: none;
}

</style>