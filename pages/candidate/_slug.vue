<template>
   <div class="page-content-superwrapper">
      <div class="page-candidate-wrapper page-content-wrapper grid-main">
         <aside class="page-aside-wrapper">
           <breadcrumbs />
         </aside>
         <div class="candidate-wrapper">
            <div class="candidate-ava" v-if="candidate.ava">
              <img class="candidate-ava-img"  :src="'https://api.prostokontora.ru/storage/' + candidate.ava" />
            </div>
            <div class="candidate-info-wrapper candidate-info-wrapper-name">
               <h2 class="page-candidate-header">{{ fullName }}</h2>
               <div class="candidate-status-wrapper candidate-info-row" v-if="candidate.status">
                  <span class="candidate-status">{{  candidate.status.name }}</span>
               </div>
            </div>
            <div class="candidate-info-wrapper candidate-info-wrapper-other">
               <div class="candidate-rating-wrapper candidate-info-row">
                  <div class="candidate-rating">
                     <span class="candidate-top-rating" v-if="localNum">ТОП-{{ localNum}}</span>
                     <span class="candidate-top-votes" v-if="localVotes !== null && localVotes !== 'undefined'">{{ localVotes }}<sup>{{ votesText }}</sup></span>
                  </div>
                  <div class="candidate-vote-button-wrapper" v-if="localVotes !== null && localVotes !== 'undefined'"
                       v-touch="() => onVote(candidate.slug)" @click="onVote(candidate.slug)">
                     <btn class="vote-button"
                          :disabled="isVoted"
                          :loading="isLoading"><svg class="icon-votes-counter icon-svg"><use xlink:href="/sprite.svg#icon-check" /></svg><span>Проголосовать</span></btn>
                  </div>
               </div>
               <div class="candidate-age candidate-info-row">{{ ageText }}<sup>родился {{ candidate.birthdate }}</sup></div>
               <div class="candidate-edu candidate-info-row" v-if="candidate.party">
                  <div class="candidate-info-row-header">Партия</div>
                  <div class="candidate-info-row-content" >
                    <nuxt-link :to="`/party/${candidate.party.slug}`">{{ candidate.party.name }}</nuxt-link>
                  </div>
               </div>

               <div class="candidate-edu candidate-info-row" style="display: none;">
                  <div class="candidate-info-row-header">Учёные степени</div>
                  <div class="candidate-info-row-content">
                     Кандидат сельскохозяйственных наук
                  </div>
               </div>
            </div>
            <div class="candidate-about-wrapper" v-html="candidate.description"></div>
            <template v-if="gallery">
               <div class="candidate-gallery-cont" v-if="gallery.length > 0">
                  <h3>На фотографиях</h3>
                  <div class="candidate-gallery-wrapper">
                     <div class="candidate-gallery-img-cont" v-for="(image, index) in gallery" :key="index">
                        <img class="candidate-gallery-img" :src="'https://api.prostokontora.ru/storage/' + image" @click="openGallery(index)" />
                     </div>
                     <CandidateGallery
                        :images="gallery"
                        :visible="isGalleryVisible"
                        :current="currentImg"
                        @close="closeGallery"/>
                  </div>
               </div>
            </template>
         </div>
      </div>
      <div class="page-bottom-wrapper page-bottom-wrapper-candidate grid-main">
         <CandidateNews v-if="candidate.posts"
          class="cont-wrapper-left" 
          :posts="candidate.posts" 
        />
        <NewsBlock class="cont-wrapper-left" v-else />
         <CandidateTop class="cont-wrapper-right"/>
         <TheFooter />
      </div>
   </div>
</template>

<script lang="ts">
import { defineComponent, useContext, computed, useMeta, watch, ref, } from '@nuxtjs/composition-api'
import { useCandidate, } from '@/composition/candidate'
import { useHelpers, } from '@/composition/helpers'
import { useToggle, } from '@/composition/toggle'
import { useBreadcrumbs, } from '@/composition/breadcrumbs'

import Btn from '@/components/Generic/Btn.vue'
import CandidateTop from '@/components/Generic/CandidateTop/CandidateTop.vue'
import CandidateGallery from '@/components/Candidate/CandidateGallery.vue'
import CandidateNews from '@/components/Candidate/CandidateNews.vue'
import TheFooter from '@/components/Generic/Footer/TheFooter.vue'
import NewsBlock from '@/components/Generic/NewsBlock/NewsBlock.vue'
import Breadcrumbs from '@/components/Generic/BreadCrumbs/Breadcrumbs.vue'

export default defineComponent({
    transition: 'fade',
    components: {
        Btn,
        CandidateTop,
        CandidateGallery,
        CandidateNews,
        TheFooter,
        NewsBlock,
        Breadcrumbs,
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
                localVotes,
                localNum,
                fullName,
                age,
                gallery, } = useCandidate()
            fetchCandidate()
            isVoted.value = true
            const { numWord, } = useHelpers()
            const votesText = computed( () => numWord(localVotes.value, ['голос', 'голоса', 'голосов']))
            const ageText = ref('')
            watch(age, ()=> {
                if (age.value) {
                    ageText.value = -1*age.value + ' ' + numWord(-age.value, ['год', 'года', 'лет'])
                }
                isVoted.value = localStorage.getItem(candidate.value.slug)!==null
                const { setCandidateBreadcrumbs, } = useBreadcrumbs()
                setCandidateBreadcrumbs(candidate.value)
            })
            useMeta(() => ({ title: fullName.value, }))
            //gallery
            const { isVisible: isGalleryVisible, hide: closeGallery, }  = useToggle()
            const currentImg = ref(0)
            const openGallery = (index) => {
                currentImg.value = index
                isGalleryVisible.value = true
                document.body.style.overflowY = 'hidden'
                document.body.style.position = 'fixed'
                const htmlRoot = document.querySelector('html')
                if (htmlRoot)  htmlRoot.style.overflow = 'hidden'
                const lightbox:HTMLFormElement|null =  document.querySelector('.gallery-lightbox-wrapper')
                if (lightbox) lightbox.focus()
            }
            const isLoading = false
            return {
                candidate,
                isVoted,
                votesText,
                localVotes,
                localNum,
                isLoading,
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
   grid-template-columns: repeat(22, calc((100vw - 49.6rem - 1.6rem) / 32));
}

.candidate-ava {
   grid-column: 1/12;
   grid-row: 1/6;
   display: inline-flex;
   height: 50rem;
   margin-right: .8rem;
   width: 40rem;
}

.candidate-ava-img {
   border-radius: 12px;
   width: 100%;
   height: 100%;
   object-fit: cover;
}

.candidate-info-wrapper {
   grid-column: 12/22;
}

.candidate-info-wrapper-name {
   grid-row: 1/2;
}
.candidate-info-wrapper-other {
   grid-row: 2/6;
}

.candidate-info-row {
   margin-top: 2.4rem;
}

.candidate-status-wrapper {
   margin-top: 0;
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
   color: var(--Azure100);
   margin-right: 3.2rem;
}

.candidate-top-votes sup,
.candidate-age sup {
   margin-left: .4rem;
   position: relative;
   top: -6px;
}

.candidate-vote-button-wrapper {
   margin-top: 2.8rem;
}

.vote-button {
   width: 100%;
}

.vote-button>.icon-votes-counter {
   fill: var(--White100);
   display: inline-block;
   height: 1.8rem;
   width: 2.4rem;
   margin-right: .8rem;
   position: relative;
   top: .1rem;
}
.vote-button:disabled>.icon-votes-counter {
   fill: var(--Black16);
}

.candidate-about-wrapper {
   grid-column: 1/22;
   margin-top: 4rem;
   max-width: 64rem;
}

.candidate-gallery-cont {
   display: grid;
   grid-column: 1/22;
   grid-column-gap: 1.6rem;
   grid-template-columns: repeat(22, calc((100vw - 49.6rem - 1.6rem) / 32));
   margin-top: 4.8rem;
}

.candidate-gallery-cont h3 {
   grid-column: 1/22;
   margin-top: 0;
}

.candidate-gallery-wrapper {
   display: grid;
   grid-column: 1/22;
   grid-column-gap: 1.6rem;
   grid-template-columns: repeat(22, calc((100vw - 49.6rem - 1.6rem) / 32));
}

.candidate-gallery-img-cont {
   border-radius: 12px;
   grid-column: span 7;
   margin-top: 1.6rem;
   overflow: hidden;
}

.candidate-gallery-img {
   height: 100%;
   object-fit: cover;
   width: 100%;
}

@media (min-width: 1460px) {
   .candidate-wrapper {
      grid-column: 9/28;
   }
}

@media (max-width: 460px) {
   .candidate-wrapper {
      grid-column: 1/7;
      grid-column-gap: 1.2rem;
      grid-template-columns: repeat(6, calc((100vw - 6rem - 2.4rem) / 6));
   }

   .candidate-ava {
      grid-column: 1/7;
      grid-row: 2/3;
      height: 40rem;
      margin-top: 2rem;
      margin-right: 0;
      width: 100%;
   }

   .candidate-info-wrapper {
      grid-column: 1/7;
   }

   .candidate-info-wrapper-name {
      grid-row: 1/2;
      margin-top: 2rem;
   }
   .page-candidate-header {
      margin-bottom: .8rem;
   }

   .candidate-info-wrapper-other {
      grid-row: 3/4;
   }
   .candidate-rating-wrapper {
      margin-top: 1.6rem;
   }
   .candidate-age {
      margin-top: 4rem;
   }

   .candidate-about-wrapper {
      grid-column: 1/7;
   }

   .candidate-gallery-cont {
      grid-column: 1/7;
      grid-template-columns: repeat(6, calc((100vw - 4rem - 2.4rem) / 6));
      grid-column-gap: .8rem;
   }

   .candidate-gallery-cont h3 {
      grid-column: 1/-1;
   }

   .candidate-gallery-wrapper {
      grid-column: 1/-1;
      grid-template-columns: repeat(6, calc((100vw - 4rem - 2.4rem) / 6));
      grid-column-gap: .8rem;
   }

   .candidate-gallery-img-cont {
      border-radius: 8px;
      grid-column: span 3;
      margin-top: .8rem;
   }
}



@media (max-width: 360px) {
   .candidate-ava {
      height: 32rem;
   }
}
</style>
