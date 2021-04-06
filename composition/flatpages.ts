import { ref,  useFetch,  } from '@nuxtjs/composition-api'
import { useAxios, } from '@/composition/axios'
import { FlatPage } from '@/modules/types'

export const useFlatPages = () => {
  const flatPages = ref<FlatPage[]>()
  const { $axios, error } = useAxios()
  const  { fetch: fetchFlatPages, } = useFetch(async () => {
    try {
      const response = await $axios.get('/flatpage/list/1')
      if (response.status == 200) {
        flatPages.value = response.data
      }
      else {
        console.error('Error due loading flatpages list')
      }
    }
    catch(e) {
        error({ statusCode: e?.response?.status })
    }
  })
  return {
    flatPages,
    fetchFlatPages,
  }
}