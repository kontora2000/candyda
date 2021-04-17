<template>
  <aside class="page-aside-wrapper">
    <LocationFilter v-if="filter" />
    <Breadcrumbs />
  </aside> 
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import LocationFilter from '@/components/Generic/LocationFilter/LocationFilter.vue'
import Breadcrumbs from '@/components/Generic/BreadCrumbs/Breadcrumbs.vue'

export default defineComponent({
    name:'TheAside',
    props: {
      filter: {
        type: Boolean as PropType<boolean>,
        default: true,
      }
    },
    components: { 
        LocationFilter,
        Breadcrumbs, 
    },
})
</script>
