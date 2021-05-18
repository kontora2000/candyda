<template>
  <div class="layout-inner grid-main">
    <BgCircles />
    <SearchOverlay />
    <TheHeader />
    <client-only>
      <TheMap />
    </client-only>
    <nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent, } from '@nuxtjs/composition-api'

import TheHeader from '@/components/Generic/Header/TheHeader.vue'
import BgCircles from '@/components/Generic/Bg/BgCircles.vue'
import SearchOverlay from '@/components/Search/SearchOverlay.vue'
import TheMap from '@/components/Map/TheMap.vue'

export default defineComponent({
    components: {
        BgCircles,
        TheHeader,
        SearchOverlay,
        TheMap,
    },
})
</script>

<style scoped>
.layout-inner {
  margin: 0 .8rem;
  width: calc(100vw - 1.6rem);
}

@media (min-width: 1460px) {
  .layout-inner {
    margin: 0 auto;
    max-width: 1460px;
    width: 100%;
  }
}

@media (max-width: 460px) {
	.layout-inner {
		margin: 0 1.2rem;
		width: calc(100vw - 2.4rem);
  }
}
</style>
