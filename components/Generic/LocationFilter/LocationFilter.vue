<template>
    <div class="page-content-filter-wrapper">
      <location-filter-select 
        :options="filterRegions"
        @input="onDistrictChange"
       />
      <location-filter-select  
        :options="filterDistricts" 
        v-if="curRegion"
      />
    </div>
</template>

<script>
import { defineComponent, ref, } from '@nuxtjs/composition-api'
import { useLocationFilter, } from '@/composition/filter'

import LocationFilterSelect from './LocationFilterSelect.vue'

export default defineComponent({
    name:'TheAside',
    components: { 
        LocationFilterSelect, 
    },
    setup () {
        const { 
            locationFilter, 
            fetchRegions, 
            fetchDistricts, 
            filterDistricts,
            filterRegions,
        } = useLocationFilter()

        const curRegion = ref()
        const curDistrict = ref()

        const onRegionChange = (region) => {
            if (region.value.slug !== curRegion.value.slug) {
                filterDistricts.value = []
                curDistrict.value = []
            }
        }

        const onDistrictChange = (district) => {
            if (district.value.slug !== curDistrict.value.slug) {
                curDistrict.value = district
                locationFilter.value.district = district.value.slug
            }
        }

        return {
            filterDistricts,
            filterRegions,
            curRegion,
            curDistrict,
            onRegionChange,
            onDistrictChange,
        }
    },
})
</script>