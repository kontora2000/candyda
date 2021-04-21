<template>
   <div class="page-content-superwrapper">
      <div class="page-news-wrapper page-content-wrapper grid-main">
         <TheAside />
         <div class="page-wrapper">
            <h1 class="page-header">Новости</h1>
            <template v-if="posts && posts.length > 0">
              <NewsBlockCard class="news-card-cont-big" 
                  v-for="post in posts"
                             :key="post.id"
                             :post="post"/>
               <template v-if="isNeedToUpload">
                  <div class="showmore-btn-wrapper page-news-showmore-btn-wrapper"
                       v-if="isNeedToUpload && page === 2"
                       @click="upload"
                  >
                     <btn class="page-news-showmore-btn">Показать больше</btn>
                  </div>
                   <infinite-loading v-else-if="isNeedToUpload && page > 2 "
                                     spinner="spiral"
                                     @infinite="onScroll" >
                        <div slot="no-more" />
                       <div slot="no-results" />
                   </infinite-loading>
               </template>
            </template>
            <div v-else-if="locationFilter.region!==''">
              Нет подходящих новостей
            </div>
         </div>
      </div>
      <div class="page-bottom-wrapper page-bottom-wrapper-news grid-main">
         <CandidateTop class="cont-wrapper-left"/>
         <TheFooter />
      </div>
   </div>
</template>


<script lang="ts">
import { defineComponent, useMeta, watch, useFetch, } from '@nuxtjs/composition-api'

import {usePostList,} from '@/composition/posts'
import { useLocationFilter, } from '@/composition/filter'

import NewsBlockCard from '@/components/Generic/NewsBlock/NewsBlockCard.vue'
import Btn from '@/components/Generic/Btn.vue'
import CandidateTop from '@/components/Generic/CandidateTop/CandidateTop.vue'
import TheFooter from '@/components/Generic/Footer/TheFooter.vue'
import TheAside from '@/components/Generic/Aside/TheAside.vue'

export default defineComponent({
    name:'index',
    components: {
        NewsBlockCard,
        Btn,
        CandidateTop,
        TheFooter,
        TheAside,
    },
    head:{},
    setup() {
        const { fetchPosts, posts, page, isNeedToUpload, upload, onScroll, filterPosts, } = usePostList()
        const { fetch, } = useFetch(() => fetchPosts())
        const { title, } = useMeta()
        const { locationFilter, } = useLocationFilter()
        watch(locationFilter, () => {
            page.value = 1
            debugger
            if (locationFilter.value.region === '') {
                fetchPosts()
            }
            else filterPosts(locationFilter.value)
        }, {
            deep: true,
        })

        title.value = 'Новости'
        return {
            fetchPosts,
            posts,
            page,
            locationFilter,
            isNeedToUpload,
            upload,
            onScroll,
            
        }
    },

})
</script>


<style scoped>
.page-news-showmore-btn-wrapper {
   margin-left: 0;
   width: 100%;
}

.page-news-showmore-btn {
   max-height: 7.6rem;
   width: 100%;
}

@media (max-width: 460px) {

}
</style>
