<template>
  <div class="history-wrapper">
    <!-- <div v-for="candidate in history.candidates" :key="candidate.id">
      <div class="history-candidate">
        <img v-if="candidate.ava" :src="candidate.ava">
        <span>{{ candidate.fullName }} </span>
         <span>{{ candidate.percent }}</span>
      </div>
    </div> -->
    {{ history }}
  </div>
</template>
<script>
import { defineComponent, } from '@nuxtjs/composition-api'

export default defineComponent({
    name: 'DistrictHistory',
    props: {
        history: {
            type: String,
            required: true,
            default: null,
        },
    },
})
</script>
