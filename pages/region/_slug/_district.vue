<template>
 <div v-if="district">
   <div class="cont-wrapper" v-if="district.posts && district.posts.length > 0">
       <div class="cont-header-wrapper cont-wrapper-left">
         <h3 class="cont-header">Новости района</h3>
      </div>
      <div class="news-block-cards-wrapper block-cards-wrapper">
        <NewsBlockCard  v-for="post in district.posts"
          :key="post.id"
          :post="post" /> 
      </div>
    </div>
    
    <div class="cont-wrapper cont-wrapper-right" v-if="district.candidates && district.candidates.length > 0" >
        <div class="cont-header-wrapper">
          <h3 class="cont-header">Кандидаты района</h3>
        </div>
        <div class="top-candidates-cards-wrapper block-cards-wrapper">
        <CandidateCard 
          v-for="candidate in district.candidates" 
          :key="candidate.slug"
          :candidate="candidate" />
      </div>
     </div>
     <div class="cont-wrapper cont-wrapper-right"  v-if="district.parties && district.parties.length > 0">
      <div class="cont-header-wrapper">
         <h3 class="cont-header">Партии района</h3>
      </div>
       <PartyBlock :parties="district.parties" />
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


        const { route, } = useContext()

        watch(title, () => {
            breadcrumbs.value = [
                {
                    url: '/',
                    title: 'Главная',
                },
                {
                    url: district.region.path || '',
                    title: district.region.name || '',
                },
                {
                    url: route.value.path || '',
                    title: district.name || '',
                }
            ]
        })

        return {
            district, 
        }
    },
})
</script>
