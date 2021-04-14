<template>
<div class="cont-wrapper" v-if="parties">
  <div class="cont-header-wrapper">
    <h3 class="cont-header">
      <nuxt-link to="/party" class="link-underline-solid">Партии</nuxt-link>
    </h3>
  </div>
  <div class="party-cards-wrapper">
    <PartyCard 
      v-for="party in parties"
      :party="party"
      :key="party.id" 
    />
    <div class="showmore-btn-wrapper">
      <nuxt-link to="/party" ><btn class="button-transparent">Все&nbsp;партии</btn></nuxt-link>
    </div>
  </div>
</div>
</template>

<script>
import { defineComponent, } from '@nuxtjs/composition-api'
import Btn from '@/components/Generic/Btn'
import { usePartyList, } from '@/composition/parties'
import PartyCard from './PartyCard.vue'

export default defineComponent({
    name: 'PartyTop',
    components: {
        PartyCard,
        Btn,
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
   grid-column: 2/14;
 }
</style>
