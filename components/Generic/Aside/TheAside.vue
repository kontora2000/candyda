<template>

</template>
<script>
<<<<<<< HEAD
import { defineComponent, } from '@nuxtjs/composition-api'

export default defineComponent({
    name:'TheAside',
=======
import { defineComponent,  } from '@nuxtjs/composition-api'
import LocationFilter from '@/components/Generic/LocationFilter/LocationFilter.vue'

export default defineComponent({
    name:'TheAside',
    components: { 
        LocationFilter, 
    },
>>>>>>> dc4f8bb5... feat/filter
})
</script>
