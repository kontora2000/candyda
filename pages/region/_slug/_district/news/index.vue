<template>
   <div class="page-content-superwrapper">
      <div class="page-news-wrapper page-content-wrapper grid-main">
         <TheAside :filter="false" />
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
                       @click="fetchPostsByLocation($route.params.district, 'district')"
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
         </div>
      </div>
      <div class="page-bottom-wrapper page-bottom-wrapper-news grid-main">
         <TheFooter />
      </div>
   </div>
</template>


<script lang="ts">
import { defineComponent, useMeta, useFetch, useContext, } from '@nuxtjs/composition-api'
import { usePostList, } from '@/composition/posts'

import NewsBlockCard from '@/components/Generic/NewsBlock/NewsBlockCard.vue'
import Btn from '@/components/Generic/Btn.vue'
import TheFooter from '@/components/Generic/Footer/TheFooter.vue'
import TheAside from '@/components/Generic/Aside/TheAside.vue'

export default defineComponent({
    components: {
        NewsBlockCard,
        Btn,
        TheFooter,
        TheAside,
    },
    head:{},
    setup() {
        const { fetchPostsByLocation, posts, page, isNeedToUpload, } = usePostList()
        page.value = 1
        const { route, } = useContext()
        const { fetch, } = useFetch(async () => fetchPostsByLocation(route.value.params?.district, 'district'))
        const { title, } = useMeta()
        const onScroll = ($state) => {
            fetchPostsByLocation(route.value.params?.district, 'district')
            if ($state && !isNeedToUpload.value) $state.complete()
            if ($state && isNeedToUpload.value) $state.loaded()
        }
        title.value = 'Новости'
        return {
            fetchPostsByLocation,
            posts,
            page,
            isNeedToUpload,
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
