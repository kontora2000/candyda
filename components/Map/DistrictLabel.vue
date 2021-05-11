<template>
  <transition name="fade025">
    <div class="map-label-area" 
      :style="computedPosition"
      v-show="isVisible" 
      @click="onDesClick" 
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave">
      <div class="map-label-area-emblem" v-if="district && district.logo && district.logo!==''">
          <img :src="storageURL + district.logo" :alt="slug">
        </div>
        <div class="map-label-area-title">
          <slot />
        </div>
    </div>
  </transition>
</template>

<script>
import { defineComponent, PropType, ref, computed, onMounted, watch, useContext, useRouter, } from '@nuxtjs/composition-api'
import { useRegion, } from '@/composition/region'
import { Distritct, } from '@/modules/types'

export default defineComponent({
  name: 'MapLabel',
  props: {
    slug: {
      type: String,
      require: true
    },
    region: {
      type: String,
      require: true,
      default: '',
    },
    top: {
      type: Number,
      required: true,
    },
    left: {
      type: Number,
      required: true,
    },
    mobileTop: {
      type: Number,
      required: false,
      default: 0,
    },
    mobileLeft: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  setup(props) {
    const { $device, } = useContext()
    const top = ref(($device.isMobile && props.mobileTop) ?  props.mobileTop : props.top )
    const left = ref(($device.isMobile && props.mobileLeft) ?  props.mobileLeft : props.left )
    const computedPosition = computed(() => { 
      return {
        top: top.value + 'px',
        left: left.value + 'px',
    }})
     
    const { route, } = useContext()
    const isVisible  = ref(false)
    const checkVisibility = () => {
      if (route.value.name === 'region-slug') {
        isVisible.value = route.value.params.slug === ('o-'+ props.region)
      }
      else {
        isVisible.value = false
      }
    }
    onMounted(() => {
      checkVisibility()
      if (screen) {
         if (screen.height !== 800) {}
        top.value = (screen.height / 800 * props.top) - 44
      }
    }) 
    watch(route, () => {
      checkVisibility()
    })
    const storageURL = process.env.storageURL
    const district = ref({})
    const { currentRegion, }  = useRegion()
    watch(currentRegion,() => { 
      if (currentRegion.value?.districts) {
        for (let i=0; i< currentRegion.value.districts.length; i++ ) {
          const localDistrict = currentRegion.value.districts[i]
          if (localDistrict.slug === props.slug) {
            district.value = localDistrict
            break
          }
        }
      }
    })
    const router = useRouter()
    const onDesClick = () => {
        if (isVisible.value)
          router.push(`o-${props.region}/${props.slug}`)
      }
    const onMouseEnter = () => {
      document.querySelector('#' + props.slug).classList.add('link-to-o-hover')
    }
    const onMouseLeave = () => {
      document.querySelector('#' + props.slug).classList.remove('link-to-o-hover')
    }
    return {
      district,
      computedPosition,
      storageURL,
      isVisible,
      onDesClick,
      onMouseEnter,
      onMouseLeave,
    }
  },
})
</script>

<style scoped>
.map-label-area {
	align-items: center;
	background: var(--White100);
	border-radius: 12px 12px 12px 12px;
	box-shadow: 0 16px 25px 0 rgba(0, 130, 193, 0.12);
	cursor: pointer;
	display: flex;
	height: 4.7rem;
	padding: .4rem .8rem;
	position: absolute;
}
.map-label-area::after {
  content: '';
  background: var(--White100);
  border-radius: 0 0 2px 0;
  display: block;
  width: 12px;
  height: 12px;
  position: absolute;
  bottom: -10px;
  left: 50%;
  z-index: 1;
  transform: rotate(45deg) translateX(-50%);
}

.map-label-area-emblem {
	display: inline-flex;
	width: 2.8rem;
	height: 3.2rem;
	margin: .2rem .6rem 0 0;
	position: relative;
}

.map-label-area-emblem>img {
  display: block;
  width: 2.8rem;
  height: 3.2rem;
  max-width: 2.8rem;
  object-fit: contain;
}

.map-label-area-title {
	color: var(--Blue100);
	font-size: 1.4rem;
	line-height: 1.6rem;
	text-transform: uppercase;
	letter-spacing: .04em;
}

@media (max-width: 460px) {
  .map-label-area {
    height: auto;
    padding: .2rem .6rem;
  }

  .map-label-number-header,
  .map-lable-number {
    font-size: 1rem;
    line-height: 1.2rem;
  }

  .map-label-area-title {
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
}
</style>