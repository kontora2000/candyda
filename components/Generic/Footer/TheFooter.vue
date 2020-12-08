<template>
<footer>
  <FooterNavBar/>
  <div class="copytight">
    © 2020, Candidaтище+ Все права защищены.При полном или частичном использовании материалов ссылка на ресурс обязательна
  </div>
</footer>
</template>

<script>
import { defineComponent, } from '@nuxtjs/composition-api'

import FooterNavbar from '@/components/Generic/Footer/FooterNavbar'

export default defineComponent({
    name: 'TheHeader',
    commponents: {
      FooterNavbar,
    },
    setup () {
      return {

      }
    }
})
</script>
