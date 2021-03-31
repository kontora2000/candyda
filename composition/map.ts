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
            duration: 0.2,  
            attr: { viewBox, }, 
            ease: 'none', 
            onComplete: () => { isAnimating.value = false },
        })
    } 
  }

  const resetViewBox = () => {
    const adyg: HTMLElement | null = document.querySelector('#o-adygeya')
    if (adyg) {
      adyg.style.display = 'none'
    }
    const titles = document.querySelectorAll('.o-title-cont')
    const regs = document.querySelectorAll('.o-cont')
    gsap.to(titles, {duration:0.2, autoAlpha: 1, })
    gsap.to(regs, {duration:0.2, autoAlpha: 1, })
    animateViewBox('0 0 1228.16 648.03')               
  }

  return {
      isAnimating,
      animateViewBox,
      resetViewBox,
      mapSvg,

  }
}