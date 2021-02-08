<template>
<div v-if="party.slug">
  <div><img :src="party.logo" :alt="paty.name">  }}</div>
  {{ party.name  }}
</div>  
</template>

<script>
import { defineComponent, useMeta, useFetch, } from '@nuxtjs/composition-api'



export default defineComponent( {
    name: 'slug',
    transition: 'fade',
    layout: 'default',
    setup () {
        const { party, fetchParty, } = useParty()
        fetchParty()

        const title = computed(()=> party.value?.name)
        useMeta({ title: title, })

        return {
            party,
        }
    },
})
</script>