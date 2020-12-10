<template>
  <div class="layout-inner grid-main">
    <TheHeader />
    <nuxt />
    <TheFooter />
  </div>
</template>



<script lang="ts">
import TheHeader from '@/components/Generic/Header/TheHeader'
import TheFooter from '@/components/Generic/Footer/TheFooter'

import { defineComponent, } from '@nuxtjs/composition-api'

export default defineComponent({
    components: {
      TheHeader,
      TheFooter,
    }
})
</script>



<style scoped>
  .layout-inner {
    margin: 0 .8rem;
    width: calc(100vw - 1.6rem);
  }
</style>