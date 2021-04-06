<template>
   <div class="page-content-superwrapper">
      <div class="page-news-wrapper page-content-wrapper grid-main">
         <TheAside />
         <div class="page-wrapper page-top" v-if="candidates && candidates.length > 0">
            <h1 class="page-header page-top-header">Топ кандидатов</h1>
            <CandidateCard
                v-for="(candidate, index) in candidates"
                :is-first="index === 0"
                :is-second="index === 1"
                :key="candidate.id"
                :candidate="candidate"
            />
         </div>
         <div class="page-wrapper page-top" v-else-if="candidates && candidates.length===0 && locationFilter.region!==''">
            <p>Нет подходящих кандидатов</p>
         </div>
      </div>
      <div class="page-bottom-wrapper page-bottom-wrapper-news grid-main">
         <NewsBlock class="cont-wrapper-left"/>
         <TheFooter />
      </div>
   </div>
</template>



<script lang="ts">
import { defineComponent, useMeta, useFetch, watch, } from '@nuxtjs/composition-api'

import { useCandidateList, } from '@/composition/candidates'
import { useAxios, } from '@/composition/axios'
import { useLocationFilter, } from '@/composition/filter'

import CandidateCard from '@/components/Generic/CandidateTop/CandidateCard/CandidateCard.vue'
import Btn from '@/components/Generic/Btn.vue'
import NewsBlock from '@/components/Generic/NewsBlock/NewsBlock.vue'
import TheFooter from '@/components/Generic/Footer/TheFooter.vue'
import TheAside from '@/components/Generic/Aside/TheAside.vue'


export default defineComponent({
    name:'index',
    components: {
        CandidateCard,
        Btn,
        NewsBlock,
        TheFooter,
        TheAside,
    },
    head:{},
    setup() {
        const { candidates, filterCandidates, } = useCandidateList()
        const { $axios, error, } = useAxios()
        const { fetch: fethcC, } =  useFetch(async  () => {
            try {
                const result = await $axios.$get('/candidates/top')
                candidates.value = result
            }
            catch(e) {
                error({ statusCode: e?.response?.status, })
            }
        })

        const { title, } = useMeta()
        title.value = 'Топ кандидатов'
        const { locationFilter, } = useLocationFilter()
        watch(locationFilter, () => {
            if (!locationFilter.value.region || locationFilter.value.region.trim() === '') {
                fethcC()
                return 
            }
            filterCandidates(locationFilter.value)
        }, 
        { deep: true, })
        
        return {
            candidates,
            locationFilter,
        }
    },
})
</script>



<style scoped>
.page-top {
   display: grid;
   grid-template-columns: repeat(20,calc((100% - 30.4rem) / 20));
   grid-column-gap: 1.6rem;
   grid-column: 9/29;
}

.page-top-header {
   grid-column: 1/-1;
}

.candidate-card-cont {
   grid-column: span 4;
   margin-bottom: 3.2rem;
}

.candidate-card-cont:nth-child(2) {
   grid-column: span 12;
   grid-row: span 2;
   max-height: 35rem;
 
}

.candidate-card-cont:nth-child(3) {
  grid-column: span 8;
  grid-row: span 2;
  max-height: 80%;
  align-self:end;

}



@media (max-width: 460px) {
   .page-top {
		grid-template-columns: repeat(6, calc((100vw - 6rem - 2.4rem) / 6));
      grid-column-gap: 1.2rem;
      grid-column: 1/7;
   }

   .candidate-card-cont {
      grid-column: span 3;
   }
}



/*@media (max-width: 360px) {
   .candidate-card-cont {
      grid-column: span 3;
   }
}*/
</style>
