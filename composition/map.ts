import { ref, } from '@nuxtjs/composition-api'
import { gsap, } from 'gsap'

const mapSvg = ref<SVGAElement>({} as SVGAElement)

// type Viewbox = `${number} ${number} ${number} ${number}`

export const useMap = () => {
  const isAnimating = ref(false)

  const animateViewBox = (viewBox: string) => {
    if (!isAnimating.value) {
        isAnimating.value = true
        gsap.to(mapSvg.value, {
            duration: 0.3,  
            attr: { viewBox, }, 
            ease: 'none', 
            onComplete: () => { isAnimating.value = false },
        })
    } 
  }

  const resetViewBox = () => {
    animateViewBox('0 0 1228.16 648.03')               
  }

  return {
      isAnimating,
      animateViewBox,
      resetViewBox,
      mapSvg,

  }
}