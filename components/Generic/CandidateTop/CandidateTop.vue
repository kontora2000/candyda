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
import { defineComponent, useContext,  useFetch,} from '@nuxtjs/composition-api'

import CandidateCard from '@/components/Generic/CandidateTop/CandidateCard/CandidateCard'
import Btn from '@/components/Generic/Btn'
import {useCandidateList,} from '@/composition/candidates';
import {useAxios,} from '@/composition/axios';

export default defineComponent({
    name:'CandidateTop',
    components: {
        CandidateCard,
        Btn,
    },
    setup() {
        const { redirect, } = useContext()
        const { $axios, } = useAxios()
        const { candidates, page,  } = useCandidateList()
        const { fetch: fetchC, } = useFetch(async() => {
            try {
                const result = await $axios.$get('/candidates/list/1')
                candidates.value = result.data
                // isNeedToUpload.value = result.next_page_url !== null
                // page.value = isNeedToUpload ? page.value : page.value + 1
            }
            catch(e) {
                error({ statusCode: e?.response?.status, })
            }
        })

        fetchC()
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
   .top-candidates-cards-wrapper {
      margin-top: 1.2rem;
   }
   .candidate-card-cont {
      grid-column: span 2;
   }
   .candidate-card-cont:not(:first-child):not(:nth-child(2)):not(:nth-child(3)) {
      margin-top: 2rem;
   }
}



@media (max-width: 360px) {
	.candidate-card-cont {
      grid-column: span 3;
   }
   .candidate-card-cont:nth-child(3) {
      margin-top: 2rem;
   }
}
</style>
