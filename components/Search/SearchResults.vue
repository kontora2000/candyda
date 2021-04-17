<template>
 <div class="grid-main search-results-wrapper">
    <template v-if="hasResults">
        <div class="search-results-page-header-wrapper">
            <h1 class="search-results-page-header">Нашли</h1>
        </div>
        <div class="cont-wrapper cont-wrapper-left cont-wrapper-search-results search-results-candidates" v-if="searchResults.candidates && searchResults.candidates.length > 0">
            <h2 class="search-result-header">{{ candidatesCount }}</h2>
            <div class="search-result-grid">
                <CandidateCard v-for="candidate in searchResults.candidates"
                :key="candidate.id"
                :candidate="candidate" />
            </div>
        </div>
        <div class="cont-wrapper cont-wrapper-right cont-wrapper-search-results search-results-tags" v-if="searchResults.tags && searchResults.tags.length > 0">
            <h2 class="cont-header">{{ tagsCount }}</h2>
        </div> 
        <div class="cont-wrapper cont-wrapper-right cont-wrapper-search-results search-results-parties" v-if="searchResults.parties && searchResults.parties.length > 0">
            <h2 class="cont-header">{{ partyCount }}</h2>
        </div>
        <div class="cont-wrapper cont-wrapper-left cont-wrapper-search-results search-results-posts" v-if="searchResults.posts && searchResults.posts.length > 0">
        <h2 class="search-result-header">{{ postsCount }}</h2>
        <news-block-card v-for="post in searchResults.posts" 
            :key="post.id"
            :post="post" />
        </div>
    </template>
    <div v-elsye-if="searchResults.posts">Ничего не&nbsp;нашли</div>
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
        const hasResults = computed(() => 
            (searchResults.posts && searchResults.posts.length  > 0) || 
            (searchResults.candidates && searchResults.candidates.length > 0) || 
            (searchResults.parties && searchResults.parties.length > 0) || 
            (searchResults.tags && searchResults.tags.length > 0))
        return {
            searchResults,
            postsCount,
            candidatesCount,
            tagsCount,
            partyCount,
            hasResults,
        }
    },
})
</script>


<style scoped>
.search-results-wrapper {
    grid-column: 2/32;
    margin-top: 6.4rem;
}

.search-results-page-header-wrapper {
    grid-column: 1/3;
    -ms-writing-mode: tb-lr;
    writing-mode: vertical-lr;
}

.search-results-page-header {
    display: inline-flex;
    margin: 0 -2.4rem 9.2rem 0;
    position: sticky;
    position: -webkit-sticky;
    top: 8.8rem;
    transform: rotate(180deg);
    width: 100%;
}

.search-result-header {
    grid-column: 1/end;
    margin-bottom: 0;
}

.search-result-grid {
    display: grid;
    grid-column: 1/end;
    grid-template-columns: repeat(15, calc((100vw - 49.6rem - 1.6rem) / 32));
    grid-column-gap: 1.6rem;
}

.search-result-grid .candidate-card-cont.card-cont {
    grid-column: span 4;
    grid-row: span 1;
    margin-top: 3.2rem;
}
</style>