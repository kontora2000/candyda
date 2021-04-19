<template>
   <a class="button tag" href="#" @click.prevent="onTagClick()"><slot /></a>
</template>
<script lang="ts">
import { defineComponent,  } from '@nuxtjs/composition-api'
import { useSearch, } from '~/composition/search'

export default defineComponent({
    name:'Tag',
    setup () {
        const { searchBlocks, searchRequest, isSearchOpen, } =  useSearch()
        const onTagClick = () => {
           
        }
        return {
            onTagClick,
        }
    },
    
})
</script>
<style scoped>
button {
  max-height: 6.4rem;
}
</style>
