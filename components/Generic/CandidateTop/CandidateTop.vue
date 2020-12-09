<template>
   <div class="cont-wrapper">
      <div class="cont-header-wrapper>">
         <h3 class="cont-header">
            Топ <NuxtLink class="link-underline">кандидатов</NuxtLink>
         </h3>
      </div>
      <div class="candidates-top-wrapper">
         <CandidateCard />
         <CandidateCard />
         <CandidateCard />
         <CandidateCard />
      </div>
   </div>
</template>



<script>
import { defineComponent, } from '@nuxtjs/composition-api'

export default defineComponent({
   name:'CandidateTop',
})
</script>

<style scoped>

</style>