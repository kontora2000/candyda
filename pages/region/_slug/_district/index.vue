<template>
 <div v-if="district" class="main-bottom-wrapper grid-main">
     <aside class="page-aside-wrapper">
        <Breadcrumbs />
    </aside>
    <div class="region-title-wrapper" v-if="district && district.name">
      <img v-if="district.logo" 
        :src="district.logo" 
        :alt="district.name"/>
      <h1 class="region-title">{{ district.name }}<br /></h1>
    </div>
    <div class="region-info-wrapper">
      <div class="region-info-row">
        <span class="region-info-icon"></span>
        <span class="region-info-header">Избиратели:</span>
        <span class="region-info-count" v-if="district.votes">{{ district.votes  }} чел.</span>
        <span class="region-info-count" v-else>Не указано</span>
      </div>
      <div class="region-info-row" v-if="distrcit.votes">
        <span class="region-info-icon"></span>
        <span class="region-info-header">Население:</span>
        <span class="region-info-count" v-if="district.population">{{ district.population }} чел.</span>
        <span class="region-info-count" v-else>Не указано</span>
      </div>
    </div>
    <div class="cont-wrapper cont-wrapper-left" v-if="district.posts && district.posts.length > 0">
        <div class="cont-header-wrapper cont-wrapper-left">
            <h3 class="cont-header">Новости района</h3>
        </div>
        <div class="news-block-cards-wrapper block-cards-wrapper">
            <NewsBlockCard  v-for="post in district.posts"
            :key="post.id"
            :post="post" /> 
        </div>
        <nuxt-link class="showmore-btn" v-if="district.posts.length > 11">Показать все</nuxt-link>
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
            <h3 class="cont-header">Партии в&nbsp;районе</h3>
        </div>
        <PartyBlock :parties="district.parties" />
    </div>
 </div>
</template>



<script lang="ts">
import { defineComponent, watch, useMeta,  } from '@nuxtjs/composition-api'
import { useDistrict, } from '@/composition/district'
import { useBreadcrumbs, } from '@/composition/breadcrumbs'
import CandidateCard from '@/components/Generic/CandidateTop/CandidateCard/CandidateCard.vue'
import NewsBlockCard from '@/components/Generic/NewsBlock/NewsBlockCard.vue'
import PartyBlock from '@/components/Party/PartyBlock.vue'
import Breadcrumbs from '@/components/Generic/BreadCrumbs/Breadcrumbs.vue'

export default defineComponent({
    transition: 'fade',
    head: {},
    components: { 
        CandidateCard, 
        NewsBlockCard, 
        PartyBlock,
        Breadcrumbs,
    },
    setup () {
        const { fetchDistrict, district, } = useDistrict()
        fetchDistrict()
        const { setDistrictBreadcrumbs, } = useBreadcrumbs()
        watch(district, () => {
            if (district.value.name) {
                setDistrictBreadcrumbs(district.value)
            }
            
        })
        useMeta(() => ({ 
            title: district.value?.name || '', 
        }))
        return {
            district, 
        }
    },
})
</script>

<style scoped>
.region-title-wrapper {
  display: flex;
  position: absolute;
  top: calc(9.2rem + 2rem);
  left: calc((100vw - 49.6rem - 1.6rem) / 32 * 9 + 9.6rem + 1.6rem);
}

.region-title-number {
  font-size: 12rem;
  font-weight: 400;
  letter-spacing: -.04em;
  line-height: 10rem;
  margin-right: 2.4rem;
}

.region-title {
  margin-top: .4rem;
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