<template>
   <div class="page-content-superwrapper">
      <div class="page-candidate-wrapper page-content-wrapper grid-main">
         <aside class="page-aside-wrapper">
            <div class="breadcrumbs-news breadcrumbs"><a class="link-underline-solid" href="#">Туапсинский округ</a> / <a class="link-underline-solid" href="#">Геленджик</a> / <a class="link-underline-solid" href="#">Кандидаты</a></div>
         </aside>
         <div class="candidate-wrapper">
            <div class="candidate-ava"><img class="candidate-ava-img" src="http://er-gosduma.ru/bitrix/cache/s1/virtus/image.show/224w_248h_clipBOTH/upload/iblock/2ab/Milonov.jpg" /></div>
            <div class="candidate-info-wrapper">
               <h2 class="page-candidate-header">Духаст Вячеславович Сафонов</h2>
               <div class="candidate-status-wrapper candidate-info-row">
                  <span class="candidate-status">Бывший депутат</span>
               </div>
               <div class="candidate-rating-wrapper candidate-info-row">
                  <div class="candidate-rating">
                     <span class="candidate-top-rating">ТОП-6</span>
                     <span class="candidate-top-votes">20&hairsp;105<sup>голосов</sup></span>
                  </div>
                  <div class="candidate-vote-button-wrapper">
                     <btn class="vote-button">Проголосовать</btn>
                  </div>
               </div>
               <div class="candidate-age candidate-info-row">29 лет / Родился 8 сентября 1991</div>
               <div class="candidate-edu candidate-info-row">
                  <div class="candidate-info-row-header">Образование</div>
                  <div class="candidate-info-row-content">
                     Государственный морской университет имени адмирала Ушакова<sup class="candidate-edu-end">2013</sup>
                  </div>
               </div>
               <div class="candidate-edu candidate-info-row" style="display: none;">
                  <div class="candidate-info-row-header">Учёные степени</div>
                  <div class="candidate-info-row-content">
                     Кандидат сельскохозяйственных наук
                  </div>
               </div>
            </div>
            <div class="candidate-about-wrapper">
               <p>Лол, кек, чебурек. Лорем ипсум, долор сит амет.</p>
            </div>
            <div class="candidate-gallery-wrapper"></div>
         </div>
      </div>
      <div class="page-bottom-wrapper page-bottom-wrapper-candidate grid-main">
         <NewsBlock class="cont-wrapper-left"/>
         <CandidateTop class="cont-wrapper-right"/>
         <TheFooter />
      </div>
   </div>
</template>



<script>
import { defineComponent, } from '@nuxtjs/composition-api'

import Btn from '@/components/Generic/Btn/Btn'
import NewsBlock from '@/components/Generic/NewsBlock/NewsBlock'
import CandidateTop from '@/components/Generic/CandidateTop/CandidateTop'
import TheFooter from '@/components/Generic/Footer/TheFooter'

export default defineComponent({
   name:'_id',
   components: {
      Btn,
      NewsBlock,
      CandidateTop,
      TheFooter,
   }
})
</script>



<style scoped>
.candidate-wrapper {
   display: grid;
   grid-column: 9/32;
   grid-column-gap: 1.6rem;
}

.candidate-ava {
   grid-column: 1/2;
   display: inline-flex;
   height: 50rem;
   width: 40rem;
}

.candidate-ava-img {
   border-radius: 12px;
   width: 100%;
   height: 100%;
   object-fit: cover;
}

.candidate-info-wrapper {
   grid-column: 2/3;
}

.candidate-info-row {
   margin-top: 2.4rem;
}

.candidate-info-row-header {
   color: var(--Black20);
}

.candidate-rating-wrapper {
   background: var(--Azure6);
   border-radius: 12px;
   padding: 2.4rem 1.2rem 1.2rem;
}

.candidate-rating {
   font-size: 3.6rem;
   line-height: 3.6rem;
   text-align: center;
}

.candidate-top-rating {
   margin-right: 3.2rem;
}

.candidate-top-votes sup {
   position: relative;
   top: -6px;
}

.candidate-vote-button-wrapper {
   margin-top: 2.8rem;
}

.vote-button {
   width: 100%;
}

.candidate-about-wrapper {
   grid-column: 1/3;
   margin-top: 4rem;
}

.candidate-gallery-wrapper {
   grid-column: 1/3;
   margin-top: 4rem;
}
</style>