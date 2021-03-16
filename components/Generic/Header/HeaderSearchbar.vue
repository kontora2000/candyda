<template>
   <div class="search-input-wrapper" v-if="!$device.isMobile">
      <SearchInput />
   </div>
</template>



<script>
import { defineComponent, } from '@nuxtjs/composition-api'
import SearchInput from '~/components/Search/SearchInput.vue'

export default defineComponent({
    components: { 
        SearchInput,
    },
    name:'HeaderSearchbar',
})
</script>



<style scoped>
.search-input-wrapper {
   grid-column: 9/28;
   grid-row: 1/1;
}

.search-input {
   width: 100%;
}

@media (max-width: 460px) {
	.search-input-wrapper {
      grid-column: 1/7;
      grid-row: 2/2;
	}
}
</style>
