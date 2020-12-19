<template>
   <div class="page-content-superwrapper">
      <div class="page-content-wrapper grid-main">
         <aside class="page-aside-wrapper">
            <div class="page-content-filter-wrapper"></div>
         </aside>
         <div class="page-wrapper">
            <h1 class="page-header">О&nbsp;проекте</h1>
            <p>кек</p>
         </div>
      </div>
      <div class="page-bottom-wrapper grid-main">
         <NewsBlock class="cont-wrapper-left"/>
         <CandidateTop class="cont-wrapper-right"/>
         <TheFooter />
      </div>
   </div>
</template>



<script>
import { defineComponent, } from '@nuxtjs/composition-api'

import NewsBlock from '@/components/Generic/NewsBlock/NewsBlock'
import CandidateTop from '@/components/Generic/CandidateTop/CandidateTop'
import TheFooter from '@/components/Generic/Footer/TheFooter'

export default defineComponent({
   name:'about',
   components: {
      NewsBlock,
      CandidateTop,
      TheFooter,
   }
})
</script>


<style scoped>

</style>