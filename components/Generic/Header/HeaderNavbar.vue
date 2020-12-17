<template>
   <nav class="site-nav">
      <ul>
         <li><nuxt-link to="/news" class="nav-link link-underline-solid">Новости</nuxt-link></li>
         <li><nuxt-link to="/top" class="nav-link link-underline-solid">Топ кандидатов</nuxt-link></li>
      </ul>
   </nav>
</template>



<script>
import { defineComponent, } from '@nuxtjs/composition-api'

export default defineComponent({
   name:'HeaderNavbar',
})
</script>



<style scoped>
   .site-nav {
      grid-column: 2/9;
      grid-row: 2/2;
      position: absolute;
      top: 10rem;
      left: 4.8rem;
      z-index: 10;
   }
   .site-nav li:not(:first-child) {
      margin-top: .8rem;
   }
   .nav-link {
      border-bottom-width: 2.5px;
      font-size: 2rem;
      font-weight: 500;
   }
</style>