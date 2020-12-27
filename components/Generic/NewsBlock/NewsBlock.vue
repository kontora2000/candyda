<template>
   <div class="cont-wrapper">
      <div class="cont-header-wrapper">
         <h3 class="cont-header">Последние <nuxt-link to="/news" class="link-underline-solid">новости</nuxt-link></h3>
      </div>
      <div class="news-block-cards-wrapper block-cards-wrapper">
         <NewsBlockCard
             v-for="post in posts"
             post="post"/>
         <div class="showmore-btn-wrapper">
            <btn>Показать больше</btn>
         </div>
      </div>
   </div>
</template>



<script>
import { defineComponent, useContext, } from '@nuxtjs/composition-api'

import NewsBlockCard from '@/components/Generic/NewsBlock/NewsBlockCard'
import Btn from '@/components/Generic/Btn/Btn'
import {usePostList} from "@/composition/posts";

export default defineComponent({
   name:'NewsBlock',
   components: {
      NewsBlockCard,
      Btn
    },
  setup() {
    const { fetchPosts, posts, page } = usePostList()
    fetchPosts()


    return {
      fetchPosts,
      posts,
      page,
    }
  }
})
</script>



<style scoped>

</style>
