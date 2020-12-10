<template>
   <div class="cont-wrapper cont-wrapper-left">
      <div class="cont-header-wrapper>">
         <h3 class="cont-header">Последние <nuxt-link to="/" class="link-underline-solid">новости</nuxt-link></h3>
      </div>
      <div class="news-block-cards-wrapper cont-wrapper-left-content-wrapper">
         <NewsBlockCard />
         <NewsBlockCard />
         <NewsBlockCard />
         <NewsBlockCard />
         <NewsBlockCard />
         <NewsBlockCard />
         <NewsBlockCard />
         <NewsBlockCard />
         <NewsBlockCard />
         <NewsBlockCard />
         <NewsBlockCard />
         <div class="cont-bottom">
            <btn />
         </div>
      </div>
   </div>
</template>



<script>
import { defineComponent, } from '@nuxtjs/composition-api'

import NewsBlockCard from '@/components/Generic/NewsBlock/NewsBlockCard'
import Btn from '@/components/Generic/Btn/Btn'

export default defineComponent({
   name:'NewsBlock',
   components: {
      NewsBlockCard,
      Btn
    }
})
</script>



<style scoped>

</style>