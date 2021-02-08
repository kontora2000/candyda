<template>
  <div class="layout-inner grid-main">
    <BgCircles />
    <TheHeader />
    <client-only>
        <TheMap />
    </client-only>
    <nuxt />
  </div>
</template>



<script lang="ts">
import TheHeader from '@/components/Generic/Header/TheHeader.vue'
import BgCircles from '@/components/Generic/Bg/BgCircles.vue'
import TheMap from '@/components/TheMap.vue'



import { defineComponent, } from '@nuxtjs/composition-api'

export default defineComponent({
    components: {
        BgCircles,
        TheHeader,
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
