<template>
  <nuxt-link to="/news/1" class="news-card-cont card-cont">
    <div class="card-cont-inner">
      <div class="news-card-pic-wrapper">
        <img class="news-card-pic" src="" />
      </div>
      <div class="news-card-content-wrapper">
        <div class="news-card-header header-6">Госдума рассмотрит в&nbsp;первом чтении законопроект «Единой России» о&nbsp;совершенствовании механизмов расселения аварийного и&nbsp;ветхого жилья</div>
        <div class="date-publication">20 декабря 2020, в&nbsp;22:30</div>
      </div>
    </div>
  </nuxt-link>
</template>



<script>
import { defineComponent, } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'NewsBlockCard',
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


</style>