<template>
   <div class="cont-wrapper">
      <div class="cont-header-wrapper">
         <h3 class="cont-header">Топ <nuxt-link to="/top" class="link-underline-solid">кандидатов</nuxt-link></h3>
      </div>
      <div class="top-candidates-cards-wrapper block-cards-wrapper">
         <CandidateCard v-for="candidate in candidates"
                        :key="candidate.id"
                        :candidate="candidate"/>
         <div class="showmore-btn-wrapper">
            <btn @click="redirect('/top')">Смотреть весь&nbsp;топ</btn>
         </div>
      </div>
   </div>
</template>
<script>
import { defineComponent, useContext, onMounted, } from '@nuxtjs/composition-api'

import CandidateCard from '@/components/Generic/CandidateTop/CandidateCard/CandidateCard'
import Btn from '@/components/Generic/Btn'
import {useCandidateList,} from '@/composition/candidates';

export default defineComponent({
    name:'CandidateTop',
    components: {
        CandidateCard,
        Btn,
    },
    setup() {
        const { redirect, } = useContext()
        const { fetchCandidatesTop, candidates, page, } = useCandidateList()
        fetchCandidatesTop()
        return {
            candidates,
            page,
            redirect,
        }
    },
})
</script>


<style scoped>
.candidate-card-cont {
   grid-column: span 4;
}
.candidate-card-cont:not(:first-child):not(:nth-child(2)):not(:nth-child(3)) {
   margin-top: 3.2rem;
}

@media (max-width: 460px) {
   .candidate-card-cont {
      grid-column: span 2;
   }
}

@media (max-width: 360px) {
	.candidate-card-cont {
      grid-column: span 3;
   }
}
</style>
