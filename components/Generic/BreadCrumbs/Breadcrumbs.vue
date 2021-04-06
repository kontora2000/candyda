<template>
 <div class="breadcrumbs-wrapper" v-if="isBreadcrumbsVisible">
   <span class="breadcrumb" 
    v-for="(breadcrumb, index) in breadcrumbs"
    :key="generateKey(index)">
      <nuxt-link class="breadcrumb-url" :to="breadcrumb.url" v-html="breadcrumb.title" />
     </span> 
 </div>
</template>


<script lang="ts">
import { defineComponent, PropType, useContext, watch, } from '@nuxtjs/composition-api'
import { useHelpers,  } from '@/composition/helpers'
import { useBreadcrumbs, } from '@/composition/breadcrumbs'

export default defineComponent({
    name:'Breadcrumbs',
    setup () {
        const { breadcrumbs, isBreadcrumbsVisible, } =  useBreadcrumbs()
        const { route, } = useContext()
        isBreadcrumbsVisible.value =  route.value.path.includes('region') || route.value.path.includes('district')
        watch(route, () => {
            isBreadcrumbsVisible.value =  route.value.path.includes('region') || route.value.path.includes('district')
        })
        const { generateKey, } = useHelpers()
        return {
            isBreadcrumbsVisible,
            breadcrumbs,
            generateKey,
        }
    },
})
</script>



<style scoped>
.breadcrumbs-wrapper {
  color: var(--Black100);
  grid-column: 2/8;
  line-height: 2.4rem;
  position: relative;
  top: 9rem;
  left: 0;
  z-index: 1;
}

.breadcrumb::after {
  content: '/';
  margin: 0 .4rem;
}

.breadcrumb-url {
  border-bottom: 2px solid;
}
</style>