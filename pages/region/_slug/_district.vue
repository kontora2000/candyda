<template>
 <div v-if="district">
   <div class="cont-wrapper" v-if="district.posts">
       <div class="cont-header-wrapper">
         <h3 class="cont-header">Новости района</h3>
      </div>
      <div class="news-block-cards-wrapper block-cards-wrapper">
        <NewsBlockCard  v-for="post in district.posts"
          :key="post.id"
          :post="post" /> 
      </div>
    </div>
    <div class="cont-wrapper">
      <div class="cont-header-wrapper">
         <h3 class="cont-header">Партии района</nuxt-link></h3>
      </div>
       <PartyBlock v-if="district.parties" :parties="district.parties" />
    </div>
    <div class="cont-wrapper">
      <div class="cont-header-wrapper">
         <h3 class="cont-header">Кандидаты района</nuxt-link></h3>
      </div>
      <div class="top-candidates-cards-wrapper block-cards-wrapper">
      <CandidateCard 
        v-for="candidate in district.candidates" 
        :key="candidate.slug"
        :candidate="candidate" />
      </div>
     </div>
 </div>
</template>
<script>
import { defineComponent, useMeta, computed, } from '@nuxtjs/composition-api'
import CandidateCard from '@/components/Generic/CandidateTop/CandidateCard/CandidateCard.vue'
import NewsBlockCard from '@/components/Generic/NewsBlock/NewsBlockCard.vue'
import PartyBlock from '@/components/Party/PartyBlock.vue'
import { useDistrict, } from '~/composition/district'

export default defineComponent({
    components: { 
        CandidateCard, 
        NewsBlockCard, 
        PartyBlock,
    },
    layout: 'map',
    transition: 'fade',
    head: {},
    setup () {
        const { fetchDistrict, district, } = useDistrict()
        fetchDistrict()
        const title = computed(() => district?.value?.title)
        useMeta({ title: title, })
        return {
            district, 
        }
    },
})
</script>
