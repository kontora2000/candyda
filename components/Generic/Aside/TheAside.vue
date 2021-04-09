<template>
  <aside class="page-aside-wrapper">
    <LocationFilter />
    <Breadcrumbs />
  </aside> 
</template>

<script lang="ts">
import { defineComponent,  } from '@nuxtjs/composition-api'
import LocationFilter from '@/components/Generic/LocationFilter/LocationFilter.vue'
import Breadcrumbs from '@/components/Generic/BreadCrumbs/Breadcrumbs.vue'

export default defineComponent({
    name:'TheAside',
    components: { 
        LocationFilter,
        Breadcrumbs, 
    },
})
</script>
