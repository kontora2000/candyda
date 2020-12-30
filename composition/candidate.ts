import {ref, computed, useFetch, useContext,} from '@nuxtjs/composition-api'
import { Candidate, } from '@/modules/types.ts'
import { useAxios, } from './axios'
import moment from 'moment'

export const useCandidate = () => {
  const { route, } = useContext()
  const slug = route.value.params.slug
  const { $axios, error } = useAxios()
  const candidate=ref<Candidate>({} as Candidate)
  const { fetch: fetchCandidate, fetchState } = useFetch(async () => {
    try {
      const response = await $axios.get('/candidates/' + slug)
      if (response.status === 200) {
        candidate.value = response.data
        if (!candidate.value.slug) error({ statusCode:404, message:'Страниц не найдена' })
        moment.locale('ru')
        candidate.value.birthdate = moment(candidate.value.birthdate).format('D MMMM YYYY')
      }
      else {
        error({ statusCode: response.status, message:'Не удалось загрузить данные кандидата, попробуйте позже' })
      }
    } catch (e) {
      console.error(e)
      error({ statusCode:404, message:'Страниц не найдена' })
    }
  })
  fetchCandidate()
  return {
    candidate,
    fetchCandidate
  }
}
