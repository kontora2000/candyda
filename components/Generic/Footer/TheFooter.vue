<template>
  <div class="footer-wrapper cont-wrapper-right">
    <div class="footer-cont-sticky">
      <footer>
        <FooterNavBar />
        <div class="copyright text-small">
          ©&thinsp;2021, Duma.one Все права защищены. При полном или частичном использовании материалов ссылка на ресурс обязательна
        </div>
      </footer>
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
  grid-row: span 2;
  margin: 0 0 4rem;
}

.footer-cont-sticky {
  position: sticky;
  position: -webkit-sticky;
  top: 3.2rem;
}

footer {
  background: var(--Black3);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.2rem;
  position: sticky;
  position: -webkit-sticky;
}

.copyright {
    color: var(--Black16);
    line-height: 1.4rem;
}



@media (max-width: 360px) {
  .footer-wrapper {
    margin-bottom: 2rem;
  }

  footer {
    padding: .8rem;
  }
}
</style>