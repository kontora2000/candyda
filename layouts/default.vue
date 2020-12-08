<template>
  <div>
    <TheFooter />
    <nuxt />
    <TheHeader />
  </div>
</template>


<script lang="ts">
import TheHeader from '@/components/Generic/Header/TheHeader.vue'
import TheFooter from '@/components/Generic/Footer/TheFooter.vue'

import { defineComponent, } from '@nuxtjs/composition-api'

export default defineComponent({
    components: {
      TheHeader,
      TheFooter,
    }
})
</script>
