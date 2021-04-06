<template>
   <div class="page-content-superwrapper">
      <article class="page-news-wrapper page-content-wrapper grid-main">
         <aside class="page-aside-wrapper">
            <div class="breadcrumbs-news breadcrumbs"><a class="link-underline-solid" href="#">Туапсинский округ</a> / <a class="link-underline-solid" href="#">Геленджик</a> / <a class="link-underline-solid" href="#">Новости</a></div>
            <div class="date-publication">{{ postDate }}</div>
         </aside>
         <h2 class="article-header">{{
             post.title
           }}</h2>
         <div class="news-cover-wrapper" v-if="post.cover">
            <div class="news-cover">
               <img class="news-cover-img" :src="'https://api.prostokontora.ru/storage/' + post.cover" />
            </div>
            <div class="news-cover-comment-wrapper" v-if="post.cover_source || post.cover_descr">
               <div class="news-cover-comment">{{ post.cover_descr }}</div>
               <div class="news-cover-copyright text-small">{{ post.cover_source }}</div>
            </div>
         </div>
         <div class="article-paragraphs" v-html="post.content">

         </div>
         <div class="tags-wrapper">
            <a class="button tag"
               v-for="tag in post.tags" :key="tag.id" >{{ tag.name }}</a>
         </div>
      </article>
      <div class="page-bottom-wrapper page-bottom-wrapper-news grid-main">
         <CandidateTop class="cont-wrapper-left"/>
         <TheFooter />
      </div>
   </div>
</template>



<script lang="ts">
import { defineComponent, useContext, computed, useMeta, ref, useFetch, watch, } from '@nuxtjs/composition-api'
import moment from 'moment'

import { useAxios,} from '@/composition/axios'
import { Post, } from '@/modules/types'
import { useHelpers, } from '@/composition/helpers'
import { useBreadcrumbs, } from '@/composition/breadcrumbs'

import NewsBlockCard from '@/components/Generic/NewsBlock/NewsBlockCard.vue'
import Btn from '@/components/Generic/Btn.vue'
import CandidateTop from '@/components/Generic/CandidateTop/CandidateTop.vue'
import TheFooter from '@/components/Generic/Footer/TheFooter.vue'


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
        const { $axios, error,} = useAxios()

        const { route,} = useContext()
        console.log(route.value)
        const slug=route.value.params.slug

        const postDate = ref('')
        const post = ref<Post>({} as Post)

        const { humanDateDiff, } = useHelpers()

        const { fetch: fetchPost, } = useFetch(async () => {
            post.value = await $axios.$get('/post/' + slug)
            if (!post.value.slug) error({statusCode: 404,})
            moment.locale('ru')
            postDate.value = humanDateDiff(post.value.post_date)
        })

        useMeta(() => ({ title: post.value.title }))

        const { breadcrumbs, } = useBreadcrumbs()
        breadcrumbs.value = [
          {
          url: '/news',
          title: 'Новости',
          }
        ]
        return {
            post,
            postDate,
        }
    },
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

.news-cover-img,
.news-image img {
   width: 100%;
   height: 100%;
   max-height: 64rem;
   object-fit: cover;
}

.news-cover-comment-wrapper,
.news-image-comment-wrapper {
   margin-top: .8rem;
}

.news-cover-copyright,
.news-image-copyright {
   color: var(--Black32);
}

.news-cover-copyright:before,
.news-image-copyright:before {
   content: '©';
   display: inline-block;
   margin-right: .4rem;
}

.article-paragraphs {
   grid-column: 9/28;
}

.article-paragraphs .image img {
   width: 100%;
   height: auto;
}

.tags-wrapper {
   grid-column: 9/28;
   margin-top: 3.2rem;
}



@media (max-width: 460px) {
   .article.page-news-wrapper {
      margin-top: 0;
   }

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
   .article-paragraphs p:first-child {
      margin-top: 0;
   }
   .tags-wrapper {
      grid-column: 1/7;
   }
}

@media (max-width: 360px) {
   .article-header {
      font-size: 2.8rem;
      line-height: 3.2rem;
   }
}
</style>
