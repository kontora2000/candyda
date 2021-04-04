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
import { defineComponent, useContext, ref, watch, onMounted,  } from '@nuxtjs/composition-api'
import { useHelpers, } from '~/composition/helpers'


export default defineComponent({
    name:'BgCircles',
    setup () {
        const leftCircleStyle = ref({})

        const rightCircleStyle = ref({})

        const {randomInRange: rand, } = useHelpers()
     
        const calcStyle = () => {
            const isLeftRed = Math.random() > 0.5
            const isLeftBigger = (Math.random() > 0.5) ? -1 : 1
            const w = rand(20 ,40)
            const w2 = isLeftBigger ? w - 10 : w + 10
            leftCircleStyle.value = {
                backgroundColor:  isLeftRed ? 'var(--Red100)' : 'var(--Azure100)',
                left: '-' + w/2 + 'vw',
                top: rand(20,60) + '%',
                width: w + 'vw' ,
                height: w + 'vw' ,
                display: 'block',
            }


            rightCircleStyle.value = {
                backgroundColor:  !isLeftRed ? 'var(--Red100)' : 'var(--Azure100)',
                left: `calc(100% - ${w2/2}vw)`,
                top: rand(20,60) + '%',
                width: w2 + 'vw',
                height: w2 + 'vw',
                display: 'block',
            }

        }

        const { route, } = useContext()
        watch(route, () => {
            calcStyle()
            document.body.style.overflowY = ''
            document.body.style.position = ''
            document.querySelector('html').style.overflow = ''
        })

        onMounted(()=> calcStyle())

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
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}

/*.bg-circles-canvas {
    filter: blur(56px);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
}*/

.bg-circles {
  width: 30%;
  min-width: 20vw;
  height: 100%;
  min-height: 100vh;
}

.bg-circle {
  position: relative;
  filter: blur(56px);
  border-radius: 50%;
  display: none;
  opacity: .84;
  transition: all .45s ease-in-out;
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