<template>
  <div class="layout-inner grid-main">
    <BgCircles />
    <TheHeader />
    <nuxt />
  </div>
</template>



<script lang="ts">
import TheHeader from '@/components/Generic/Header/TheHeader'
import BgCircles from '@/components/Generic/Bg/BgCircles'

import { defineComponent, } from '@nuxtjs/composition-api'

export default defineComponent({
    components: {
      BgCircles,
      TheHeader,
    }
})
</script>



<style scoped>
.layout-inner {
  margin: 0 .8rem;
  width: calc(100vw - 1.6rem);
}

@media (min-width: 1460px) {
  .layout-inner {
    margin: 0 auto;
    max-width: 1460px;
    width: 100%;
  }
}
</style>