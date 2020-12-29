<template>
  <nuxt-link :to="`/news/${post.slug}`" class="news-card-cont card-cont">
    <div class="card-cont-inner">
      <div class="news-card-pic-wrapper" v-if="post.image">
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

.news-card-pic {
  -webkit-mask-image: linear-gradient(180deg,#000 53.78%,rgba(0,0,0,.991699) 55.33%,rgba(0,0,0,.96591) 56.88%,rgba(0,0,0,.921607) 58.43%,rgba(0,0,0,.858485) 59.98%,rgba(0,0,0,.777496) 61.53%,rgba(0,0,0,.681391) 63.08%,rgba(0,0,0,.575016) 64.63%,rgba(0,0,0,.464984) 66.18%,rgba(0,0,0,.358609) 67.73%,rgba(0,0,0,.262504) 69.28%,rgba(0,0,0,.181515) 70.83%,rgba(0,0,0,.118393) 72.38%,rgba(0,0,0,.0740896) 73.93%,rgba(0,0,0,.0483013) 75.48%,rgba(0,0,0,0) 77.03%);
  mask-image: linear-gradient(180deg,#000 53.78%,rgba(0,0,0,.991699) 55.33%,rgba(0,0,0,.96591) 56.88%,rgba(0,0,0,.921607) 58.43%,rgba(0,0,0,.858485) 59.98%,rgba(0,0,0,.777496) 61.53%,rgba(0,0,0,.681391) 63.08%,rgba(0,0,0,.575016) 64.63%,rgba(0,0,0,.464984) 66.18%,rgba(0,0,0,.358609) 67.73%,rgba(0,0,0,.262504) 69.28%,rgba(0,0,0,.181515) 70.83%,rgba(0,0,0,.118393) 72.38%,rgba(0,0,0,.0740896) 73.93%,rgba(0,0,0,.0483013) 75.48%,rgba(0,0,0,0 77.03%));
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
