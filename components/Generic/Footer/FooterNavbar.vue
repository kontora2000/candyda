<template>
  <nav class="footer-nav">
      <ul>
        <li><nuxt-link to="/news" class="nav-link link-underline-solid">Новости</nuxt-link></li>
        <li><nuxt-link to="/top" class="nav-link link-underline-solid">Топ кандидатов</nuxt-link></li>
        <li><nuxt-link to="/about" class="nav-link link-underline-solid">О проекте</nuxt-link></li>
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
.footer-nav {
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
}

.footer-nav ul li {
  margin-right: 1.6rem;
  display: inline-flex;
}
</style>