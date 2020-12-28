import {ref, computed, useFetch,} from '@nuxtjs/composition-api'
import { Candidate, } from '@/modules/types.ts'
import { useSnackbar, } from '~/composition/snackbar'
import { useAxios, } from './axios'
import {useVotes} from "~/composition/votes";

export const useCandidate = (slug: string) => {
  const { $axios, error } = useAxios()
  const candidate=ref<Candidate>({} as Candidate)
  const { fetch: fetchCandidate, fetchState } = useFetch(async () => {
    try {
      const response = await $axios.get('/candidates/' + slug)
      if (response.status === 200) {
        candidate.value = response.data
      }
      else {
        error({ statusCode: response.status, message:'Не удалось загрузить данные кандидата, попробуйте позже' })
      }
    } catch (e) {
      console.error(e)
      error({ statusCode: e?.response?.status, message:'Не удалось загрузить данные кандидата, попробуйте позже' })
    }
  })

  return {
    candidate,
    fetchCandidate
  }
}
