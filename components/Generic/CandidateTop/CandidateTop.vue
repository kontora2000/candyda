<template>
   <div class="cont-wrapper">
      <div class="cont-header-wrapper">
         <h3 class="cont-header">Топ <nuxt-link to="/top" class="link-underline-solid">кандидатов</nuxt-link></h3>
      </div>
      <div class="top-candidates-cards-wrapper block-cards-wrapper">
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
         <CandidateCard />
         <div class="showmore-btn-wrapper">
            <btn>Смотреть весь&nbsp;топ</btn>
         </div>
      </div>
   </div>
</template>



<script>
import { defineComponent, } from '@nuxtjs/composition-api'

import CandidateCard from '@/components/Generic/CandidateTop/CandidateCard/CandidateCard'
import Btn from '@/components/Generic/Btn/Btn'

export default defineComponent({
   name:'CandidateTop',
   components: {
     CandidateCard,
     Btn,
   }
})
</script>



<style scoped>
   .top-candidates-cont {
      
   }

   .candidate-card-cont {
      grid-column: span 4;
   }
   .candidate-card-cont:not(:first-child):not(:nth-child(2)):not(:nth-child(3)) {
      margin-top: 3.2rem;
   }
</style>