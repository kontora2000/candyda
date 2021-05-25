<template>
   <div class="header-about-us-wrapper">
      <nuxt-link to="/page/about" class="button button-blur header-about-us">О&nbsp;проекте</nuxt-link>
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
   grid-column: 28/32;
   grid-row: 1/1;
}
.header-about-us {
   display: inline-block;
}


@media (max-width: 460px) {
	.header-about-us-wrapper {
      grid-column: 4/6;
      grid-row: 2/2;
	}
}
</style>