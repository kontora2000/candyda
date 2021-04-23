<template>
<<<<<<< HEAD
  <nuxt-link :to="`/news/${post.slug}`" class="news-card-cont card-cont" :class="{ 'with-image': post.cover }">
    <div class="card-cont-inner">
      <div class="news-card-pic-wrapper" v-if="post.cover">
        <img class="news-card-pic" :src="post.cover" />
=======
  <nuxt-link :to="`/news/${post.slug}`" class="news-card-cont card-cont"
             :class="{ 'with-image': post.cover }">
    <div class="card-cont-inner">
      <div class="news-card-pic-wrapper" v-if="post.cover">
        <img class="news-card-pic" :src="'https://api.prostokontora.ru/storage/' + post.cover" />
>>>>>>> abb7854be8dce745dc33316f6ab7f0558b28041e
      </div>
      <div class="news-card-content-wrapper">
        <div class="news-card-header">{{ post.title }}</div>
        <div class="date-publication">{{ postDate }}</div>
      </div>
    </div>
  </nuxt-link>
</template>


<script lang="ts">
import {defineComponent, PropType, } from '@nuxtjs/composition-api'
import  { Post, } from "@/modules/types";
import {useHelpers, } from "~/composition/helpers";

export default defineComponent({
  name: 'NewsBlockCard',
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  }, setup(props) {
        const { humanDateDiff, } = useHelpers()
        const postDate = humanDateDiff(props.post.post_date)
        return {
          postDate,
        }
    }
})
</script>



<style>

</style>
