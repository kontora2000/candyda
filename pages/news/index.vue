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
              <div class="showmore-btn-wrapper page-news-showmore-btn-wrapper" v-if="page === 2 && isNeedToUpload">
                 <btn class="page-news-showmore-btn" click="fetchPosts">Показать больше</btn>
              </div>
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
        const { fetchPosts, posts, page, isNeedToUpload, } = usePostList()
        fetchPosts()
        const { title, } = useMeta()
        title.value = 'Новости'

        return {
            fetchPosts,
            posts,
            page,
            isNeedToUpload,
        }
    },

})
</script>


<style scoped>
.page-wrapper .news-card-cont {
   height: 44rem;
}

.page-news-showmore-btn-wrapper {
   margin-left: 0;
   width: 100%;
}

.page-news-showmore-btn {
   max-height: 7.6rem;
   width: 100%;
}

@media (max-width: 460px) {
   .page-wrapper .news-card-cont {
      height: 32rem;
   }
}
</style>
