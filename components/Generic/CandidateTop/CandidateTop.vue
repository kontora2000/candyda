<template>
   <div class="cont-wrapper">
      <div class="cont-header-wrapper>">
         <h3 class="cont-header">
            Топ <nuxt-link to="/" class="link-underline">кандидатов</nuxt-link>
         </h3>
      </div>
      <div class="candidates-top-wrapper">
         <CandidateCard />
         <CandidateCard />
         <CandidateCard />
         <CandidateCard />
      </div>
   </div>
</template>



<script>
import { defineComponent, } from '@nuxtjs/composition-api'

import CandidateCard from '@/components/Generic/CandidateTop/CandidateCard/CandidateCard'

export default defineComponent({
   name:'CandidateTop',
   components: {
     CandidateCard,
   }
})
</script>

<style scoped>

</style>
