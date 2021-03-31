<template>
 <div class="breadcrumbs-wrapper" v-if="isBreadcrumbsVisible">
   <span class="breadcrumb" 
    v-for="(breadcrumb, index) in breadcrumbs"
    :key="generateKey(index)">
      <nuxt-link class="breadcrumb-url" :to="breadcrumb.url">
        {{ breadcrumb.title }} 
        <span> / </span>
      </nuxt-link>
     </span> 
 </div>
</template>

<script>
import { defineComponent, useContext, watch, } from '@nuxtjs/composition-api'
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
    grid-column: 2/8;
    position: relative;
    top:9rem;
    left:1rem;
    line-height: 2.4rem;
    color: var(--Black100);
  }
</style>