import { ref, computed, useFetch, useContext, } from '@nuxtjs/composition-api'
import moment from 'moment'
import { Candidate, } from '@/modules/types.ts'

import { useAxios, } from '@/composition/axios'
import { useVotes, } from '@/composition/votes'

export const useCandidate = () => {
  const { route, } = useContext()
  const slug = route.value.params.slug
  const { $axios, error } = useAxios()
  const candidate=ref<Candidate>({} as Candidate)
  const { onVote, isVoted, localVotes, localNum, } = useVotes(slug)
  const gallery = ref([])
  const momentDate = ref<moment.Moment>( moment())

  const { fetch: fetchCandidate, fetchState } = useFetch(async () => {
    try {
      const response = await $axios.get('/candidates/' + slug)
      if (response.status === 200) {
        candidate.value = response.data
        if (!candidate.value.slug) error({ statusCode:404, message:'Страниц не найдена' })
        moment.locale('ru')
        momentDate.value = moment(candidate.value.birthdate)
        candidate.value.birthdate = momentDate.value.format('D MMMM YYYY')
        localVotes.value = candidate.value.votes
        localNum.value = candidate.value.num
        gallery.value = JSON.parse(candidate.value.gallery)
      }
      else {
        error({ statusCode: response.status, message:'Не удалось загрузить данные кандидата, попробуйте позже' })
      }
    } catch (e) {
      error({ statusCode:404, message:'Страниц не найдена' })
    }
  })

  fetchCandidate()
  
  const fullName = computed(() => (candidate.value?.surname || '') + ' '
      + (candidate.value?.name || '') + ' '
      + (candidate.value?.patronymic || ''))

  const age = computed(()=> {
    if (momentDate.value!== {} as moment.Moment) {
      return  momentDate.value.diff(moment.now(), 'years');
    }
    else  return null
  })

  return {
    candidate,
    localVotes,
    localNum,
    isVoted,
    fullName,
    gallery,
    age,
    fetchCandidate,
    onVote,
  }
}
