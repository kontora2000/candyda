import { ref, } from '@nuxtjs/composition-api'
import { Distritct, LocationFilter, Region, } from '@/modules/types'
import { useAxios, } from './axios'

const locationFilter = ref<LocationFilter>({
  district: null,
  region: null,
})

export const useLocationFilter = () => {
   const getFilter = () => locationFilter.value 
   const setFilter = (filter: LocationFilter) => { locationFilter.value = filter }
   const filterRegions = ref<Region[]>([] as Region[])
   const filterDistricts = ref<Distritct[]>([] as Distritct[])
   const { $axios, } = useAxios()
   const fetchRegions = async () => {
    try {
      const response = await $axios.get('/region/list/1')
      if (response.status === 200) {
        filterRegions.value = response.data
      }
      else {
        console.error('Error due loading regions data in filter')
      }
    }
    catch(e) {
      console.error(e)
    }
   }

   const fetchDistricts = async (regionSlug: string) => {
    try {
      const response = await $axios.get('/district/byregion/' + regionSlug)
      if (response.status === 200) {
        filterDistricts.value = response.data
      }
      else {
        console.error('Error due loading districts data in filter')
      }
    }
    catch(e) {
      console.error(e)
    }
   }

   const resetFilter = () => {
     locationFilter.value = {
       region: '',
       district: '',
     }
   }
   
   
   return {
    locationFilter,
    filterDistricts,
    filterRegions,
    getFilter,
    setFilter,
    resetFilter,
    fetchRegions,
    fetchDistricts,
   }
}