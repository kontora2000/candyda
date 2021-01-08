<template>
   <nuxt-link :to="`/candidate/${candidate.slug}`" class="candidate-card-cont card-cont" v-if="candidate.ava">
      <div class="card-cont-inner">
         <VoteButton :votes="candidate.votes || 0" />
         <div class="candidate-card-name-wrapper">
            <div class="candidate-name">{{ candidate.name }}</div>
            <div class="candidate-surname">{{ candidate.surname }}</div>
         </div>
         <div class="candidate-avatar-wrapper candidate-card-ava-small-wrapper">
            <img class="candidate-ava-small" :src="'https://api.prostokontora.ru/storage/' + candidate.ava" />
         </div>
      </div>
   </nuxt-link>
</template>



<script lang="ts">
import { defineComponent, PropType, } from '@nuxtjs/composition-api'

import VoteButton from '@/components/Generic/CandidateTop/CandidateCard/CandidateCardVoteButton.vue'
import {Candidate, } from '../../../../modules/types'

export default defineComponent({
   name:'CandidateCard',
   components: {
     VoteButton,
   },
  props: {
     candidate: Object as PropType<Candidate>,
  },
})
</script>

<style scoped>
.candidate-card-cont {
  max-height: 180px;
}

.candidate-card-ava-small-wrapper {
   border-radius: 12px;
   min-height: 18rem;
   overflow: hidden;
   position: relative;
   width: 100%;
}

.candidate-ava-small {
   border-radius: 0 0 14px 14px;
   height: 100%;
   object-fit: cover;
   position: absolute;
   top: 0;
   width: 100%;
   -webkit-mask-image: linear-gradient(180deg, #000000 53.78%, rgba(0, 0, 0, 0.991699) 55.33%, rgba(0, 0, 0, 0.96591) 56.88%, rgba(0, 0, 0, 0.921607) 58.43%, rgba(0, 0, 0, 0.858485) 59.98%, rgba(0, 0, 0, 0.777496) 61.53%, rgba(0, 0, 0, 0.681391) 63.08%, rgba(0, 0, 0, 0.575016) 64.63%, rgba(0, 0, 0, 0.464984) 66.18%, rgba(0, 0, 0, 0.358609) 67.73%, rgba(0, 0, 0, 0.262504) 69.28%, rgba(0, 0, 0, 0.181515) 70.83%, rgba(0, 0, 0, 0.118393) 72.38%, rgba(0, 0, 0, 0.0740896) 73.93%, rgba(0, 0, 0, 0.0483013) 75.48%, rgba(0, 0, 0, 0.04) 77.03%);
   mask-image: linear-gradient(180deg, #000000 53.78%, rgba(0, 0, 0, 0.991699) 55.33%, rgba(0, 0, 0, 0.96591) 56.88%, rgba(0, 0, 0, 0.921607) 58.43%, rgba(0, 0, 0, 0.858485) 59.98%, rgba(0, 0, 0, 0.777496) 61.53%, rgba(0, 0, 0, 0.681391) 63.08%, rgba(0, 0, 0, 0.575016) 64.63%, rgba(0, 0, 0, 0.464984) 66.18%, rgba(0, 0, 0, 0.358609) 67.73%, rgba(0, 0, 0, 0.262504) 69.28%, rgba(0, 0, 0, 0.181515) 70.83%, rgba(0, 0, 0, 0.118393) 72.38%, rgba(0, 0, 0, 0.0740896) 73.93%, rgba(0, 0, 0, 0.0483013) 75.48%, rgba(0, 0, 0, 0.04) 77.03%);
}

.candidate-card-name-wrapper {
   display: flex;
   flex-direction: column;
   font-weight: 500;
   font-size: 2rem;
   line-height: 2.4rem;
   margin: 0 .4rem .8rem;
   position: absolute;
   bottom: 0;
   width: calc(100% - .8rem);
   z-index: 2;
}

@media (max-width: 400px) {
   .candidate-card-cont {
      max-height: 220px;
   }
   .candidate-card-ava-small-wrapper {
      min-height: 22rem;
   }
}


@media (max-width: 360px) {
   .candidate-card-ava-small-wrapper {
      min-height: 18rem;
   }
}
</style>
