<template>
  <div class="page-content-superwrapper" v-if="party.slug">
    <div class="page-party-wrapper page-content-wrapper grid-main">
      <TheAside />
      <div class="page-wrapper page-party">
        <div class="page-party-header-cont">
          <div class="page-party-header-emblem-wrapper">
            <img :src="party.logo" :alt="party.name" class="page-party-header-emblem">
          </div>
          <div class="party-card-pic-wrapper" >
            <img 
              v-if="party.logo" 
              class="party-card-pic" :src="`https://api.prostokontora.ru/storage/${party.logo}`" />
          </div>
          <h1 class="page-party-header">{{ party.name  }}</h1>
        </div>
        <div class="page-party-about" v-if="party.description">{{ party.description }}</div>
        <h3 class="page-party-header-candidates">Кандидаты от&nbsp;партии</h3>
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


<style>
.page-party {
  display: grid;
  grid-template-columns: repeat(20,calc((100% - 30.4rem) / 20));
  grid-column-gap: 1.6rem;
}

.page-party-header-cont {
  grid-column: 1/20;
  grid-row: span 1;
}

.page-party-about {
  grid-column: 1/20;
  grid-row: span 1;
  margin: 3.2rem 0 6.4rem;
}
.page-party-about>p {
  margin-top: 0;
}

.page-party-header-candidates {
  grid-column: 1/20;
  grid-row: span 1;
  margin-bottom: 3.2rem;
}

.page-party .candidate-card-cont {
  grid-column: span 4;
  margin-bottom: 3.2rem;
}
</style>