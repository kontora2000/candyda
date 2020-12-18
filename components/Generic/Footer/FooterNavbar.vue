<template>
  <nav class="footer-nav">
      <ul>
         <li><nuxt-link to="/news" class="nav-link link-underline-solid">Новости</nuxt-link></li>
         <li><nuxt-link to="/top" class="nav-link link-underline-solid">Топ кандидатов</nuxt-link></li>
      </ul>
   </nav>
</template>



<script>
import { defineComponent, } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'FooterNavBar',
})
</script>



<style scoped>

</style>