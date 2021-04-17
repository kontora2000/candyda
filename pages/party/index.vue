<template>
   <div class="page-content-superwrapper">
      <div class="page-parties-wrapper page-content-wrapper grid-main">
         <TheAside :filter="false" />
         <div class="page-wrapper page-top">
            <h1 class="page-header page-top-header">Партии</h1>
            <PartyTop />
         </div>
      </div>
      <div class="page-bottom-wrapper page-bottom-wrapper-news grid-main">
         <NewsBlock class="cont-wrapper-left"/>
         <CandidateTop class="cont-wrapper-right" />
         <TheFooter />
      </div>
   </div>
</template>

<script lang="ts">
import { defineComponent, useMeta, } from '@nuxtjs/composition-api'
import PartyTop from '@/components/Party/PartyTop.vue'
import NewsBlock from '@/components/Generic/NewsBlock/NewsBlock.vue'
import CandidateTop from '@/components/Generic/CandidateTop/CandidateTop.vue'
import TheFooter from '@/components/Generic/Footer/TheFooter.vue'
import { useBreadcrumbs, } from '~/composition/breadcrumbs'

export default defineComponent({
    name: 'PartyIndex',
    head: {},
    components: { 
        PartyTop,
        NewsBlock,
        CandidateTop,
        TheFooter,
    },
    setup () {
        const { title, }  = useMeta()
        title.value = 'Топ партий'
        const { breadcrumbs, } = useBreadcrumbs()
        breadcrumbs.value = [
           {
              url: '/party',
              title: 'Партии',
           }
        ]
          
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