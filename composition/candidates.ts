import { ref, } from '@nuxtjs/composition-api'
import { Candidate, LocationFilter, } from '@/modules/types'
import { useAxios, } from '@/composition/axios'

export const useCandidateList = () => {
    const { $axios, error,} = useAxios()
    const page = ref(1)
    const isNeedToUpload = ref(false)
    const candidates = ref<Candidate[]>([])
    const  fetchCandidates = async () => {
        try {
            const result = await $axios.$get('/candidates/list/' + page.value)
            candidates.value = result.data
            isNeedToUpload.value = result.next_page_url !== null
            page.value = isNeedToUpload ? page.value : page.value + 1
            return candidates.value
        }
        catch(e) {
            error({ statusCode: e?.response?.status })
        }
    }
    const fetchCandidatesTop  = async () => {
        try {
            const result = await $axios.get('/candidates/top')
            candidates.value = result.data
            isNeedToUpload.value = result.next_page_url !== null
            page.value = isNeedToUpload ? page.value : page.value + 1
        }
        catch(e) {
            error({ statusCode: e?.response?.status })
        }
    }

    const filterCandidates = async (filter: LocationFilter) => {
      if (!filter.region && filter.region === '') return
      try {
        const response = await $axios.post(`/candidates/filter/${page.value}`, filter,)
        if (response.status === 200) {
          candidates.value = response.data
          isNeedToUpload.value = false
          page.value = isNeedToUpload ? page.value : page.value + 1
        }
    }
    catch(e) {
        error({ statusCode: e?.response?.status })
      }
    }

    return {
        fetchCandidates,
        fetchCandidatesTop,
        filterCandidates,
        candidates,
        page,
    }
}

