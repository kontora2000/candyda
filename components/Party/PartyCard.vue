<template>
  <nuxt-link :to="`/party/${party.slug}`" class="party-card-cont card-cont">
      <div class="party-card-pic-wrapper" >
        <img 
          v-if="party.logo" 
          class="party-card-pic" :src="`https://api.duma.one/storage/${party.logo}`" />
      </div>
      <div class="party-card-content-wrapper">
        <div class="party-card-header">{{ party.name }}</div>
      </div>
  </nuxt-link>
</template>



<script lang="ts">
import { defineComponent, PropType, } from '@nuxtjs/composition-api'

import { Party, } from '@/modules/types'

export default defineComponent({
    name:'PartyCard',
    props: {
      party: {
        type: Object as PropType<Party>,
        required: true,
      }
    },
    setup() {
       const baseURL = process.env.commonURL
       return {
         baseURL,
       }
    }
})
</script>



<style scoped>
  .party-card-cont {
    padding: 1.6rem .8rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 12.4rem;
    margin-bottom: 1.6rem;
  }

  .party-card-pic-wrapper {
    align-self: flex-start;
    height: 9.2rem;
    width: 9.2rem;
  }
  .party-card-pic {
    object-fit: cover;
    max-height: 100%;
    max-width: 100%;
  }

  .party-card-content-wrapper {
    vertical-align: center;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1.6rem;
  }

</style>