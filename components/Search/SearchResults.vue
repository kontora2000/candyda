<template>
 <div class="grid-main search-results-wrapper">
    <template v-if="hasResults">
        <div class="search-results-page-header-wrapper">
            <h1 class="search-results-page-header">Нашли</h1>
        </div>
        <div class="cont-wrapper cont-wrapper-left cont-wrapper-search-results search-results-candidates" v-if="searchResults.candidates && searchResults.candidates.length > 0">
            <h2 class="search-result-header">{{ searchResults.candidates.length}}&nbsp;{{ candidatesCount }}</h2>
            <div class="search-result-grid">
                <CandidateCard v-for="candidate in searchResults.candidates"
                :key="candidate.id"
                :candidate="candidate" />
            </div>
        </div>
        <div class="cont-wrapper cont-wrapper-right cont-wrapper-search-results search-results-tags" v-if="searchResults.tags && searchResults.tags.length > 0">
            <h2 class="search-result-header">{{ searchResults.tags.length  }}&nbsp;{{ tagsCount }}</h2>
            <Tag class="search-results-tag" v-for="tag in searchResults.tags" 
              :key="tag.id" 
            >
              {{ tag.name }}
            </Tag>
        </div> 
        <div class="cont-wrapper cont-wrapper-right cont-wrapper-search-results search-results-parties" v-if="searchResults.parties && searchResults.parties.length > 0">
            <h2 class="search-result-header">{{ searchResults.parties.length  }}&nbsp;{{ partyCount }}</h2>
        </div>
        <div class="cont-wrapper cont-wrapper-search-results search-results-posts" v-if="searchResults.posts && searchResults.posts.length > 0">
        <h2 class="search-result-header">{{ searchResults.posts.length  }}&nbsp;{{ postsCount }}</h2>
        <news-block-card v-for="post in searchResults.posts" 
            :key="post.id"
            :post="post" />
        </div>
    </template>
    <h1 v-else-if="searchResults.posts">Ничего не&nbsp;нашли</h1>
  </div>
</template>



<script>
import { defineComponent, computed,  } from '@nuxtjs/composition-api'
import { useSearch, } from '@/composition/search'
import { useHelpers, } from '@/composition/helpers'
import NewsBlockCard from '@/components/Generic/NewsBlock/NewsBlockCard.vue'
import CandidateCard from '../Generic/CandidateTop/CandidateCard/CandidateCard.vue'
import Tag from '@/components/Generic/Tag.vue'

export default defineComponent({
    name: 'SearchResults',
    components: { 
        NewsBlockCard, 
        CandidateCard,
        Tag,
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
        const hasResults = computed(() => {
            return   (searchResults.value.posts && searchResults.value.posts.length  > 0) || 
            (searchResults.value.candidates && searchResults.value.candidates.length > 0) || 
            (searchResults.value.parties && searchResults.value.parties.length > 0) || 
            (searchResults.value.tags && searchResults.value.tags.length > 0)
        })
     
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


<style>
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

.search-results-wrapper .cont-wrapper-left {
    grid-column: span 16;
}

.search-results-wrapper .cont-wrapper-right {
    grid-column: span 12;
}

.search-result-grid .candidate-card-cont.card-cont {
    grid-column: span 4;
    grid-row: span 1;
    margin-top: 3.2rem;
}

.search-results-posts {
    grid-column: 3/31;
    grid-template-columns: repeat(28, calc((100vw - 49.6rem - 1.6rem) / 32));
    grid-column-gap: 1.6rem;
}

.search-results-posts .news-card-cont.card-cont {
    grid-column: span 7;
    height: 28rem;
}
.search-results-posts .news-card-cont.card-cont:nth-child(2),
.search-results-posts .news-card-cont.card-cont:nth-child(3) {
    grid-column: span 14;
    height: 36rem;
}

.search-results-posts .news-card-cont.card-cont:nth-child(2) .news-card-content-wrapper,
.search-results-posts .news-card-cont.card-cont:nth-child(3) .news-card-content-wrapper {
	display: flex;
	flex-direction: column;
	height: calc(100% - 2.4rem);
	justify-content: space-between;
	margin: 1.2rem .8rem;
}

.search-results-posts .news-card-cont.card-cont:nth-child(2).with-image .news-card-header,
.search-results-posts .news-card-cont.card-cont:nth-child(3).with-image .news-card-header {
font-size: 2.8rem;
line-height: 3.6rem;
-webkit-line-clamp: 3;
width: 100%;
}

.search-results-posts .news-card-cont.card-cont:nth-child(2).with-image .news-card-content-wrapper,
.search-results-posts .news-card-cont.card-cont:nth-child(3).with-image .news-card-content-wrapper {
height: 13.6rem;
margin-top: 0;
position: absolute;
bottom: 0;
}
</style>