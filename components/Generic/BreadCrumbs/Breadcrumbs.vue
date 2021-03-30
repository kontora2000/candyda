<template>
 <div class="breadcrumbs-wrapper">
   <span class="breadcrumb" 
    v-for="(breadcrumb, index) in breadcrumbs"
    :key="generateKey(index)">
      <a class="breadcrumb-url" :href="breadcrumb.url">
        {{ breadcrumb.title }} /
      </a>
     </span> 
 </div>
</template>

<script>
import { defineComponent, } from '@nuxtjs/composition-api'
import { useHelpers,  } from '@menu/composition/helpers'

export default defineComponent({
    name:'Breadcrumbs',
    setup () {
        const { breadcrumbs, } =  useBreadcrumbs()
        const { generateKey, } = useHelpers()
        return {
            breadcrumbs,
            generateKey,
        }
    },
})
</script>
