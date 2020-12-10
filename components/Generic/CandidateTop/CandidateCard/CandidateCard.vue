<template>
   <div class="candidate-card-cont card-cont">
      <nuxt-link to="/">
         <VoteButton />
         <div class="candidate-avatar-wrapper">
            <img class="candidate-avatar" src="" />
         </div>
         <div class="candidate-name-wrapper">
            <span class="candidate-name">Валерий</span>
            <span class="candidate-surname">Сафонов</span>
         </div>
      </nuxt-link>
   </div>
</template>



<script>
import { defineComponent, } from '@nuxtjs/composition-api'

import VoteButton from '@/components/Generic/CandidateTop/CandidateCard/CandidateCardVoteButton'

export default defineComponent({
   name:'CandidateCard',
   components: {
     VoteButton,
   }
})
</script>



<style scoped>
   .candidate-card-cont {
   }
</style>