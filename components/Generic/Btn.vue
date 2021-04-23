<template>
   <button v-if="!loading"
           :disabled="loading || disabled"
           @click="$emit('click', $event)"
           @tap="$emit('click')"
   >
       <slot />
   </button>
    <div v-else>
        <LoadingIndicator />
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType, } from '@nuxtjs/composition-api'
import LoadingIndicator from "~/components/Generic/LoadingIndicator.vue";

export default defineComponent({
    name:'Btn',
    components: {LoadingIndicator, },
    props: {
        disabled: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
        loading: {
            type: Boolean as PropType<boolean>,
            default: false,
        }
    }
})
</script>
<style scoped>
button {
  max-height: 6.4rem;
}
</style>
