<template>
 <div class="search-results-wrapper">
   <div v-if="!isLoading">
     <div v-if="hasResults">
      <div class="search-results-candidates" v-if="results.candidates">
          <div class="search-result-header">{{ candidatesCount }}</div>
          <div class="sarch-result-grid">
              <CandidateCard v-for="candidate in results.candidates"
              :key="candidate.id"
              :candidate="candidate" />
          </div>
      </div>
      <div class="search-results-tags" v-if="results.tags">
          <div class="search-result-header">{{ tagsCount }}</div>
      </div> 
      <div class="search-results-posts" v-if="results.posts">
        <div class="search-result-header">{{  postsCount }}</div>
      </div>
     </div>
     <div v-else>
       Ничего не нашли
     </div>
  </div>
  <LoadingIndicator v-else />
 </div>
</template>

<script lang="ts">
import { defineComponent, ref, } from '@nuxtjs/composition-api'
import LoadingIndicator from '@/components/Generic/LoadingIndicator.vue'

import { useSearch, } from '@/composition/search'

export default defineComponent({
    name: 'SearchResults',
    components: { 
        LoadingIndicator, 
    },
    setup () {
        const { results, hasResults, } = useSearch()
        return {
            results, 
            hasResults,
        }
    },
})
</script>
