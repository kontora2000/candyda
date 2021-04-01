<template>
  <div v-if="party.slug">
    <div><img :src="party.logo" :alt="party.name">
    {{ party.name  }}
    <CandidateCard 
      v-for="candidate in party.candidates" 
      :key="candidate.slug"
      :candidate="candidate">
    </CandidateCard>
    </div>
  </div>  
</template>

<script>
import { defineComponent, useMeta, computed, } from '@nuxtjs/composition-api'
import { useParty, } from '@/composition/party'

import CandidateCard from '@/components/Generic/CandidateTop/CandidateCard/CandidateCard.vue'

export default defineComponent( {
    components: { CandidateCard, },
    name: 'slug',
    transition: 'fade',
    layout: 'default',
    head: {},
    setup () {
        const { party, fetchParty, } = useParty()
        fetchParty()
        const title = computed(()=> party?.value?.name)
        useMeta({ title: title, })
        return {
            party,
        }
    },
})
</script>