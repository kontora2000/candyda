<template>
  <aside class="page-aside-wrapper">
    <LocationFilter />
  </aside>
</template>

<script>
import { defineComponent,  } from '@nuxtjs/composition-api'
import LocationFilter from '@/components/Generic/LocationFilter/LocationFilter.vue'

export default defineComponent({
    name:'TheAside',
    components: { 
        LocationFilter, 
    },
})
</script>
