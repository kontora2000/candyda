<template>
 <div v-if="district" class="main-bottom-wrapper grid-main district-content-wrapper">
     <aside class="page-aside-wrapper">
        <Breadcrumbs />
    </aside>
    <div class="district-wrapper">
      <div class="district-title-wrapper" v-if="district && district.name">
        <div class="district-title-logo-wrapper">
          <img v-if="district.logo" 
            class="district-title-logo"
            :src="'https://api.prostokontora.ru/storage/' + district.logo" 
            :alt="district.name"/>
        </div>
        <h1 class="district-title">{{ district.name }}</h1>
      </div>
      <div class="district-info-wrapper">
        <div class="district-info-row">
          <span class="district-info-icon"></span>
          <span class="district-info-header">Избиратели</span>
          <span class="district-info-count" v-if="district.voters">{{ localVoters }} человек</span>
          <span class="district-info-count" v-else>Не указано</span>
        </div>
        <div class="district-info-row">
          <span class="district-info-icon"></span>
          <span class="district-info-header">Население</span>
          <span class="district-info-count" v-if="district.population">{{ localPopulation }} человек</span>
          <span class="district-info-count" v-else>Не указано</span>
        </div>
      </div>
       <div class="page-wrapper" v-if="district.candidates && district.candidates.length > 0" >
        <div class="district-candidates-header">
          <h3>Кандидаты района</h3>
        </div>
        <div class="district-candidates-wrapper">
            <CandidateCard 
              v-for="candidate in district.candidates"
              class="district-candidates-card" 
              :key="candidate.slug"
              :candidate="candidate" />
        </div>
      </div>
      <div class="district-history-wrapper" v-if="district.history && district.history!==''">
        <h3>История выборов</h3>
        <District-history :history="candidate.history"/>
      </div>
    </div>
    <div class="cont-wrapper cont-wrapper-left district-posts-wrapper" v-if="district.posts && district.posts.length > 0">
        <div class="cont-header-wrapper">
            <h3 class="cont-header">Новости района</h3>
        </div>
        <div class="news-block-cards-wrapper block-cards-wrapper">
            <NewsBlockCard  v-for="post in district.posts"
              class="news-card-cont-small"
              :key="post.id"
              :post="post" /> 
        </div>
        <nuxt-link class="showmore-btn" to="/" v-if="district.posts.length > 11">Показать все</nuxt-link>
    </div>
    <div class="cont-wrapper cont-wrapper-right"  v-if="district.parties && district.parties.length > 0">
        <div class="cont-header-wrapper" >
            <h3 class="cont-header">Партии в&nbsp;районе</h3>
        </div>
        <PartyBlock :parties="district.parties" />
    </div>
 </div>
</template>

<script lang="ts">
import { defineComponent, watch, useMeta, ref, } from '@nuxtjs/composition-api'

import { useHelpers, } from '@/composition/helpers'
import { useDistrict, } from '@/composition/district'
import { useBreadcrumbs, } from '@/composition/breadcrumbs'

import CandidateCard from '@/components/Generic/CandidateTop/CandidateCard/CandidateCard.vue'
import NewsBlockCard from '@/components/Generic/NewsBlock/NewsBlockCard.vue'
import PartyBlock from '@/components/Party/PartyBlock.vue'
import Breadcrumbs from '@/components/Generic/BreadCrumbs/Breadcrumbs.vue'
import DistrictHistory from '@/components/District/DistrictHistory.vue'

export default defineComponent({
    transition: 'fade',
    head: {},
    components: { 
        CandidateCard, 
        NewsBlockCard, 
        PartyBlock,
        Breadcrumbs,
        DistrictHistory,
    },
    setup () {
        const { thousandSeparator, } = useHelpers()
        const { setDistrictBreadcrumbs, } = useBreadcrumbs()
        const { fetchDistrict, district, } = useDistrict()
        fetchDistrict()
        const localVoters = ref('') 
        const localPopulation = ref('')
        watch(district, () => {
            if (district.value.name) {
                setDistrictBreadcrumbs(district.value)
                localVoters.value = thousandSeparator(district.value.voters || 0)
                localPopulation.value = thousandSeparator(district.value.population || 0)
            }
        })
        useMeta(() => ({ 
            title: district.value?.name || '', 
        }))

        return {
            district, 
            localVoters,
            localPopulation,
        }
    },
})
</script>

<style scoped>
.district-wrapper {
  grid-column: 9/32;
}

.district-content-wrapper {
  margin-top:5.2rem;
}

.district-title-wrapper {
  display: flex;
  align-items: flex-start;
}

.district-info-wrapper {
  display: flex;
  flex-direction: row;
  margin: 6rem 0 8rem;
  font-family: var(--font-default);
  letter-spacing: -0.01em;
}

.district-info-count {
  font-size: 2rem;
  line-height: 2.4rem;
  margin-top: 1.3rem;
}

.district-info-row {
  display: flex;
  /* flex: 0.3 1; */
  flex-direction: column;
}

.district-info-header {
  font-weight: 550;
  font-size: 2.4rem;
  line-height: 2.4rem;
  margin-bottom: 1.2rem;
}

.district-info-row:first-of-type {
  margin-right: 13rem;
}

.district-title-number {
  font-size: 12rem;
  font-weight: 400;
  letter-spacing: -.04em;
  line-height: 10rem;
  margin-right: 2.4rem;
}

.district-title-logo-wrapper {
  width: 6.5rem;
  height: 8.2rem;
  margin-right: 2rem;
  align-self: center;
}

.district-title-logo {
  max-width: 6.5rem;
  max-height: 8.2rem;
}

.district-title {
  margin-top: .8rem;
}

.page-wrapper {
   margin-top: 5rem;
}

.district-candidates-wrapper {
   display: grid;
   grid-template-columns: repeat(20,calc((100% - 30.4rem) / 20));
   grid-column-gap: 1.6rem;
   grid-column: 9/29;
   margin-top: 3rem;
}

.district-candidates-card {
  margin-top: 0 !important;
}

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