<template>
  <div class="party-card-block">
    <party-card 
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