<template>
  <div class="page-content-superwrapper" v-if="party.slug">
    <div class="page-party-wrapper page-content-wrapper grid-main">
      <TheAside />
      <div class="page-wrapper page-party">
        <div class="page-party-header-cont">
          <div class="page-party-header-emblem-wrapper">
            <img :src="party.logo" :alt="party.name" class="page-party-header-emblem">
          </div>
          <h1 class="page-party-header">{{ party.name  }}</h1>
        </div>
        <CandidateCard 
          v-for="candidate in party.candidates" 
          :key="candidate.slug"
          :candidate="candidate">
        </CandidateCard>
      </div>
    </div>
    <div class="page-bottom-wrapper page-bottom-wrapper-news grid-main">
      <NewsBlock class="cont-wrapper-left"/>
      <PartyTop class="cont-wrapper-right" v-show="!$device.isMobile"/>
      <TheFooter />
    </div>
  </div>  
</template>



<script>
import { defineComponent, useMeta, computed, } from '@nuxtjs/composition-api'
import { useParty, } from '@/composition/party'
import CandidateCard from '@/components/Generic/CandidateTop/CandidateCard/CandidateCard.vue'
import Btn from '@/components/Generic/Btn.vue'
import NewsBlock from '@/components/Generic/NewsBlock/NewsBlock.vue'
import PartyTop from '@/components/Party/PartyTop.vue'
import TheFooter from '@/components/Generic/Footer/TheFooter.vue'
import TheAside from '@/components/Generic/Aside/TheAside.vue'

export default defineComponent( {
    components: {
      CandidateCard, 
      Btn,
      NewsBlock,
      PartyTop,
      TheFooter,
      TheAside,
    },
    name: 'slug',
    transition: 'fade',
    layout: 'default',
    head: {},
    setup () {
        const { party, fetchParty, } = useParty()
        fetchParty()
        const title = computed(()=> party?.value?.name)
        useMeta({ title: title, })
        return {
            party,
        }
    },
})
</script>


<style scoped>

</style>