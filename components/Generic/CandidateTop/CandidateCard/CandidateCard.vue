<template>
   <div class="candidate-card-cont">
      <VoteButton />
      <div class="candidate-avatar-wrapper">
         <img class="candidate-avatar" src="" />
      </div>
      <div class="candidate-name-wrapper">
         <span class="candidate-name">Валерий</span>
         <span class="candidate-surname">Сафонов</span>
      </div>
   </div>
</template>



<script>
import { defineComponent, } from '@nuxtjs/composition-api'

export default defineComponent({
   name:'CandidateCard',
})
</script>



<style scoped>

</style>