<template>
  <transition name="fade-fast" appear>
    <div class="overlay blur" v-show="isSearchOpen"/>
  </transition>
</template>
<script lang="ts">
import { defineComponent, } from '@nuxtjs/composition-api'
import { useSearch, } from '~/composition/search'

export default defineComponent({
    name:'SearchOverlay',
    setup() {
        const { isSearchOpen, } = useSearch()
        return {
            isSearchOpen,
        }
    },
})
</script>

<style scoped></style>