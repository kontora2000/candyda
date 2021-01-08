<template>
   <div class="page-content-superwrapper">
      <div class="page-news-wrapper page-content-wrapper grid-main">
         <aside class="page-aside-wrapper">
            <div class="page-content-filter-wrapper"></div>
         </aside>
         <div class="page-wrapper">
            <h1 class="page-header">Новости</h1>
            <template v-if="posts.length > 0">
              <NewsBlockCard class="news-card-cont-big" v-for="post in posts"
                             :key="post.id"
                             :post="post"/>
               <template v-if="isNeedToUpload">
                  <div class="showmore-btn-wrapper" v-if="isNeedToUpload && page === 2" @click="upload">
                     <btn>Показать больше</btn>
                  </div>
                   <infinite-loading v-else-if="page > 2"
                                     spinner="spiral"
                                     @infinite="onScroll" >
                        <div slot="no-more" />
                       <div slot="no-results" />
                   </infinite-loading>
               </template>
            </template>
         </div>
      </div>
      <div class="page-bottom-wrapper page-bottom-wrapper-news grid-main">
         <CandidateTop class="cont-wrapper-left"/>
         <TheFooter />
      </div>
   </div>
</template>


<script>
import { defineComponent, useMeta, } from '@nuxtjs/composition-api'

import NewsBlockCard from '@/components/Generic/NewsBlock/NewsBlockCard'
import Btn from '@/components/Generic/Btn'
import CandidateTop from '@/components/Generic/CandidateTop/CandidateTop'
import TheFooter from '@/components/Generic/Footer/TheFooter'
import {useAxios,} from '@/composition/axios';
import {usePostList,} from '@/composition/posts';

export default defineComponent({
    name:'index',
    components: {
        NewsBlockCard,
        Btn,
        CandidateTop,
        TheFooter,
    },
    head:{},
    setup() {
        const { fetchPosts, posts, page, isNeedToUpload, upload, onScroll, } = usePostList()
        const { title, } = useMeta()
        title.value = 'Новости'
        return {
            fetchPosts,
            posts,
            page,
            isNeedToUpload,
            upload,
            onScroll,
        }
    },

})
</script>


<style scoped>
.page-wrapper .news-card-cont {
   height: 44rem;
}


@media (max-width: 460px) {
   .page-wrapper .news-card-cont {
      height: 32rem;
   }
}
</style>
