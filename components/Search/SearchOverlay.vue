<template>
  <transition name="fade-fast" appear>
    <div class="overlay blur" :class="{ 'firefox-opacity': isFirefox, }" v-show="isSearchOpen"/>
        {{ $device }}
  </transition>
</template>
<script>
import { defineComponent, onMounted, ref, } from '@nuxtjs/composition-api'
import { useSearch, } from '~/composition/search'

export default defineComponent({
    name:'SearchOverlay',
    setup() {
        const { isSearchOpen, } = useSearch()
        const  isFirefox = ref(false)
        onMounted (() => {
            if (process.client){
                isFirefox.value = window.navigator.userAgent.includes('Firefox')
            }
        })
        return {
            isSearchOpen,
            isFirefox,
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
    transition: all .25s ease-in-out;
  }

  .blur {
    backdrop-filter: blur(16px);
  }

  .firefox-opacity {
    opacity: 0.97;
    background-color:var(--White100);
    transition: all .25s ease-in-out;
  }
</style>
