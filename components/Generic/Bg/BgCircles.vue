<template>
    <div class="bg-circles-wrapper">
        <canvas class="bg-circles-canvas" id="bg-circles"></canvas>
    </div>
</template>



<script>
import { defineComponent, onMounted, } from '@nuxtjs/composition-api'

import {  initAnimation, } from '@/modules/circles.js'

export default defineComponent({
   name:'BgCircles',
   setup () {
     onMounted(() => {
       if (process.client) {
         initAnimation()
       }
     })
   }
})
</script>


<style scoped>
.bg-circles-wrapper {
    width: calc(100vw + 1.6rem);
    margin-left: -.8rem;
    height: 100vh;
    position: fixed;
    z-index: -1;
}

.bg-circles-canvas {
    filter: blur(32px);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
}

@media (min-width: 1460px) {
  .bg-circles-wrapper {
    margin-left: 0;
    left: 0;
    width: 100vw;
  }
}


@media (max-width: 460px) {
  .bg-circles-wrapper {
    width: calc(100vw + 2.4rem);
    margin-left: -1.2rem;
  }
}
</style>