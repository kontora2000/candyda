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
            onComplete: () => { 
              isAnimating.value = false
               
            },
        })
    } 
  }

  const resetViewBox = () => {
    const adyg: HTMLElement | null = document.querySelector('#o-adygeya')
    if (adyg) {
      gsap.set(adyg, { autoAlpha: 1, })
    }
    const titles = document.querySelectorAll('.o-title-cont')
    const regs = document.querySelectorAll('.o-cont')
    gsap.to(titles, {duration:0.2, autoAlpha: 1, })
    gsap.to(regs, {duration:0.2, autoAlpha: 1, })
    animateViewBox('0 0 1228.16 648.03')               
  }

  const zoomTo = (slug) => {
    const el: SVGAElement | null = document.querySelector('#' + slug)
    let box: DOMRect | null = null
    if (el) {
        box = el.getBBox()
        const parent = el.parentNode as HTMLElement
        if (parent) {
          parent.classList.remove('link-to-o')
        }
    }
    if (box) {
      const titles = document.querySelectorAll('.o-title-cont')
      const regs = document.querySelectorAll(`.o-cont:not(#${slug})`)
      gsap.to(titles, {duration:0.2, autoAlpha: 0, })
      gsap.to(regs, {duration:0.2, autoAlpha: 0, })
      const adyg: HTMLElement | null = document.querySelector('#o-adygeya')
      if (adyg) {
        gsap.to(adyg, { duration: 0.2, autoAlpha: 0, })
      }  
      gsap.set(`#${slug}`, { display: '', })
      gsap.set(`#${slug}`, { autoAlpha: 1, })
      animateViewBox(`${box.x} ${box.y} ${box.width} ${box.height}`)
    }
  }

  const setTo = (slug) => {
    const el: SVGAElement | null = document.querySelector('#' + slug)
    let box: DOMRect | null = null
    if (el) {
        box = el.getBBox()
        const parent = el.parentNode as HTMLElement
        if (parent) {
          parent.classList.remove('link-to-o')
        }
    }
    if (box) {
      const titles = document.querySelectorAll('.o-title-cont')
      const regs = document.querySelectorAll(`.o-cont:not(#${slug})`)
      gsap.set(titles, { autoAlpha: 0, })
      gsap.set(regs, { autoAlpha: 0, })
      const adyg: HTMLElement | null = document.querySelector('#o-adygeya')
      if (adyg) {
        gsap.set(adyg, { autoAlpha: 0, })
      }  
      gsap.set(`#${slug}`, { display: '', })
      gsap.set(`#${slug}`, { autoAlpha: 1, })
      mapSvg.value.setAttribute('viewBox', `${box.x} ${box.y} ${box.width} ${box.height}`)
    }
  }

  return {
      isAnimating,
      animateViewBox,
      resetViewBox,
      zoomTo,
      setTo,
      mapSvg,

  }
}