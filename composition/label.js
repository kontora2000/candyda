import { ref, computed, useRouter, } from '@nuxtjs/composition-api'

export const useLabel = (props, $device) => {
  const top = ref(($device.isMobile && props.mobileTop) ?  props.mobileTop : props.top )
  const left = ref(($device.isMobile && props.mobileLeft) ?  props.mobileLeft : props.left )

  const computedPosition = computed(() => { 
    return {
      top: top.value + 'px',
      left: left.value + 'px',
  }})

  let isPosCalculated  = false 
  const calcLabelPos = (isRegion = false) => {
    if (isPosCalculated) return
    const $el = document.querySelector(`#${isRegion ? 'o-': ''}${props.slug}`)
    if ($el) {
      const { x, y, width:w, height:h } = $el.getBoundingClientRect()
      const { x:mapX, y: mapY, } = document.querySelector('.map-svg').getBoundingClientRect()
      const emblemW = document.querySelector(`#${isRegion ? 'o-': ''}label-${props.slug}`).getBoundingClientRect().width
      const centerX = x + w /2 - mapX - emblemW/2 + props.left
      const centerY = y + h/2 - 44 -  mapY + props.top
      top.value = centerY
      left.value = centerX
      isPosCalculated = true
     }
  }

  const isVisible  = ref(false)
  const router = useRouter()
  const onDesClick = () => {
    if (isVisible.value)
      router.push(`o-${props.region}/${props.slug}`)
  }

  const onRegClick = () => {
    if (isVisible.value)
      router.push(`/region/o-${props.slug}`)
  }
  return {
    computedPosition,
    isVisible,
    calcLabelPos,
    onDesClick,
    onRegClick,
  }
}