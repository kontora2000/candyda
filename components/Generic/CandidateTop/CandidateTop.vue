<template>
   <div class="cont-wrapper cont-wrapper-right">
      <div class="cont-header-wrapper">
         <h3 class="cont-header">Топ <nuxt-link to="/" class="link-underline-solid">кандидатов</nuxt-link></h3>
      </div>
      <div class="top-candidates-cards-wrapper cont-wrapper-right-content-wrapper">
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
         <div class="cont-bottom">
            <btn />
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
   .candidate-card-cont:not(:first-child),
   .candidate-card-cont:not(:nth-child(2)),
   .candidate-card-cont:not(:nth-child(3)) {
      margin-top: 3.2rem;
   }
</style>