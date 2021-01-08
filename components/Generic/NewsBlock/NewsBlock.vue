<template>
   <div class="cont-wrapper">
      <div class="cont-header-wrapper">
         <h3 class="cont-header">Последние <nuxt-link to="/news" class="link-underline-solid">новости</nuxt-link></h3>
      </div>
      <div class="news-block-cards-wrapper block-cards-wrapper">
         <NewsBlockCard class="news-card-cont-small"
             v-for="post in posts"
             :key="post.id"
             :post="post"/>
          <template v-if="isNeedToUpload">
              <div class="showmore-btn-wrapper" v-if="isNeedToUpload && page === 2" @click="upload">
                  <btn>Показать больше</btn>
              </div>
              <infinite-loading v-else-if="page > 2" style="margin-top: 10px" class="showmore-btn-wrapper"
                                spinner="spiral"
                                @infinite="onScroll" >
                  <div slot="no-more" />
                  <div slot="no-results" />
              </infinite-loading>
          </template>
      </div>
   </div>
</template>



<script>
import { defineComponent,  } from '@nuxtjs/composition-api'

import NewsBlockCard from '@/components/Generic/NewsBlock/NewsBlockCard'
import Btn from '@/components/Generic/Btn'
import {usePostList,} from '@/composition/posts';


export default defineComponent({
    name:'NewsBlock',
    components: {
        NewsBlockCard,
        Btn,
    },
    setup() {
        const { fetchPosts, posts, page, isNeedToUpload, upload, onScroll, } = usePostList()
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
</style>
