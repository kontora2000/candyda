<template>
   <div class="page-content-superwrapper">
      <div class="page-candidate-wrapper page-content-wrapper grid-main">
         <aside class="page-aside-wrapper">
            <div class="breadcrumbs-news breadcrumbs"><a class="link-underline-solid" href="#">Туапсинский округ</a> / <a class="link-underline-solid" href="#">Геленджик</a> / <a class="link-underline-solid" href="#">Кандидаты</a></div>
         </aside>
         <div class="candidate-wrapper">
            <div class="candidate-ava" v-if="candidate.ava">
              <img class="candidate-ava-img"  :src="'https://api.prostokontora.ru/storage/' + candidate.ava" />
            </div>
            <div class="candidate-info-wrapper">
               <h2 class="page-candidate-header">{{ fullName }}</h2>
               <div class="candidate-status-wrapper candidate-info-row" v-if="candidate.status">
                  <span class="candidate-status">{{  candidate.status.name }}</span>
               </div>
               <div class="candidate-rating-wrapper candidate-info-row">
                  <div class="candidate-rating">
                     <span class="candidate-top-rating" style="display: none">ТОП-6</span>
                     <span class="candidate-top-votes">{{ localVotes }}<sup>{{ votesText }}</sup></span>
                  </div>
                  <div class="candidate-vote-button-wrapper"
                       v-touch="() => onVote(candidate.slug)" @click="onVote(candidate.slug)">
                     <btn class="vote-button"
                          :disabled="isVoted"
                          :loading="isLoading">
                         Проголосовать
                     </btn>
                  </div>
               </div>
               <div class="candidate-age candidate-info-row">Родился {{ candidate.birthdate }}, {{ ageText }}</div>
               <div class="candidate-edu candidate-info-row" v-if="candidate.party">
                  <div class="candidate-info-row-header">Партия</div>
                  <div class="candidate-info-row-content" >
                    {{ candidate.party.name }}
                  </div>
               </div>

               <div class="candidate-edu candidate-info-row" style="display: none;">
                  <div class="candidate-info-row-header">Учёные степени</div>
                  <div class="candidate-info-row-content">
                     Кандидат сельскохозяйственных наук
                  </div>
               </div>
            </div>
            <div class="candidate-about-wrapper" v-html="candidate.description">
            </div>
             <template v-if="gallery">
                <div class="candidate-gallery-wrapper" v-if="gallery.length > 0">
                    <div class="candidte-gallery-image" v-for="(image, index) in gallery" :key="index">
                        <img :src="'https://api.prostokontora.ru/storage/' + image" @click="openGallery(index)" />
                    </div>
                    <CandidateGallery
                      :images="gallery"
                      :visible="isGalleryVisible"
                      :current="currentImg"
                      @close="closeGallery"/>
                </div>
             </template>
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
import { defineComponent, useContext, computed, useMeta, watch, ref, } from '@nuxtjs/composition-api'

import Btn from '~/components/Generic/Btn.vue'
import NewsBlock from '@/components/Generic/NewsBlock/NewsBlock.vue'
import CandidateTop from '@/components/Generic/CandidateTop/CandidateTop.vue'
import CandidateGallery from '@/components/Candidate/CandidateGallery';
import TheFooter from '@/components/Generic/Footer/TheFooter.vue'

import { useCandidate,} from '@/composition/candidate.ts'
import { useHelpers,} from '@/composition/helpers.ts'
import {useToggle,} from '@/composition/toggle';

export default defineComponent({
    transition: 'fade',
    components: {
        Btn,
        NewsBlock,
        CandidateTop,
        CandidateGallery,
        TheFooter,
    },
    head:{},
    setup() {
        const { route, error, } = useContext()
        if (route.value?.params?.slug && route.value?.params?.slug.trim()!=='')   {
            const {
                candidate,
                fetchCandidate,
                onVote,
                isVoted,
                isLoading,
                localVotes,
                fullName,
                age,
                gallery, } = useCandidate()
            fetchCandidate()
            isVoted.value = false
            const { numWord, } = useHelpers()
            const votesText = computed( () => numWord(localVotes.value, ['голос', 'голоса', 'голосов']))
            const ageText = ref('')
            watch(age, ()=> {
                ageText.value = -1*age.value + ' ' + numWord(-age.value, ['год', 'года', 'лет'])
                isVoted.value = localStorage.getItem(candidate.value.slug)!==null
            })
            const title = computed(()=>fullName.value || '')
            useMeta({ title, })

            const {
                isVisible: isGalleryVisible,
                hide: closeGallery, }  = useToggle()
            const currentImg = ref(0)

            const openGallery = (index) => {
                currentImg.value = index
                isGalleryVisible.value = true
                document.body.style.overflowY = 'hidden'
                document.body.style.position = 'fixed'
                document.querySelector('html').style.overflow = 'hidden'
            }

            return {
                candidate,
                isVoted,
                votesText,
                isLoading,
                localVotes,
                ageText,
                fullName,
                gallery,
                isGalleryVisible,
                currentImg,
                openGallery,
                closeGallery,
                onVote,
            }
        }
        else {
            error( { statusCode: 404, })
        }
    },
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



@media (min-width: 1460px;) {
   .candidate-wrapper {
      grid-column: 9/28;
   }
}



@media (max-width: 460px) {
   .candidate-wrapper {
      grid-column: 1/7;
      grid-column-gap: 1.2rem;
   }

   .candidate-ava {
      grid-column: 1/7;
      height: 40rem;
      width: 100%;
   }

   .candidate-info-wrapper {
      grid-column: 1/7;
   }

   .candidate-about-wrapper {
      grid-column: 1/7;
   }
}



@media (max-width: 360px) {
   .candidate-ava {
      height: 32rem;
   }
}
</style>
