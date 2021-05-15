<template>
  <main class="grid-main">
    <div class="main-bottom-wrapper grid-main">
      <NewsBlock class="cont-wrapper-left" />
      <CandidateTop class="cont-wrapper-right" />
      <PartyTop class="cont-wrapper-right party-top-cont"/>
      <TheFooter />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, } from '@nuxtjs/composition-api'

import NewsBlock from '@/components/Generic/NewsBlock/NewsBlock.vue'
import CandidateTop from '@/components/Generic/CandidateTop/CandidateTop.vue'
import PartyTop from '@/components/Party/PartyTop.vue'
import TheFooter from '@/components/Generic/Footer/TheFooter.vue'

export default defineComponent({
    name:'index',
    transition: 'fade',
    components: {
        NewsBlock,
        CandidateTop,
        PartyTop,
        TheFooter,
    },
    head() {
        return {
            title: 'Duma.one - Главная',
        }
    },
})
</script>

<style scoped>
.main-bottom-wrapper {
  grid-column: 1/33;
}


@media (max-width: 460px) {
  .main-bottom-wrapper {
    grid-column: 1/7;
    grid-template-rows: auto;
  }

  .main-bottom-wrapper .cont-wrapper-right {
    grid-row: 1/2;
  }

  .main-bottom-wrapper .party-top-cont {
    grid-row: 2/3;
  }

  .main-bottom-wrapper .cont-wrapper-left {
    grid-row: 3/4;
  }

  .main-bottom-wrapper .footer-wrapper {
    grid-row: 4/5;
  }
}
</style>
