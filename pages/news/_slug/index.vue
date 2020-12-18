<template>
   <div class="page-content-superwrapper">
      <article class="page-news-wrapper page-content-wrapper grid-main">
         <aside class="page-aside-wrapper">
            <div class="breadcrumbs-news breadcrumbs"><a class="link-underline-solid" href="#">Туапсинский округ</a> / <a class="link-underline-solid" href="#">Геленджик</a> / <a class="link-underline-solid" href="#">Новости</a></div>
            <div class="date-publication">5&nbsp;декабря 2020, в&nbsp;12:20</div>
         </aside>
         <h2 class="article-header">Госдума рассмотрит в&nbsp;первом чтении законопроект «Единой России» о&nbsp;cовершенствовании механизмов расселения аварийного и&nbsp;ветхого жилья</h2>
         <div class="news-cover"><img class="news-cover-img" src="#" /></div>
         <div class="article-paragraphs">
            <p>Государственная дума одобрила закон о поправке в Конституцию. За проголосовали 383 депутата, высказавшихся против не было, воздержались 43. Документ поступил в нижнюю палату 20 января. Изложенные в нем предложения направлены на закрепление основ конституционного строя, прав и свобод человека и гражданина. Законопроектом также вводится новая процедура — общероссийское голосование.</p>
            <p>Во время подготовки ко второму чтению в профильный комитет Думы по госстроительству и законодательству поступили почти 400 поправок от всех фракций, из них около 200 учли, а 175 рекомендовали к отклонению.</p>
            <p>Как конституционные поправки будут вступать в силу. После Госдумы их должен одобрить Совфед, а потом две трети региональных Заксобраний. Затем глава государства подписывает и публикует поправки.</p>
            <p>Сначала вступает в силу третья статья: она требует от президента направить поправки в Конституционный суд. Там за семь дней решают, соответствует ли закон Конституции, и если не соответствует — вопрос закрыт.</p>
         </div>
      </article>
      <div class="page-bottom-wrapper page-bottom-wrapper-news grid-main">
         <CandidateTop class="cont-wrapper-left"/>
         <TheFooter />
      </div>
   </div>
</template>



<script>
import { defineComponent, } from '@nuxtjs/composition-api'

import NewsBlockCard from '@/components/Generic/NewsBlock/NewsBlockCard'
import Btn from '@/components/Generic/Btn/Btn'
import CandidateTop from '@/components/Generic/CandidateTop/CandidateTop'
import TheFooter from '@/components/Generic/Footer/TheFooter'

export default defineComponent({
   name:'index',
   components: {
      NewsBlockCard,
      Btn,
      CandidateTop,
      TheFooter
    }
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

.news-cover {
   grid-column: 2/32;
   background: var(--Black16);
   min-height: 50rem;
   margin-top: 4rem;
}

.article-paragraphs {
   grid-column: 9/28;
}

.article-paragraphs p {
   font-family: var(--font-serif);
   font-size: 2.4rem;
   line-height: 3.2rem;
   margin-top: 3.2rem;
}
</style>
