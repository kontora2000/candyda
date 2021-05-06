<template>
    <div class="page-content-filter-wrapper">
      <div class="page-content-filter-header">Фильтр:</div>
      <LocationFilterSelect
        :options="filterRegions"
        :default="{ name: 'Округ', slug:'',   }"
        :current="curRegion"
        @input="onRegionChange"
        @clear="onRegionChange({ name: 'Округ', slug:'',   })"
       />
      <LocationFilterSelect
        v-if="curRegion.slug && filterDistricts.length > 0"
        :options="filterDistricts" 
        :current="curDistrict"
        :default="{ name: 'Город / район', slug: '',   }"
        @clear="onDistrictChange({ name: 'Город / район', slug:'',   })"
        @input="onDistrictChange" 
      />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, } from '@nuxtjs/composition-api'
import { useLocationFilter, } from '@/composition/filter'

import LocationFilterSelect from './LocationFilterSelect.vue'
import { Distritct, Region, } from '@/modules/types'

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

        const curRegion = ref<Region>({} as Region)
        const curDistrict = ref<Distritct>({} as Distritct)
        fetchRegions()
        const onRegionChange = async (region: Region) => {
            if (region.slug === '') {
              locationFilter.value = {
                region: '',
                district: '',
              }
              curRegion.value = region
              filterDistricts.value = []
              return
            }
            if (region.slug !== curRegion.value.slug) {
                filterDistricts.value = []
                curDistrict.value = { id: 0, name: 'Город / район', slug: '',   }
                locationFilter.value = {
                    district: '',
                    region: region.slug,
                }
                curRegion.value = region
                fetchDistricts(region.slug)
            }
        }
        const onDistrictChange = (district: Distritct) => {
            if (district.slug !== curDistrict.value.slug) {
                curDistrict.value = district
                locationFilter.value.district = district.slug
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



<style scoped>
.page-content-filter-wrapper {
    position: relative;
    top: 10rem;
}


@media (max-width: 460px) {
    .page-content-filter-wrapper {
        top: 0;
    }
}
</style>