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
import { defineComponent, useContext, watch, } from '@nuxtjs/composition-api'
import { useHelpers,  } from '@/composition/helpers'
import { useBreadcrumbs, } from '@/composition/breadcrumbs'

export default defineComponent({
    name:'Breadcrumbs',
    setup () {
        const { breadcrumbs, isBreadcrumbsVisible, checkVisibility, } =  useBreadcrumbs()
        const { route, } = useContext()
        checkVisibility(route)
        watch(route, () => {
            checkVisibility(route)
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
  font-size: 1.2rem;
  line-height: 2rem;
  position: relative;
  top: .4rem;
  left: 0;
  z-index: 1;
}

.breadrcumb:last-child::after {
    content: '';
}

.breadcrumb::after {
  content: '/';
  margin: 0 .4rem;
}

.breadcrumb-url {
  border-bottom: 1px solid;
}
</style>