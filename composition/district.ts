import { ref, useContext, useFetch } from '@nuxtjs/composition-api'
import { useAxios } from './axios'
import { Distritct,  } from '@/modules/types'


export const useDistrict = () => {
  const { $axios, error, } = useAxios()
  const { route,  } = useContext()
  const slug = route.value.params.slug
  const distritct = ref<Distritct>({} as Distritct)
  
  const { fetch: fetchDistrict, } =  useFetch( async()=>{
    try {
      const response= await $axios.get('/distritct/' + slug)
      if (response.status === 200) {
        distritct.value = response.data
        if (!distritct.value.slug) error({ statusCode:404, message:'Страница не найдена' })
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
    distritct,
    fetchDistrict,
  }
} 