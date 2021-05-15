<template>
  <div v-if="region" class="main-bottom-wrapper grid-main">
    <aside class="page-aside-wrapper">
        <Breadcrumbs />
    </aside>
    <div class="region-title-wrapper" v-if="region && region.name">
      <div class="region-title-number" v-if="region.number">№{{ region.number  }}</div>
      <h1 class="region-title">{{ region.name }} <br class="region-title-br" />округ</h1>
    </div>
    <div class="cont-wrapper cont-wrapper-left" v-if="region.posts && region.posts.length > 0">
      <div class="cont-header-wrapper">
        <h3 class="cont-header">Новости округа</h3>
      </div>
      <div class="news-block-cards-wrapper block-cards-wrapper">
        <NewsBlockCard class="news-card-cont-small"
          v-for="post in region.posts"
          :key="post.id"
          :post="post" /> 
      </div>
    </div>
    <div class="cont-wrapper cont-wrapper-right" v-if="region.candidates && region.candidates.length > 0">
      <div class="cont-header-wrapper">
          <h3 class="cont-header">Кандидаты округа</h3>
      </div>
      <div class="top-candidates-cards-wrapper block-cards-wrapper">
        <CandidateCard 
          v-for="candidate in region.candidates" 
          :key="candidate.slug"
          :candidate="candidate" />
      </div>
    </div>
    <div class="cont-wrapper cont-wrapper-right cont-wrapper-parties" v-if="region.parties && region.parties.length > 0">
      <div class="cont-header-wrapper">
          <h3 class="cont-header">Партии в&nbsp;округе</h3>
      </div>
      <PartyBlock v-if="region.parties" :parties="region.parties" />
    </div>
    <TheFooter />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, watch, useMeta, useContext, useFetch, } from '@nuxtjs/composition-api'

import { useRegion, } from '@/composition/region'
import { useBreadcrumbs, } from '@/composition/breadcrumbs'
import { useMap, } from '@/composition/map'

import CandidateCard from '@/components/Generic/CandidateTop/CandidateCard/CandidateCard.vue'
import NewsBlockCard from '@/components/Generic/NewsBlock/NewsBlockCard.vue'
import PartyBlock from '@/components/Party/PartyBlock.vue'
import TheFooter from '@/components/Generic/Footer/TheFooter.vue'
import Breadcrumbs from '@/components/Generic/BreadCrumbs/Breadcrumbs.vue'

export default defineComponent({
    transition: 'fade',
    head: {},
    components: {
        CandidateCard,
        NewsBlockCard,
        PartyBlock,
        TheFooter,
        Breadcrumbs,
    },
    setup () {
        const { region, fetchRegion,  } = useRegion()
        const { fetch, } = useFetch(fetchRegion)
        fetch()
        const { isRegionOpened, } = useMap()
        const title = computed(()=> {
            return region?.value?.name ? region?.value?.name + ' округ' : ''
        })
        useMeta(() => ({ title: title.value, }))
        const { breadcrumbs, } =  useBreadcrumbs()
        watch(region, () => {
            isRegionOpened.value = true
            breadcrumbs.value = [
                {
                    url: '/',
                    title: 'Краснодарский край',
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
.map-cont {
  margin-bottom: -8rem !important;
}

.page-aside-wrapper {
  position: absolute;
  left: calc((100vw - 49.6rem - 1.6rem) / 32 + .8rem + 1.6rem);
  top: calc(9.2rem + 3rem);
  width: calc((100vw - 49.6rem - 1.6rem) / 32 * 7 + 9.6rem );
}

.region-title-wrapper {
  display: flex;
  position: absolute;
  top: calc(9.2rem + 2rem);
  /*left: calc((100vw - 49.6rem - 1.6rem) / 32 * 9 + 9.6rem + 1.6rem);*/
  left: calc((100vw - 49.6rem - 1.6rem) / 32 * 8 + 12.8rem + .8rem);
  pointer-events: none;
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


@media (min-width: 1460px) {
  .page-aside-wrapper {
    left: calc((1460px - 49.6rem - 1.6rem)/32 + ((100vw - 1460px)/2) + 1.6rem);
    width: calc(((1460px - 49.6rem - 1.6rem)/32)*7 + 9.6rem);
  }

  .region-title-wrapper {
    left: calc((1460px - 49.6rem - 1.6rem)/32*8 + ((100vw - 1460px)/2) + 12.8rem);
  }
}


@media (max-width: 460px) {
  .page-aside-wrapper {
    top: 11rem;
    left: 1.2rem;
    width: calc(100vw - 2.4rem);
  }

  .region-title-wrapper {
    left: 1.2rem;
    top: 14rem;
    width: calc(100vw - 2.4rem);
  }

  .region-title-number {
    display: none;
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 3.6rem;
    margin-right: .8rem;
  }

  .region-title {
    margin: 0;
  }

  .region-title-br {
    display: none;
  }

  .main-bottom-wrapper {
    grid-column: 1/7;
    grid-template-rows: auto;
  }

  .main-bottom-wrapper .cont-wrapper-right {
    grid-row: 1/2;
  }
  .main-bottom-wrapper .cont-wrapper-parties {
    grid-row: 2/3;
  }

  .main-bottom-wrapper .cont-wrapper-left {
    grid-row: 3/4;
  }

  .main-bottom-wrapper .footer-wrapper {
    grid-row: 4/5;
  }

  .candidate-card-cont {
    grid-column: span 3;
  }
}
</style>