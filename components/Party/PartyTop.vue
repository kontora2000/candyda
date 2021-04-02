<template>
<div class="cont-wrapper" v-if="parties">
  <div class="cont-header-wrapper">
    <h3 class="cont-header">Топ <nuxt-link to="/party" class="link-underline-solid">партий</nuxt-link></h3>
  </div>
  <div class="party-cards-wrapper">
    <PartyCard 
      v-for="party in parties"
      :party="party"
      :key="party.id" 
    />
    <div class="showmore-btn-wrapper">
      <nuxt-link to="/party" ><btn class="button-transparent">Смотреть весь&nbsp;топ</btn></nuxt-link>
    </div>
  </div>
</div>
</template>

<script>
import { defineComponent, } from '@nuxtjs/composition-api'

import { usePartyList, } from '@/composition/parties'

import PartyCard from './PartyCard.vue'


export default defineComponent({
    name: 'PartyTop',
    components: {
        PartyCard,
    },
    setup() {
        const { parties, fetchParties,  }  = usePartyList()
        fetchParties()
        return {
            parties, fetchParties,
        }
    },
})
</script>

<style scoped>
 .party-cards-wrapper {
   grid-column: 2/16;
 }
</style>
