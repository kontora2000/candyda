<template>
  <div class="footer-wrapper cont-wrapper-right">
    <div class="footer-cont-sticky">
      <footer>
        <FooterNavBar />
        <div class="copyright text-small">
          © 2020, Candidaтище+ Все права защищены. При полном или частичном использовании материалов ссылка на ресурс обязательна
        </div>
      </footer>
      <div class="by-kontora-wrapper text-small">
        <span>Спроектировала <a class="by-kontora-link link-underline-solid" href="https://kontora.cc">Контора</a></span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, } from '@nuxtjs/composition-api'

import FooterNavBar from '@/components/Generic/Footer/FooterNavbar.vue'

export default defineComponent({
    name: 'TheFooter',
    components: {
      FooterNavBar,
    }
})
</script>


<style scoped>
  .footer-wrapper {
    margin-top: 3.6rem;
  }

  footer {
    background: var(--GraySuperLight100);
    border-radius: 12px;
    padding: 1.2rem;
    position: sticky;
    position: -webkit-sticky;
  }

  .copyright {
      color: var(--GrayLight100);
  }

  .by-kontora-wrapper,
  .by-kontora-link {
    color: var(--GrayLight100);
  }

  .by-kontora-wrapper {
    display: flex;
    justify-content: flex-end;
    margin: 1.6rem 0 2.4rem;
  }

  .by-kontora-link {
    font-weight: 500;
  }
</style>