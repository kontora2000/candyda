import { ref, useContext, useFetch } from '@nuxtjs/composition-api'
import { useAxios, } from './axios'
import { Distritct,  } from '@/modules/types'

export const useDistrict = () => {
  const { $axios, error, } = useAxios()
  const { route,  } = useContext()
  const slug = route.value.params.district
  const district = ref<Distritct>({} as Distritct)
  const { fetch: fetchDistrict, } =  useFetch( async()=>{
    try {
      const response= await $axios.get('/district/' + slug)
      if (response.status === 200) {
        district.value = response.data
        if (!district.value.slug) error({ statusCode:404, message:'Страница не найдена' })
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

  const fetchDistrictBySlug = async(slug:string) => {
    try {
      const response = await $axios.get('/district/' + slug)
      if (response.status === 200) {
        district.value = response.data
        if (!district.value.slug) error({ statusCode:404, message:'Страница не найдена' })
      }
      else {
        error({ statusCode:404, message:'Страница не найдена' })
      }
    }
    catch(error) {
      console.error(error)
      // error({ statusCode:404, message:'Страница не найдена' })
    }
  }
  
  return {
    district,
    fetchDistrict,
    fetchDistrictBySlug,
  }
} 