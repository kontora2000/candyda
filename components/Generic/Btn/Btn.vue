<template>
   <button><slot /></button>
</template>
<script>
import { defineComponent, } from '@nuxtjs/composition-api'

export default defineComponent({
   name:'Btn',
})
</script>
<style scoped>
button {
  max-height: 6.4rem;
}
</style>
