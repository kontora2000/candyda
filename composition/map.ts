import { ref, } from '@nuxtjs/composition-api'
import { gsap, } from 'gsap'
import { regionZoom, regionMobileZoom, } from '@/modules/zoom'

const mapSvg = ref<SVGAElement>({} as SVGAElement)
// type Viewbox = `${number} ${number} ${number} ${number}`
export const useMap = () => {
  const isAnimating = ref(false)
  const isRegionOpened = ref(false)
  const animateViewBox = (viewBox: string, isInstant = false) => {
    if (isInstant) {
      mapSvg.value.setAttribute('viewBox', viewBox) 
      return
    } 
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

  const zoomTo = (slug, isMobile = false) => {
    isRegionOpened.value = false
    const el: SVGAElement | null = document.querySelector(`#${slug}`)
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
      const cityTitles =    document.querySelectorAll('.o-city-title-cont')
      const regs = document.querySelectorAll(`.o-cont:not(#${slug})`)
      gsap.to(regs, {duration:0.2, autoAlpha: 0, })
      const adyg: HTMLElement | null = document.querySelector('#o-adygeya')
      if (adyg) {
        gsap.to(adyg, { duration: 0.2, autoAlpha: 0, })
      }  
      gsap.set(`#${slug}`, { display: '', })
      gsap.set(`#${slug}`, { autoAlpha: 1, })
      const insideCityTitles = document.querySelectorAll(`#${slug} .o-city`)
      if (insideCityTitles.length > 0) {
        gsap.to(insideCityTitles, { delay:0.1, duration: 0.2, autoAlpha: 1, opacity:1, onComplete() {
          isRegionOpened.value = true
          insideCityTitles.forEach(el => el.classList.add('o-city-opened'))
        } }, )
      }
      if (!isMobile) {
         animateViewBox(regionZoom[slug])
      }
      else {
         animateViewBox(regionMobileZoom[slug])
      }
    }
  }
  const setTo = (slug, isMobile = false) => {
    isRegionOpened.value = false
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
      // const cityTitles =  document.querySelectorAll('.o-city-title-cont')
      gsap.set(titles, { autoAlpha: 0, })
      // gsap.set(cityTitles, { autoAlpha: 0, })
      // gsap.set(cityTitles, { display: 'none', })
      gsap.set(regs, { autoAlpha: 0, })
      const adyg: HTMLElement | null = document.querySelector('#o-adygeya')
      if (adyg) {
        gsap.set(adyg, { autoAlpha: 0, })
      }  
      gsap.set(`#${slug}`, { display: '', })
      gsap.set(`#${slug}`, { autoAlpha: 1, })
      const insideCityTitles = document.querySelectorAll(`#${slug} .o-city`)
      if (insideCityTitles.length > 0) {
         insideCityTitles.forEach(el => el.classList.add('o-city-opened'))
      }
      if (!isMobile) {
         animateViewBox(regionZoom[slug])
      }
      else {
        animateViewBox(regionMobileZoom[slug])
      }
      isRegionOpened.value = true
    }
  }

  const resetViewBox = (isMobile = false) => {
    const adyg: HTMLElement | null = document.querySelector('#o-adygeya')
    if (adyg) {
      gsap.set(adyg, { autoAlpha: 1, })
    }
    isRegionOpened.value = false
    const regs = document.querySelectorAll('.o-cont')
    gsap.to(regs, {duration:0.2, autoAlpha: 1, })
    const insideCityTitles = document.querySelectorAll('.o-city')
    if (insideCityTitles.length > 0) {
       insideCityTitles.forEach(el => el.classList.remove('o-city-opened'))
    }
    if (!isMobile) 
      animateViewBox(regionZoom['default'])         
    else 
    animateViewBox(regionMobileZoom['default'])         
  }

  return {
      mapSvg,
      isAnimating,
      isRegionOpened,
      animateViewBox,
      resetViewBox,
      zoomTo,
      setTo,
  }
}