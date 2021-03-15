<template>
    <div class="bg-circles-wrapper">
        <div class="bg-circles bg-circles-left">
          <div class="bg-circle" :style="leftCircleStyle" />
        </div>
        <div class="bg-circles bg-circles-right">
          <div class="bg-circle" :style="rightCircleStyle" />
        </div>
    </div>
</template>



<script>
import { defineComponent, useContext, ref, watch,  } from '@nuxtjs/composition-api'
import { useHelpers } from '~/composition/helpers'


export default defineComponent({
    name:'BgCircles',
    setup () {
        let percent = Math.random() > 0.5

        const {randomInRange: rand, } = useHelpers()

        const leftCircleStyle = ref({
            backgroundColor:  percent ? 'var(--Red100)' : 'var(--Azure100)',
            left: '100px',
            top: rand(20,80) + '%',
            minWidth: '300px',
            minHeight:'300px',
            display: 'block',
        })

        const rightCircleStyle = ref({
            backgroundColor:  !percent ? 'var(--Red100)' : 'var(--Azure100)',
            left: '100px',
            top: rand(20,80) + '%',
            width: '20%',
            height:'25%',
            
            display: 'block',
        })

        const reCalcStyle = () => {
            rightCircleStyle.value.top = 80 * Math.random() + '%'
        }

        const { route, } = useContext()

        watch(route, () => {
            reCalcStyle()
        })

        return {
            leftCircleStyle,
            rightCircleStyle,
        }
    },
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

.bg-circles {
  width: 30%;
  min-width: 20vw;
  height: 100%;
  min-height: 100vh;
}

.bg-circles-right {
  width: 30%;
  min-width: 20vw;
  height: 100%;
  min-height: 100vh;
  left:70%;
  top:0px;
  position: absolute;
}

.bg-circle {
  position: relative;
  filter: blur(32px);
  border-radius: 50%;
  display: none;
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