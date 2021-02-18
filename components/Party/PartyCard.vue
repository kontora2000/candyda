<template>
  <nuxt-link :to="`/party/${party.slug}`" class="party-card-cont">
    <div class="party-card-cont-inner">
      <div class="party-card-pic-wrapper" v-if="party.cover">
        <img class="party-card-pic" :src="`${baseURL}/storage/${party.cover}`" />
      </div>
      <div class="party-card-content-wrapper">
        <div class="news-card-header">{{ party.name }}</div>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { defineComponent, PropType, } from '@nuxtjs/composition-api'
import { Party,} from '@/modules/types.ts'


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