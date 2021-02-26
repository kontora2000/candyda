<template>
 <div v-if="region">
   <div class="cont-wrapper" v-if="region.posts">
       <div class="cont-header-wrapper">
         <h3 class="cont-header">Новости региона</h3>
      </div>
      <div class="news-block-cards-wrapper block-cards-wrapper">
        <NewsBlockCard  v-for="post in region.posts"
          :key="post.id"
          :post="post" /> 
      </div>
    </div>
    <div class="cont-wrapper">
      <div class="cont-header-wrapper">
         <h3 class="cont-header">Партии региона</nuxt-link></h3>
      </div>
       <PartyBlock v-if="region.parties" :parties="region.parties" />
    </div>
    <div class="cont-wrapper">
      <div class="cont-header-wrapper">
         <h3 class="cont-header">Кандидаты региона</nuxt-link></h3>
      </div>
      <div class="top-candidates-cards-wrapper block-cards-wrapper">
      <CandidateCard 
        v-for="candidate in region.candidates" 
        :key="candidate.slug"
        :candidate="candidate" />
      </div>
     </div>
 </div>
</template>
<script>
import { computed, defineComponent, useMeta, } from '@nuxtjs/composition-api'
import { useRegion, } from '~/composition/region'

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
        fetchRegion()
        const title = computed(()=> {
            return region?.value?.title
        })
        useMeta({ title: title, })
        return {
            region,
            fetchRegion,
        }
    },
})
</script>
