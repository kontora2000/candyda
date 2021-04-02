<template>
  <aside class="page-aside-wrapper">
    <div class="page-content-filter-wrapper">
      <The-filter />
    </div>
  </aside>
</template>

<script>
import { defineComponent, } from '@nuxtjs/composition-api'
import TheFilter from './TheFilter.vue'

export default defineComponent({
    name:'TheAside',
    components: { 
        TheFilter, 
    },
})
</script>
