<template>
   <div class="cont-wrapper">
      <div class="cont-header-wrapper">
         <h3 class="cont-header">Последние <nuxt-link to="/news" class="link-underline-solid">новости</nuxt-link></h3>
      </div>
      <div class="news-block-cards-wrapper block-cards-wrapper">
         <NewsBlockCard
             v-for="post in posts"
             :key="post.id"
             :post="post"/>
         <div class="showmore-btn-wrapper" v-if="page === 2 && isNeedToUpload">
            <btn @click="fetchPosts">Показать больше</btn>
         </div>
      </div>
   </div>
</template>



<script>
import { defineComponent,  onMounted, } from '@nuxtjs/composition-api'

import NewsBlockCard from '@/components/Generic/NewsBlock/NewsBlockCard'
import Btn from '@/components/Generic/Btn'
import {usePostList,} from '@/composition/posts';


export default defineComponent({
    name:'NewsBlock',
    components: {
        NewsBlockCard,
        Btn,
    },
    ssr: false,
    setup() {
        const { fetchPosts, posts, page, isNeedToUpload, } = usePostList()
        onMounted(async () => {
            await fetchPosts()
        })
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

</style>
