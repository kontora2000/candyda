<template>
  <transition name="fade-fast" appear>
    <div class="overlay blur" v-show="isSearchOpen"/>
  </transition>
</template>
<script lang="ts">
import { defineComponent, ref, } from '@nuxtjs/composition-api'
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

<style scoped>
  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    z-index: 99;
    top: 0px;
    left: 0px;
  }

  .blur {
    backdrop-filter: blur(16px);
  }

  .firefox-opacity {
    opacity: 0.5;
    background-color:var(--WHite100);
  }
</style>
