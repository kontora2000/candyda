import { ref, } from '@nuxtjs/composition-api'
import { gsap, } from 'gsap'
import { Distritct } from '~/modules/types'

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

  const resetViewBox = () => {
    const adyg: HTMLElement | null = document.querySelector('#o-adygeya')
    if (adyg) {
      gsap.set(adyg, { autoAlpha: 1, })
    }
    isRegionOpened.value = false
    const titles = document.querySelectorAll('.o-title-cont')
    const regs = document.querySelectorAll('.o-cont')
    const cityTitles =  document.querySelectorAll('.o-city-title-cont')
    gsap.to(titles, {duration:0.2, autoAlpha: 1, })
    gsap.set(cityTitles, { display: 'none', })

    gsap.to(cityTitles, {duration:0.2, autoAlpha: 0, })
    gsap.to(regs, {duration:0.2, autoAlpha: 1, })
    animateViewBox('0 0 1228.16 648.03')               
  }

  const zoomTo = (slug) => {
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
      const cityTitles =    document.querySelectorAll('.o-city-title-cont')
      const regs = document.querySelectorAll(`.o-cont:not(#${slug})`)
      gsap.to(titles, {duration:0.2, autoAlpha: 0, })
      // gsap.to(cityTitles, {duration:0.2, autoAlpha: 0, })
      // gsap.set(cityTitles, { display: 'none', })
      gsap.to(regs, {duration:0.2, autoAlpha: 0, })
      const adyg: HTMLElement | null = document.querySelector('#o-adygeya')
      if (adyg) {
        gsap.to(adyg, { duration: 0.2, autoAlpha: 0, })
      }  
      gsap.set(`#${slug}`, { display: '', })
      gsap.set(`#${slug}`, { autoAlpha: 1, })
      const insideCityTitles = document.querySelectorAll(`#${slug} .o-city-title-cont`)
      if (insideCityTitles.length > 0) {
        gsap.set(insideCityTitles, { display: 'block', })
        gsap.to(insideCityTitles, { delay:0.1, duration: 0.2, autoAlpha: 1, opacity:1, onComplete() {
          isRegionOpened.value = true
        } }, )
      }
      switch (slug) {
        case 'o-krasnodarskiy':
          animateViewBox(`${box.x - 25} ${box.y + 25} 185 20`)
          break;
        case 'o-krasnoarmeyskiy':
          animateViewBox(`${box.x - 90} ${box.y} 380 120`)
          break;
        case 'o-armavirskiy':
          animateViewBox(`${box.x - 90} ${box.y - 80} ${box.width + 50} ${box.height - 50}`)
        case 'o-sochinskiy': 
          animateViewBox(`${box.x} ${box.y - 50} ${box.width} ${box.height + 50}`)
        default:       
          animateViewBox(`${box.x} ${box.y} ${box.width} ${box.height}`)
          break;
      }
    }
  }
  const setTo = (slug) => {
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
      // const insideCityTitles = document.querySelectorAll(`#${slug} .o-city-title-cont`)
      // if (insideCityTitles.length > 0) {
      //   gsap.set(insideCityTitles, { display: 'block', })
      //   gsap.to(insideCityTitles, { duration: 0.2, autoAlpha: 1, opacity:1,  })
      // }
      switch (slug) {
        case 'o-krasnodarskiy':
          animateViewBox(`${box.x - 90} ${box.y + 25} 320 20`, true)
          break;
        case 'o-krasnoarmeyskiy':
          animateViewBox(`${box.x - 90} ${box.y} 380 120`, true)
          break;
        case 'o-armavirskiy':
          animateViewBox(`${box.x - 90} ${box.y - 80} ${box.width + 50} ${box.height - 50}`, true)
        case 'o-sochinskiy': 
          animateViewBox(`${box.x} ${box.y - 50} ${box.width} ${box.height + 50}`, true)
        default:       
          animateViewBox(`${box.x} ${box.y} ${box.width} ${box.height}`, true)
          break;
      }
      isRegionOpened.value = true
    }
  }

  const initiCityLabels = () => {
    const anapa = document.querySelector('.map-label-area-anapa')  as HTMLElement
    debugger
    if (anapa) {
    let top = 0, left = 0
      top = parseInt(window.getComputedStyle(anapa).top.replace('px', ''), 10)
      left = parseInt(anapa.style.left.replace('px', ''), 10)
    if (screen.height !== 800) 
      anapa.style.top = (((screen.height / 800) * top) - anapa.offsetHeight ) + 'px'
    // anapa.style.left = (mapSvg.value.getBBox().width / 1228) * left + 'px'
    anapa.style.display = 'flex'
    }
  }
  

  return {
      mapSvg,
      isAnimating,
      isRegionOpened,
      animateViewBox,
      resetViewBox,
      zoomTo,
      setTo,
      initiCityLabels,
  }
}