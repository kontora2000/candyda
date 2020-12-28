<template>
  <nuxt-link :to="`/news/${post.slug}`" class="news-card-cont card-cont">
    <div class="card-cont-inner">
      <div class="news-card-pic-wrapper" v-if="post.image.src">
        <img class="news-card-pic" :src="post.image.src" />
      </div>
      <div class="news-card-content-wrapper">
        <div class="news-card-header header-6">{{ post.title }}</div>
        <div class="date-publication">{{ post.date }}</div>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { defineComponent, PropType, } from '@nuxtjs/composition-api'
import  { Post } from "@/modules/types";

export default defineComponent({
  name: 'NewsBlockCard',
  props: {
    post: {
      type: Object as PropType<Post>,
      default: () => {
      }
    },
  },
})
</script>


<style scoped>
.news-card-cont {
  grid-column: span 7;
  height: 28rem;
}
.news-card-cont:first-child {
  grid-column: span 14;
  height: 36rem;
}
.news-card-cont:not(:first-child) {
  margin-top: 3.2rem;
}

.news-card-cont:first-child .news-card-header {
  font-size: 3.2rem;
  line-height: 3.6rem;
  width: 90%;
}

.news-card-pic-wrapper {

}


.news-card-content-wrapper {
  display: flex;
  flex-direction: column;
  height: calc(100% - 1.6rem);
  justify-content: space-between;
  margin: .8rem;
}

.news-card-cont .date-publication {
  margin-top: 1.2rem;
}


@media (max-width: 460px) {
  .news-card-cont:first-child {
    grid-column: span 6;
  }

  .news-card-cont:first-child .news-card-header {
    font-size: 2.8rem;
    line-height: 3.2rem;
    width: 96%;
  }

  .news-card-cont {
    grid-column: span 6;
    height: 28rem;
  }
}
</style>
