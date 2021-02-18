import { ref, useContext, useFetch } from '@nuxtjs/composition-api'
import { useAxios } from './axios'
import { Region,  } from '@/modules/types'


export const useRegion = () => {
  const { $axios, error, } = useAxios()
  const { route,  } = useContext()
  const slug = route.value.params.slug
  const region = ref<Region>({} as Region)

  const { fetch: fetchRegion, } =  useFetch( async()=>{
    try {
      const response= await $axios.get('/region/' + slug)
      if (response.status === 200) {
        region.value = response.data
        if (!region.value.slug) error({ statusCode:404, message:'Такого округа не существует' })
      }
      else {
        error({ statusCode:404, message:'Такого округа не существует' })
      }
    }
    catch(error) {
      console.error(error)
      error({ statusCode:404, message:'Такого округа не существует' })
    }
  })
  
  return {
    region,
    fetchRegion,
  }
} 