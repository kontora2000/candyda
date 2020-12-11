<template>
   <nuxt-link to="/" class="candidate-card-cont card-cont">
      <div class="card-cont-inner">
         <VoteButton />
         <div class="candidate-avatar-wrapper">
            <img class="candidate-avatar" src="" />
         </div>
         <div class="candidate-card-name-wrapper header-6">
            <div class="candidate-name">Валерий</div>
            <div class="candidate-surname">Сафонов</div>
         </div>
      </div>
   </nuxt-link>
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

   .candidate-card-name-wrapper {
      display: flex;
      flex-direction: column;
      margin: 0 .4rem;
      width: calc(100% - .8rem);
   }
</style>