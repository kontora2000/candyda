<template>
   <header class="grid-main">
      <div class="logo-navbar-container" v-if="!$device.isMobile">
        <HeaderLogo />
        <HeaderNavbar  />
      </div>
      <HeaderLogo v-if="$device.isMobile"/>
      <HeaderSearchbar />
      <HeaderAbout  v-if="!$device.isMobile"/>
      <HeaderBurger  v-if="$device.isMobile" />
   </header>
</template>



<script>
import { defineComponent, } from '@nuxtjs/composition-api'

import HeaderLogo from '@/components/Generic/Header/HeaderLogo'
import HeaderNavbar from '@/components/Generic/Header/HeaderNavbar'
import HeaderSearchbar from '@/components/Generic/Header/HeaderSearchbar'
import HeaderAbout from '@/components/Generic/Header/HeaderAbout'
import HeaderBurger from '@/components/Generic/Header/HeaderBurger'

export default defineComponent({
    name:'TheHeader',
    components: {
        HeaderLogo,
        HeaderNavbar,
        HeaderSearchbar,
        HeaderAbout,
        HeaderBurger,
    },
})
</script>



<style scoped>
header {
   grid-column: 1/33;
   padding: 2.8rem 0 0;
   position: relative;
   width: calc(100vw - 1.6rem);
}

.logo-navbar-container {
  position: fixed;
}

@media (min-width: 1460px) {
   header {
      margin: 0 auto;
      max-width: 1460px;
      width: 100%;
   }
}

@media (max-width: 460px) {
	header {
		grid-column: 1/7;
		width: calc(100vw - 2.4rem);
	}
}
</style>
