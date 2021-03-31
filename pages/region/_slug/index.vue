<template>
 <div v-if="region" class="main-bottom-wrapper grid-main">
   <div class="cont-wrapper cont-wrapper-left" v-if="region.posts && region.posts.length > 0">
       <div class="cont-header-wrapper">
         <h3 class="cont-header">Новости региона</h3>
      </div>
      <div class="news-block-cards-wrapper block-cards-wrapper">
        <NewsBlockCard  v-for="post in region.posts"
          :key="post.id"
          :post="post" /> 
      </div>
    </div>
    <div class="cont-wrapper cont-wrapper-right" v-if="region.candidates && region.candidates.length > 0">
      <div class="cont-header-wrapper">
         <h3 class="cont-header">Кандидаты региона</h3>
      </div>
      <div class="top-candidates-cards-wrapper block-cards-wrapper">
        <CandidateCard 
          v-for="candidate in region.candidates" 
          :key="candidate.slug"
          :candidate="candidate" />
      </div>
     </div>
     <div class="cont-wrapper cont-wrapper-right" v-if="region.parties && region.parties.length > 0">
      <div class="cont-header-wrapper">
         <h3 class="cont-header">Партии региона</h3>
      </div>
       <PartyBlock v-if="region.parties" :parties="region.parties" />
    </div>
 </div>
</template>
<script>
import { computed, defineComponent, useMeta, useContext, watch, onMounted, } from '@nuxtjs/composition-api'

import { useRegion, } from '@/composition/region'
import { useBreadcrumbs, } from '@/composition/breadcrumbs'
import { useMap, } from '@/composition/map'

import CandidateCard from '@/components/Generic/CandidateTop/CandidateCard/CandidateCard.vue'
import NewsBlockCard from '@/components/Generic/NewsBlock/NewsBlockCard.vue'
import PartyBlock from '@/components/Party/PartyBlock.vue'

export default defineComponent({
    layout: 'map',
    transition: 'fade',
    components: {
        CandidateCard,
        NewsBlockCard,
        PartyBlock,
    },
    head: {},
    setup () {
        const { region, fetchRegion, } = useRegion()

        const { animateViewBox, resetViewBox,} = useMap()
        
        fetchRegion()
        const title = computed(()=> {
            return region?.value?.name ? region?.value?.name + ' округ' : ''
        })
        useMeta({ title: title, })

        const {  breadcrumbs,  } =  useBreadcrumbs()

        const { route, } = useContext()

        onMounted(() => {
           
        })

        watch(title, () => {
            const slug = route.value.params.slug
            const box = document.querySelector('#' + slug).getBBox()
            const titles = document.querySelectorAll('.o-title-cont')
            const regs = document.querySelectorAll(`.o-cont:not(#${slug})`)
            regs.forEach((el) => el.style.display = 'none')
            titles.forEach((el) => el.style.display = 'none')
            document.querySelector(`#${slug} ~ .o-title-cont`).style.display = ''
            animateViewBox(`${box.x} ${box.y} ${box.width} ${box.height}`)
            breadcrumbs.value = [
                {
                    url: '/',
                    title: 'Главная',
                },
                {
                    url: route.value.path || '',
                    title: title.value || '',
                }
            ]
        })

        return {
            region,
            fetchRegion,
        }
    },
})
</script>
<style scoped>
.main-bottom-wrapper {
  grid-column: 1/33;
  grid-row-gap: 4rem;
  grid-template-rows: 90rem 1fr 1fr;
}

.candidate-card-cont {
   grid-column: span 4;
}
.candidate-card-cont {
   margin-top: 3.2rem;
}
.candidate-card-cont:first-child,
.candidate-card-cont:nth-child(2),
.candidate-card-cont:nth-child(3) {
   margin-top: 0;
}



@media (max-width: 460px) {
  .main-bottom-wrapper {
    grid-column: 1/7;
    grid-template-rows: auto;
  }

  .main-bottom-wrapper .cont-wrapper-right {
    grid-row: 1/2;
  }

  .main-bottom-wrapper .cont-wrapper-left {
    grid-row: 2/3;
  }

  .main-bottom-wrapper .footer-wrapper {
    grid-row: 3/3;
  }
}
</style>