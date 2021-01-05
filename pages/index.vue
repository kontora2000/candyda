<template>
  <main class="grid-main">
    <MainMap />
    <div class="main-bottom-wrapper grid-main">
      <NewsBlock class="cont-wrapper-left"/>
      <CandidateTop class="cont-wrapper-right"/>
      <TheFooter />
    </div>
  </main>
</template>

<script>
import { defineComponent, } from '@nuxtjs/composition-api'
import MainMap from '@/components/Map/MainMap'
import NewsBlock from '@/components/Generic/NewsBlock/NewsBlock'
import CandidateTop from '@/components/Generic/CandidateTop/CandidateTop'
import TheFooter from '@/components/Generic/Footer/TheFooter'

export default defineComponent({
    name:'index',
    transition: 'fade',
    components: {
        MainMap,
        NewsBlock,
        CandidateTop,
        TheFooter,
    },

    head() {
        return {
            title: process.env.baseTitle + ' Главная',
        }
    },
})
</script>



<style scoped>
.main-bottom-wrapper {
  grid-column: 1/33;
  grid-row-gap: 4rem;
  grid-template-rows: 90rem 1fr 1fr;
}


@media (max-width: 460px) {
  .main-bottom-wrapper {
    grid-column: 1/7;
  }
}
</style>
