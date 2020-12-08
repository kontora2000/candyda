<template>
  <main>
    <MainMap />
    <NewsBlock />
    <CandidateTop />
  </main>
</template>

<script>
import { defineComponent, } from '@nuxtjs/composition-api'

import MainMap from '@/components/Map/MainMap'
import NewsBlock from '@/components/Generic/NewsBlock/NewsBlock'
import CandidateTop from '@/components/Generic/CandidateTop/CandidateTop'

export default defineComponent({
   name:'index',
   transition: 'fade',
   components: {
     MainMap,
     NewsBlock,
     CandidateTop,
   }
})
</script>




