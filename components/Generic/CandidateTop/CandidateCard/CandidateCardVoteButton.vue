<template>
   <div class="votes-counter-small">
      <span class="votes-counter-small-digits">20&thinsp;000</span>
   </div>
</template>



<script>
import { defineComponent, } from '@nuxtjs/composition-api'

export default defineComponent({
   name:'VoteButton',
})
</script>



<style scoped>
   .votes-counter-small {
      background-color: var(--Azure100);
      display: inline-block;
      border-radius: 300px;
      float: right;
      font-size: 2rem;
      line-height: 2rem;
      padding: .2rem .8rem .4rem .6rem;
      position: relative;
      top: -1.2rem;
   }

   .votes-counter-small-digits {
      color: var(--White100);
   }

   .votes-counter-small-digits:before {
      content: '✓';
      display: inline-block;
      color: var(--White56);
   }
</style>