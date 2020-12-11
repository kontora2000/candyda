<template>
    <div class="bg-circles-wrapper">
        <canvas class="bg-circles-canvas" id="bg-circles"></canvas>
    </div>
</template>



<script>
import { defineComponent, } from '@nuxtjs/composition-api'

export default defineComponent({
   name:'BgCircles',
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
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
    }
</style>