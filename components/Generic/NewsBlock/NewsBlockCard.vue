<template>
  <nuxt-link :to="`/news/${post.slug}`" class="news-card-cont card-cont"
             :class="{ 'with-image': post.cover }">
    <div class="card-cont-inner">
      <div class="news-card-pic-wrapper" v-if="post.cover">
        <img class="news-card-pic" :src="'https://api.prostokontora.ru/storage/' + post.cover" />
      </div>
      <div class="news-card-content-wrapper">
        <div class="news-card-header">{{ post.title }}</div>
        <div class="date-publication">{{ postDate }}</div>
      </div>
    </div>
  </nuxt-link>
</template>


<script lang="ts">
import {defineComponent, PropType, useContext,} from '@nuxtjs/composition-api'
import  { Post } from "@/modules/types";
import moment from "moment";
import {useHelpers} from "~/composition/helpers";

export default defineComponent({
  name: 'NewsBlockCard',
  props: {
    post: {
      type: Object as PropType<Post>,
      default: () => {
      }
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



<style scoped>
.news-card-cont {
  overflow: hidden;
}
.news-card-cont:not(:first-child) {
  margin-top: 3.2rem;
}

.news-card-cont .date-publication {
  margin-top: 1.2rem;
}

.news-card-pic-wrapper {
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;
}

.news-card-pic {
  -webkit-mask-image: linear-gradient(180deg,#000 53.78%,rgba(0,0,0,.991699) 55.33%,rgba(0,0,0,.96591) 56.88%,rgba(0,0,0,.921607) 58.43%,rgba(0,0,0,.858485) 59.98%,rgba(0,0,0,.777496) 61.53%,rgba(0,0,0,.681391) 63.08%,rgba(0,0,0,.575016) 64.63%,rgba(0,0,0,.464984) 66.18%,rgba(0,0,0,.358609) 67.73%,rgba(0,0,0,.262504) 69.28%,rgba(0,0,0,.181515) 70.83%,rgba(0,0,0,.118393) 72.38%,rgba(0,0,0,.0740896) 73.93%,rgba(0,0,0,.0483013) 75.48%,rgba(0,0,0,0) 77.03%);
  mask-image: linear-gradient(180deg,#000 53.78%,rgba(0,0,0,.991699) 55.33%,rgba(0,0,0,.96591) 56.88%,rgba(0,0,0,.921607) 58.43%,rgba(0,0,0,.858485) 59.98%,rgba(0,0,0,.777496) 61.53%,rgba(0,0,0,.681391) 63.08%,rgba(0,0,0,.575016) 64.63%,rgba(0,0,0,.464984) 66.18%,rgba(0,0,0,.358609) 67.73%,rgba(0,0,0,.262504) 69.28%,rgba(0,0,0,.181515) 70.83%,rgba(0,0,0,.118393) 72.38%,rgba(0,0,0,.0740896) 73.93%,rgba(0,0,0,.0483013) 75.48%,rgba(0,0,0,0 77.03%));
}


/* Small news card */
.news-card-cont-small {
  grid-column: span 7;
  height: 28rem;
}
.news-block-cards-wrapper .news-card-cont-small:first-child {
  grid-column: span 14;
  height: 36rem;
}

.news-block-cards-wrapper .news-card-cont-small:first-child .news-card-header {
  font-size: 3.6rem;
  line-height: 4rem;
  width: 90%;
}

.news-card-cont-small .news-card-content-wrapper {
  display: flex;
  flex-direction: column;
  height: calc(100% - 1.6rem);
  justify-content: space-between;
  margin: .8rem;
}

.news-block-cards-wrapper .with-image.news-card-cont-small:first-child  .news-card-header {
  font-size: 2.4rem;
  line-height: 2.8rem;
}

.news-card-cont-small.with-image .news-card-content-wrapper {
  height: 12.8rem;
  margin-top: 0;
  position: absolute;
  bottom: 0;
}

.news-card-cont-small.with-image .news-card-header {
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}


/* Big news card */
.news-card-cont-big {

}

.news-card-cont-big .news-card-header {
  font-size: 3.6rem;
  line-height: 4rem;
  width: 88%;
}

.news-card-cont-big .news-card-content-wrapper {
  display: flex;
  flex-direction: column;
  height: calc(100% - 1.6rem);
  justify-content: space-between;
  margin: .8rem;
}

.news-card-cont-big.with-image .news-card-header {
  font-size: 2.4rem;
  line-height: 2.8rem;
  width: 88%;

  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}

.news-card-cont-big.with-image .news-card-content-wrapper {
  height: 12.8rem;
  margin-top: 0;
  position: absolute;
  bottom: 0;
}

.news-card-cont-big.with-image .news-card-header {
  font-size: 2.4rem;
  line-height: 2.8rem;
}

.news-card-cont-big.with-image .news-card-header {
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
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
    height: 32rem;
  }
  .news-card-cont:first-child {
    height: 32rem;
  }

  .news-card-cont.with-image .news-card-header {
    font-size: 2.4rem !important;
    line-height: 2.8rem !important;
  }

  .news-card-header,
  .page-wrapper .news-card-header {
    font-size: 2.8rem;
    line-height: 3.2rem;
    width: 94%;
  }
}
</style>
