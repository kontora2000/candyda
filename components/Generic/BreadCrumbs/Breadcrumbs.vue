<template>
 <div class="breadcrumbs-wrapper" v-if="isBreadcrumbsVisible">
   <span class="breadcrumb" 
    v-for="(breadcrumb, index) in breadcrumbs"
    :key="generateKey(index)">
      <nuxt-link class="breadcrumb-url" :to="breadcrumb.url">
        {{ breadcrumb.title }} 
        <span v-if="index !== breadcrumbs.length - 1"> / </span>
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
