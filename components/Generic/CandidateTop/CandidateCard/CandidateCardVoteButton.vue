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