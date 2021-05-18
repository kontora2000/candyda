<template>
  <transition name="fade025">
    <div class="map-label-area" :id="'label-' + slug"
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
import { defineComponent, ref, onMounted, watch, useContext, } from '@nuxtjs/composition-api'
import { useRegion, } from '@/composition/region'
import { useLabel, } from '@/composition/label'


export default defineComponent({
    name: 'MapLabel',
    props: {
        slug: {
            type: String,
            require: true,
        },
        region: {
            type: String,
            require: true,
            default: '',
        },
        top: {
            type: Number,
            required: false,
            default: 0,
        },
        left: {
            type: Number,
            required: false,
            default: 0,
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
        const { $device, route, } = useContext()
        const { computedPosition, calcLabelPos, isVisible, onDesClick, } = useLabel(props, $device)
        const checkVisibility = () => {
            if (route.value.name === 'region-slug') {
                isVisible.value = route.value.params.slug === ('o-'+ props.region)
                if (isVisible.value) {
                    window.setTimeout(() => {
                        calcLabelPos()
                    }, 300)
                }
            }
            else {
                isVisible.value = false
            }
        }
        onMounted(() => {
            checkVisibility()
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
  display: block;
  width: 0;
  height: 0;
  bottom: -12px;
  left: 50%;
  position: absolute;
  z-index: 1;
  border-top: 12px solid var(--White100);
  background: transparent;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
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
    border-radius: 6px;
    height: auto;
    padding: .2rem .4rem;
  }

  .map-label-area-title {
    font-size: 1rem;
    line-height: 1rem;
    margin-top: -.2rem;
  }

  .map-label-area-emblem {
    width: 1.8rem;
    height: 2.3rem;
    margin: 0 .5rem 0 0;
  }
  .map-label-area-emblem>img {
    width: 1.8rem;
    height: 2.3rem;
    max-width: 1.8rem;
  }
}
</style>