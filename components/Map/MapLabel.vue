<template>
  <div>
    <transition name="fade025">
      <div class="map-label-area" :style="computedPosition" v-show="isVisible" >
        <div class="map-label-area-emblem" v-if="district && district.logo && district.logo!==''">
            <img :src="storageURL + district.logo" :alt="slug">
          </div>
          <div class="map-label-area-title">
            <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed, onMounted, watch, useContext, } from '@nuxtjs/composition-api'
import { useRegion, } from '@/composition/region'
import { Distritct, } from '@/modules/types'

export default defineComponent({
  name: 'MapLabel',
  props: {
    slug: {
      type: String as PropType<string>,
      require: true
    },
    region: {
      type: String as PropType<string>,
      require: true,
      default: '',
    },
    top: {
      type: Number as PropType<number>,
      required: true,
    },
    left: {
      type: Number as PropType<number>,
      required: true,
    },
  },
  setup(props) {
    const top = ref(props.top)
    const left = ref(props.left)
    const computedPosition = computed(() => { 
      return {
        top: top.value + 'px',
        left: left.value + 'px',
    }})
    onMounted(() => {
      if (screen) {
         if (screen.height !== 800) {}
        top.value = (screen.height / 800 * props.top) - 44
      }
    })

  
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
    onMounted(()=> {
      checkVisibility()
    })
    watch(route, () => {
      checkVisibility()
    })
    const storageURL = process.env.storageURL
    const district = ref<Distritct>({} as Distritct)
    const { currentRegion, }  = useRegion()
    watch(currentRegion,() => { 
      if (currentRegion.value?.districts) {
        for (let i=0; i< currentRegion.value.districts.length; i++ ) {
          const localDistrict: Distritct = currentRegion.value.districts[i]
          if (localDistrict.slug === props.slug) {
            district.value = localDistrict
            break
          }
        }
      }
    })

    
    return {
      district,
      computedPosition,
      storageURL,
      isVisible,
    }
  },
})
</script>
<style scoped>
.map-label-area {
	align-items: center;
	background: var(--Azure100);
	border-radius: 12px 12px 12px 2px;
	cursor: pointer;
	display: flex;
	height: 4.4rem;
	padding: .4rem .8rem;
	position: absolute;
}

.map-label-area-emblem {
	display: inline-flex;
	width: 2.8rem;
	height: 3.2rem;
	margin: .2rem .6rem 0 0;
	position: relative;
}

.map-label-area-title {
	color: var(--White100);
	font-size: 1.4rem;
	line-height: 2rem;
	text-transform: uppercase;
	letter-spacing: .04em;
}
</style>