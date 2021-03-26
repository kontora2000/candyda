<template>
   <div class="search-input-wrapper" 
    :class="{ 'search-input-wrapper-wide': isSearchOpen   }"
    v-if="!$device.isMobile">
      <SearchInput  
        @search-focus="onFocus" 
        @search-close="onSearchClose"/>
      <transition name="fade-fast">
        <SearchResults v-if="isShowResults"/>
      </transition>
   </div>
</template>



<script>
import { defineComponent, ref, } from '@nuxtjs/composition-api'
import SearchInput from '~/components/Search/SearchInput.vue'
import SearchResults from '~/components/Search/SearchResults.vue'
import { useSearch, } from '~/composition/search'

export default defineComponent({
    name:'HeaderSearchbar',
    components: { 
        SearchInput,
        SearchResults,
    },
    setup () {
        const { isSearchOpen, } = useSearch()
        const isShowResults = ref(false)
        const onFocus = () => {
            isShowResults.value = true
            debugger
        }

        const onSearchClose = () => {
            isShowResults.value = false
        }

        return {
            isShowResults,
            isSearchOpen,
            onFocus,
            onSearchClose,
        }
    },
})
</script>

<style scoped>
.search-input-wrapper {
   grid-column: 9/28;
   grid-row: 1/1;
}

.search-input-wrapper-wide {
    position: fixed;
    top: 2.8rem;
}

@media (max-width: 460px) {
	.search-input-wrapper {
      grid-column: 1/7;
      grid-row: 2/2;
	}
}
</style>
