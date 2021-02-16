import { ref, useContext, useFetch,  } from '@nuxtjs/composition-api'
import { useAxios, } from './axios'
import { Party,  } from '@/modules/types'


export const useParty = () => {
  const { $axios, error} = useAxios()

  const { route, } = useContext()
  const slug = route.value.params.slug

  const party = ref<Party>({} as Party)

  const { fetch: fetchParty, fetchState } = useFetch( async () => {
      try {
        const response = await $axios.get('/parties/' + slug)
        if (response.status === 200) {
          party.value = response.data
          if (!party.value.slug) error({ statusCode:404, message:'Страница не найдена' })
        }
        else {
          error({ statusCode:404, message:'Страница не найдена' })
        }
      }
      catch(error) {
        console.error(error)
        error({ statusCode:404, message:'Страница не найдена' })
      }
  })

  return {
    party,
    fetchParty,
  }
}
