<template>
   <div class="page-content-superwrapper">
      <div class="page-news-wrapper page-content-wrapper grid-main">
         <aside class="page-aside-wrapper">
            <div class="page-content-filter-wrapper"></div>
         </aside>
         <div class="page-wrapper">
            <h1 class="page-header">Новости</h1>
            <NewsBlockCard />
            <NewsBlockCard />
            <NewsBlockCard />
            <NewsBlockCard />
            <NewsBlockCard />
            <NewsBlockCard />
            <NewsBlockCard />
            <div class="showmore-btn-wrapper">
               <btn>Показать больше</btn>
            </div>
         </div>
      </div>
      <div class="page-bottom-wrapper page-bottom-wrapper-news grid-main">
         <CandidateTop class="cont-wrapper-left"/>
         <TheFooter />
      </div>
   </div>
</template>



<script>
import { defineComponent, } from '@nuxtjs/composition-api'

import NewsBlockCard from '@/components/Generic/NewsBlock/NewsBlockCard'
import Btn from '@/components/Generic/Btn/Btn'
import CandidateTop from '@/components/Generic/CandidateTop/CandidateTop'
import TheFooter from '@/components/Generic/Footer/TheFooter'

export default defineComponent({
   name:'index',
   components: {
      NewsBlockCard,
      Btn,
      CandidateTop,
      TheFooter
    }
})
</script>


<style scoped>

</style>
