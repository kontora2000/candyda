<template>
   <div class="page-content-superwrapper">
      <div class="page-news-wrapper page-content-wrapper grid-main">
         <aside class="page-aside-wrapper">
            <div class="page-content-filter-wrapper"></div>
         </aside>
         <div class="page-wrapper page-top">
            <h1 class="page-header page-top-header">Топ кандидатов</h1>
            <CandidateCard
                v-for="candidate in candidates"
                :key="candidate.id"
                :candidate="candidate"
            />
         </div>
      </div>
      <div class="page-bottom-wrapper page-bottom-wrapper-news grid-main">
         <NewsBlock class="cont-wrapper-left"/>
         <TheFooter />
      </div>
   </div>
</template>



<script>
import { defineComponent, useMeta, useFetch, } from '@nuxtjs/composition-api'

import CandidateCard from '@/components/Generic/CandidateTop/CandidateCard/CandidateCard'
import Btn from '@/components/Generic/Btn'
import NewsBlock from '@/components/Generic/NewsBlock/NewsBlock'
import TheFooter from '@/components/Generic/Footer/TheFooter'
import {useCandidateList,} from '@/composition/candidates';
import {useAxios,} from '@/composition/axios';

export default defineComponent({
    name:'index',
    components: {
        CandidateCard,
        Btn,
        NewsBlock,
        TheFooter,
    },
    head:{},
    setup() {
        const { candidates, } = useCandidateList()
        const { $axios, } = useAxios()
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

        return {
            candidates,
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
