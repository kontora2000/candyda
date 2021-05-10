<template>
  <nav class="footer-nav">
      <ul>
        <li><nuxt-link to="/news" class="nav-link link-underline-solid">Новости</nuxt-link></li>
        <li><nuxt-link to="/top" class="nav-link link-underline-solid">Топ кандидатов</nuxt-link></li>
        <li><nuxt-link to="/party" class="nav-link link-underline-solid">Партии</nuxt-link></li>
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
  margin-right: 2.4rem;
}

.footer-nav ul li {
  display: flex;
  margin-bottom: .8rem;
  min-width: 14rem;
}

.footer-nav .nav-link.link-underline-solid {
  border-bottom-color: var(--White24);
  border-bottom-width: 1.5px;
  color: var(--White100);
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2rem;
}
.footer-nav .nav-link.link-underline-solid:hover {
  border-bottom-color: var(--White100);
  color: var(--White100);
}



@media (max-width: 460px) {
  .footer-nav ul li {
    margin-right: .8rem;
    margin-bottom: 1.2rem;
  }
}



@media (max-width: 360px) {
  .footer-nav ul li {
    font-size: 1.4rem;
  }
}
</style>