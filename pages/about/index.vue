<template>
   <div class="page-content-superwrapper">
      <div class="page-content-wrapper grid-main">
         <aside class="page-aside-wrapper">
            <div class="page-content-filter-wrapper"></div>
         </aside>
         <div class="page-wrapper">
            <h1 class="page-header">О проекте</h1>
             <p>Lorem ipsum dolor sit amet</p>
             <p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).</p>
         </div>
      </div>
      <div class="page-bottom-wrapper grid-main">
         <NewsBlock class="cont-wrapper-left"/>
         <CandidateTop class="cont-wrapper-right"/>
         <TheFooter />
      </div>
   </div>
</template>



<script>
import {defineComponent, useMeta,} from '@nuxtjs/composition-api'

import NewsBlock from '@/components/Generic/NewsBlock/NewsBlock'
import CandidateTop from '@/components/Generic/CandidateTop/CandidateTop'
import TheFooter from '@/components/Generic/Footer/TheFooter'

export default defineComponent({
    name:'about',
    components: {
        NewsBlock,
        CandidateTop,
        TheFooter,
    },
    head:{},
    setup() {
        const { title, }  = useMeta()
        title.value = 'О проекте'
    },
})
</script>


<style scoped>

</style>
