<template>
  <div class="party-card-block">
    <PartyCard
    v-for="party in parties" 
    :key="party.id"
    :party="party"/>
  </div>
</template>



<script lang="ts">
import { PropType, } from '@nuxtjs/composition-api'
import PartyCard from './PartyCard.vue'
import { Party, } from '@/modules/types'
export default {
    name: 'PartyBlock',
    components: {
        PartyCard,
    },
    props: {
      parties: {
        type: Array as PropType<Party[]>,
        required: true,
      }
    }
}
</script>


<style scoped>
.party-card-block {
  grid-column: 2/14;
}

@media (max-width: 460px) {
  .party-card-block {
    grid-column: 1/-1;
  }
}
</style>