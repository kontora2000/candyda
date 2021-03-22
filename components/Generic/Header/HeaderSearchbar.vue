<template>
   <div class="search-input-wrapper" v-if="!$device.isMobile">
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

export default defineComponent({
    name:'HeaderSearchbar',
    components: { 
        SearchInput,
        SearchResults,
    },
    setup () {
        const isShowResults = ref(false)
        const onFocus = () => {
            isShowResults.value = trued
            debugger
        }

        const onSearchClose = () => {
            isShowResults.value = false
        }

        return {
            isShowResults,
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

@media (max-width: 460px) {
	.search-input-wrapper {
      grid-column: 1/7;
      grid-row: 2/2;
	}
}
</style>
