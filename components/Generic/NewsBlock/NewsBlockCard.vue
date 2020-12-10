<template>
  <div class="news-card-cont card-cont">
    <nuxt-link to="/">
      <div class="news-card-pic-wrapper">
        <img class="news-card-pic" src="" />
      </div>
      <div class="news-card-content-wrapper">
        <div class="news-card-header">Госдума рассмотрит в первом чтении законопроект «Единой России» о совершенствовании механизмов расселения аварийного и ветхого жилья</div>
        <div class="news-date">20 декабря 2020, в 22:30</div>
      </div>
    </nuxt-link>
   </div>
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
  }
  .news-card-cont:first-child {
    grid-column: span 14;
  }
  .news-card-cont:not(:first-child) {
    margin-top: 3.2rem;
  }

  .news-card-pic-wrapper {

  }

  .news-card-pic {

  }

  .news-card-content-wrapper {

  }


</style>