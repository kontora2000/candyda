<template>
   <div class="header-about-us-wrapper">
      <nuxt-link to="/about" class="button button-blur header-about-us">О&nbsp;проекте</nuxt-link>
   </div>
</template>



<script>
import { defineComponent, } from '@nuxtjs/composition-api'

export default defineComponent({
   name:'HeaderAbout',
})
</script>



<style scoped>
   .header-about-us-wrapper {
      grid-column: 28/31;
      grid-row: 1/1;
   }
   .header-about-us {
      display: inline-block;
   }
</style>