import { ref, } from '@nuxtjs/composition-api'
import { LocationFilter, } from '@/modules/types'

const locationFilter = ref<LocationFilter>({
  district: null,
  region: null,
})

export const useLocationFilter = () => {
   const getFilter = () => locationFilter.value 
   const setFilter = (filter: LocationFilter) => { locationFilter.value = filter }

   return {
    locationFilter,
    getFilter,
    setFilter,
   }
}