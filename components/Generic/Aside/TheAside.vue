<template>
  <aside class="page-aside-wrapper">
    <LocationFilter />
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
