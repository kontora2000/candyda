<template>
   <div class="page-content-superwrapper">
      <div class="page-news-wrapper page-content-wrapper grid-main">
         <h1 class="page-header page-top-header">Топ кандидатов</h1>
         <TheAside />
         <div class="page-wrapper page-top" v-if="candidates && candidates.length > 0">
            
            <CandidateCard
                v-for="(candidate, index) in candidates"
                :is-first="index === 0"
                :is-second="index === 1"
                :key="candidate.id"
                :candidate="candidate"
            />
         </div>
         <div class="page-wrapper page-top" 
          v-else-if="candidates && candidates.length===0 && locationFilter.region!=='' && !isLoading">
            <h1 class="page-header page-top-header">Нет подходящих кандидатов</h1>
         </div>
      </div>
      <div class="page-bottom-wrapper page-bottom-wrapper-news grid-main">
         <NewsBlock class="cont-wrapper-left"/>
         <PartyTop class="cont-wrapper-right party-top-cont" v-show="!$device.isMobile"/>
         <TheFooter />
      </div>
   </div>
</template>



<script lang="ts">
import { defineComponent, ref, useMeta, useFetch, watch, } from '@nuxtjs/composition-api'

import { useCandidateList, } from '@/composition/candidates'
import { useAxios, } from '@/composition/axios'
import { useLocationFilter, } from '@/composition/filter'

import CandidateCard from '@/components/Generic/CandidateTop/CandidateCard/CandidateCard.vue'
import Btn from '@/components/Generic/Btn.vue'
import NewsBlock from '@/components/Generic/NewsBlock/NewsBlock.vue'
import PartyTop from '@/components/Party/PartyTop.vue'
import TheFooter from '@/components/Generic/Footer/TheFooter.vue'
import TheAside from '@/components/Generic/Aside/TheAside.vue'


export default defineComponent({
    name:'index',
    components: {
        CandidateCard,
        Btn,
        NewsBlock,
        PartyTop,
        TheFooter,
        TheAside,
    },
    head:{},
    setup() {
        const { candidates, filterCandidates, page, isNeedToUpload, } = useCandidateList()
        const isLoading = ref(true)
        const { $axios, error, } = useAxios()
        const { fetch: fethcC, } =  useFetch(async  () => {
            try {
                isLoading.value = true
                const result = await $axios.$get('/candidates/top')
                candidates.value = result
                isLoading.value = false
            }
            catch(e) {
                error({ statusCode: e?.response?.status, })
            }
        })
        const { title, } = useMeta()
        title.value = 'Топ кандидатов'
        const { locationFilter, } = useLocationFilter()
        watch(locationFilter, () => {
            page.value = 1
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
            isLoading,
            isNeedToUpload,
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

.candidate-card-cont {
   grid-column: span 4;
   margin-bottom: 3.2rem;
}

.candidate-card-cont:first-child {
   grid-column: span 12;
   grid-row: span 2;
   max-height: 35rem;
 
}

.candidate-card-cont:nth-child(2) {
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

   .candidate-card-cont,
   .candidate-card-cont:first-child,
   .candidate-card-cont:nth-child(2) {
      grid-column: span 3;
      grid-row: span 1;
      max-height: 220px;
      min-height: 220px;
   }
}


/*@media (max-width: 360px) {
   .candidate-card-cont {
      grid-column: span 3;
   }
}*/
</style>
