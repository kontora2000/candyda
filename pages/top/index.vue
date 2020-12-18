<template>
   <div class="page-content-superwrapper">
      <div class="page-news-wrapper page-content-wrapper grid-main">
         <aside class="page-aside-wrapper">
            <div class="page-content-filter-wrapper"></div>
         </aside>
         <div class="page-wrapper">
            <h1 class="page-header">Топ кандидатов</h1>
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
         </div>
      </div>
      <div class="page-bottom-wrapper page-bottom-wrapper-news grid-main">
         <NewsBlock class="cont-wrapper-left"/>
         <TheFooter />
      </div>
   </div>
</template>



<script>
import { defineComponent, } from '@nuxtjs/composition-api'

import CandidateCard from '@/components/Generic/CandidateTop/CandidateCard/CandidateCard'
import Btn from '@/components/Generic/Btn/Btn'
import NewsBlock from '@/components/Generic/NewsBlock/NewsBlock'
import TheFooter from '@/components/Generic/Footer/TheFooter'

export default defineComponent({
   name:'index',
   components: {
     CandidateCard,
     Btn,
     NewsBlock,
     TheFooter,
   }
})
</script>



<style scoped>

</style>