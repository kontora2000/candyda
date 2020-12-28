<template>
   <div class="page-content-superwrapper">
      <article class="page-news-wrapper page-content-wrapper grid-main">
         <aside class="page-aside-wrapper">
            <div class="breadcrumbs-news breadcrumbs"><a class="link-underline-solid" href="#">Туапсинский округ</a> / <a class="link-underline-solid" href="#">Геленджик</a> / <a class="link-underline-solid" href="#">Новости</a></div>
            <div class="date-publication">5&nbsp;декабря 2020, в&nbsp;12:20</div>
         </aside>
         <h2 class="article-header">{{
             post.title
           }}</h2>
         <div class="news-cover-wrapper" v-if="post.image">
            <div class="news-cover">
               <img class="news-cover-img" :src="post.image.src" />
            </div>
            <div class="news-cover-comment-wrapper">
               <div class="news-cover-comment">{{ post.image.description }}</div>
               <div class="news-cover-copyright text-small">{{ post.image.source }}</div>
            </div>
         </div>
         <div class="article-paragraphs">
            {{ post.content }}
         </div>
         <div class="tags-wrapper">
            <a v-for="tag in post.tags" :key="tag.id" >{{ tag.name }}</a>
         </div>
      </article>
      <div class="page-bottom-wrapper page-bottom-wrapper-news grid-main">
         <CandidateTop class="cont-wrapper-left"/>
         <TheFooter />
      </div>
   </div>
</template>



<script>
import { defineComponent,useContext } from '@nuxtjs/composition-api'

import NewsBlockCard from '@/components/Generic/NewsBlock/NewsBlockCard'
import Btn from '@/components/Generic/Btn/Btn'
import CandidateTop from '@/components/Generic/CandidateTop/CandidateTop'
import TheFooter from '@/components/Generic/Footer/TheFooter'
import {usePost} from "@/composition/post";

export default defineComponent({
   name:'index',
   components: {
      NewsBlockCard,
      Btn,
      CandidateTop,
      TheFooter
    },
   setup() {
     const  { route } = useContext()
     const { post, fetchPost, } = usePost(route.value.params.slug )

     fetchPost()

     return {
       post,
     }
   }
})
</script>


<style scoped>
article.page-news-wrapper {
   margin-top: 2rem;
}

article .date-publication {
   margin-top: 2.4rem;
}

.article-header {
   grid-column: 9/28;
   margin-top: 0;
}

.news-cover-wrapper {
   grid-column: 2/32;
   margin-top: 4rem;
}

.news-cover {
   min-height: 50rem;
   width: 100%;
}

.news-cover-copyright {
   color: var(--Black32);
}

.news-cover-copyright:before {
   content: '©';
   display: inline-block;
   margin-right: .4rem;
}

.article-paragraphs {
   grid-column: 9/28;
}

.article-paragraphs p {
   font-family: var(--font-serif);
   font-size: 2.4rem;
   line-height: 3.2rem;
   margin-top: 3.2rem;
}

.tags-wrapper {
   grid-column: 9/28;
   margin-top: 3.2rem;
}


@media (max-width: 460px) {
   .article-header {
      grid-column: 1/7;
   }
   .news-cover-wrapper {
      grid-column: 1/7;
      margin-top: 0;
   }
   .news-cover {
      min-height: auto;
   }
   .article-paragraphs {
      grid-column: 1/7;
   }
   .tags-wrapper {
      grid-column: 1/7;
   }
}
</style>
