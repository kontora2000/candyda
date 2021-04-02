<template>
  <aside class="page-aside-wrapper">
    <location-filter />
  </aside>
</template>

<script>
import { defineComponent, ref, } from '@nuxtjs/composition-api'
import LocationFilter from '../LocationFilter/LocationFilter.vue'

export default defineComponent({
    name:'TheAside',
    components: { 
        LocationFilter, 
    },
})
</script>
