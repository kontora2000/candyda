<template>
  <div class="page-content-superwrapper">
    <div class="page-content-wrapper grid-main">
        <aside class="page-aside-wrapper">
          <div class="page-content-filter-wrapper"></div>
        </aside>
        <div class="page-wrapper">
          <h1 class="page-header">{{  flatPage.title }}</h1>
          <div v-html="flatPage.content" />
        </div>
    </div>
    <div class="page-bottom-wrapper grid-main">
        <NewsBlock class="cont-wrapper-left"/>
        <CandidateTop class="cont-wrapper-right"/>
        <TheFooter />
    </div>
  </div>
</template>



<script lang="ts">
import { defineComponent, ref, computed, useMeta, useFetch, useContext,  } from '@nuxtjs/composition-api'

import NewsBlock from '@/components/Generic/NewsBlock/NewsBlock.vue'
import CandidateTop from '@/components/Generic/CandidateTop/CandidateTop.vue'
import TheFooter from '@/components/Generic/Footer/TheFooter.vue'
import { FlatPage, } from '@/modules/types'
import { useAxios, } from '@/composition/axios'

export default defineComponent({
    name:'FlatPage',
    components: {
        NewsBlock,
        CandidateTop,
        TheFooter,
    },
    head:{},
    setup() {
        const flatPage = ref<FlatPage>({} as FlatPage)
        const { $axios, error, } = useAxios()
        const { route, } = useContext()
        const slug = route?.value?.params?.slug
        const { fetch: fetchPage, } = useFetch(async () => {
          try {
            const response = await $axios.get( '/flatpage/' + slug)
            if (response.status !== 200) {
              error({statusCode: response.status, })
            }
            else {
              flatPage.value = response.data
            }
            if (!flatPage.value.slug) 
              error({statusCode: 404, })
          }
          catch(e) {
            error({ statusCode:e?.status, message: e?.message })
          }
        })
      useMeta(() => ({ title: flatPage.value.title }))
      return {
        flatPage,
      }
    },
})
</script>
