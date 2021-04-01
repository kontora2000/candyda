<template>
  <nuxt-link :to="`/party/${party.slug}`" class="party-card-cont">
      <div class="party-card-pic-wrapper" >
        <img 
          v-if="party.logo" 
          class="party-card-pic" :src="`https://api.prostokontora.ru/storage/${party.logo}`" />
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
    padding: 2rem 2rem;
    padding-left: 1.2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 12.4rem;
    border-radius: 1.2rem;
    background-color: var(--Azure32);
    margin-bottom: 2rem;
  }

  .party-card-pic-wrapper {
    align-self: flex-start;
    max-width: 8.2rem;
    max-height: 8.2rem;
    flex:0.3;
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