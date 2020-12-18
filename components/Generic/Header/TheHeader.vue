<template>
   <header class="grid-main">
      <HeaderLogo />
      <HeaderNavbar />
      <HeaderSearchbar />
      <HeaderAbout />
   </header>
</template>



<script>
import { defineComponent, } from '@nuxtjs/composition-api'

import HeaderLogo from '@/components/Generic/Header/HeaderLogo'
import HeaderNavbar from '@/components/Generic/Header/HeaderNavbar'
import HeaderSearchbar from '@/components/Generic/Header/HeaderSearchbar'
import HeaderAbout from '@/components/Generic/Header/HeaderAbout'

export default defineComponent({
   name:'TheHeader',
   components: {
      HeaderLogo,
      HeaderNavbar,
      HeaderSearchbar,
      HeaderAbout,
    },
})
</script>



<style scoped>
   header {
      grid-column: 1/33;
      padding: 2.8rem 0 0;
      width: calc(100vw - 1.6rem);
   }
</style>