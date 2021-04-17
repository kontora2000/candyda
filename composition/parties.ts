import { ref,  useFetch,  } from '@nuxtjs/composition-api'
import { usePagination } from '@/composition/pagintation'
import { Party,  } from '@/modules/types'
import { useAxios, } from '@/composition/axios'

export const usePartyList = () => {
  const { page, isNeedToUpload, isLoading,  } = usePagination()
  const { $axios, error } = useAxios()
  const parties = ref<Party[]>()
  const  { fetch: fetchParties, } = useFetch(async () => {
      try {
        const result = await $axios.$get('/parties/list/' + page.value)
        parties.value = result.data
        isNeedToUpload.value = result.next_page_url !== null
        page.value = isNeedToUpload ? page.value : page.value + 1
        parties.value = result
        if (parties.value) {
          if (parties.value?.length > 5) parties.value.length = 5
        }
      }
      catch(e) {
          error({ statusCode: e?.response?.status })
      }
  })
  
  return {
    parties,
    page,
    isNeedToUpload,
    isLoading,
    fetchParties,
  }
}