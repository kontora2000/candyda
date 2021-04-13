<template>
 <div class="main-grid search-results-wrapper">
    <template v-if="searchResults">
      <div class="cont-wrapper cont-wrapper-right search-results-candidates" v-if="searchResults.candidates && searchResults.candidates.length > 0">
          <div class="search-result-header">{{ candidatesCount }}</div>
          <div class="sarch-result-grid">
              <CandidateCard v-for="candidate in searchResults.candidates"
              :key="candidate.id"
              :candidate="candidate" />
          </div>
      </div>
      <div class="cont-wrapper cont-wrapper-right search-results-tags" v-if="searchResults.tags && searchResults.tags.length > 0">
          <h1 class="cont-header">{{ tagsCount }}</h1>
      </div> 
      <div class="search-results-parties">
      </div>
      <div class="cont-wrapper cont-wrapper-left search-results-posts" v-if="searchResults.posts && searchResults.posts.length > 0">
        <div class="search-result-header">{{  postsCount }}</div>
        <news-block-card v-for="post in searchResults.posts" 
          :key="post.id"
          :post="post" />
      </div>
    </template>
    <div v-else>
      Ничего не нашли
    </div>
  </div>
</template>

<script>
import { defineComponent, computed,  } from '@nuxtjs/composition-api'
import { useSearch, } from '@/composition/search'
import { useHelpers, } from '@/composition/helpers'
import NewsBlockCard from '@/components/Generic/NewsBlock/NewsBlockCard.vue'
import CandidateCard from '../Generic/CandidateTop/CandidateCard/CandidateCard.vue'


export default defineComponent({
    name: 'SearchResults',
    components: { 
        NewsBlockCard, 
        CandidateCard,
    },
    setup () {
        const { searchResults,  } = useSearch()
        const { numWord, } = useHelpers()
        const postsCount = computed(() => searchResults.value.posts && searchResults.value.posts.length ? 
            numWord(searchResults.value.posts.length, ['новость', 'новости','новостей']) : '')
        const candidatesCount = computed(() => searchResults.value.candidates && searchResults.value.candidates.length ? 
            numWord(searchResults.value.candidates.length, ['кандидат', 'кандидата','кандидатов']) : '')
        const tagsCount = computed(() => searchResults.value.tags && searchResults.value.tags.length ? 
            numWord(searchResults.value.tags.length, ['тэг', 'тэга','тэгов']) : '')
        const partyCount = computed(() => searchResults.value.parties ? 
            numWord(searchResults.value.parties.length, ['партия', 'партии','партий']) : '')
        return {
            searchResults,
            postsCount,
            candidatesCount,
            tagsCount,
            partyCount,
        }
    },
})
</script>
