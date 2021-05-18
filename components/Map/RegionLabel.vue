<template>
  <transition name="fade025">
    <div class="map-label-area" :id="`o-label-${slug}`"
      v-show="isVisible" 
     :style="computedPosition"
      @click.prevent="onRegClick()"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave">
        <div class="map-label-number-wrapper">
          <span class="map-label-number-header">Округ</span>
          <span class="map-label-number-line"></span>
          <span class="map-lable-number">{{ number }}</span>
        </div>
        <div class="map-label-area-title"><slot /></div>
    </div>
  </transition>
</template>


<script>
import { defineComponent, onMounted, watch, useContext, } from '@nuxtjs/composition-api'
import { useLabel } from '@/composition/label'

export default defineComponent({
  name: 'RegionLabel',
  props: {
    slug: {
      type: String,
      require: true
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
    number: {
        type: Number,
        required: true,
    }
  },
  setup(props) {
    const { $device, route, } = useContext()
    const { computedPosition, calcLabelPos, isVisible, onRegClick, } = useLabel(props, $device)
    isVisible.value = true
    const checkVisibility = () => {
      isVisible.value = route.value.path === '/'
    }
    onMounted(()=> {
      checkVisibility()
       if (isVisible.value) {
        window.setTimeout(() => {
          calcLabelPos(true)
        }, 300);
      }
    })
    watch(route, () => {
      checkVisibility()
      if (isVisible.value) {
        window.setTimeout(() => {
          calcLabelPos(true)
        }, 300);
      }
    })
    const storageURL = process.env.storageURL
    const onMouseEnter = () => {
      const elems = document.querySelectorAll(`#o-${props.slug} .o-city`)
      elems.forEach(el => el.classList.add('link-to-o-hover'))
    }
    const onMouseLeave = () => {
      const elems = document.querySelectorAll(`#o-${props.slug} .o-city`)
      elems.forEach(el => el.classList.remove('link-to-o-hover'))
    }
    return {
      computedPosition,
      storageURL,
      isVisible,
      onRegClick,
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
	box-shadow: 0px 18px 47px rgba(38, 117, 255, 0.12), 0px 7.51997px 19.6355px rgba(38, 117, 255, 0.0862625), 0px 4.02054px 10.4981px rgba(38, 117, 255, 0.0715329), 0px 2.25388px 5.88513px rgba(38, 117, 255, 0.06), 0px 1.19702px 3.12555px rgba(38, 117, 255, 0.0484671), 0px 0.498106px 1.30061px rgba(38, 117, 255, 0.0337375);
	cursor: pointer;
	display: flex;
    flex-direction: column;
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
  z-index: 1;
  position: absolute;
  border-top: 12px solid var(--White100);
  background: transparent;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
}

.map-label-number-wrapper {
  justify-content: space-between;
  display: flex;
  margin: .4rem 0;
  width: 100%;
}

.map-label-number-header,
.map-lable-number {
  color: var(--Blue44);
  font-size: 1.2rem;
  letter-spacing: 0.04em;
  line-height: 1.2rem;
  text-transform: uppercase;
  transition: color .15s ease-in-out;
}

.map-label-number-line {
  display: inline-block;
  border-bottom: 1px solid var(--Blue44);
  margin: 0 .4rem;
  position: relative;
  top: -.6rem;
  width: 100%;
}

.map-label-area-title {
	color: var(--Blue100);
	font-size: 1.4rem;
	letter-spacing: .04em;
  line-height: 1.6rem;
  margin-bottom: .4rem;
  text-transform: uppercase;
}


@media (max-width: 460px) {
  .map-label-area {
    border-radius: 6px;
    height: auto;
    padding: .2rem .4rem;
  }

  .map-label-number-header,
  .map-lable-number {
    font-size: 1rem;
    line-height: 1rem;
  }

  .map-label-area-title {
    font-size: 1rem;
    line-height: 1rem;
    margin-top: -.2rem;
  }
}
</style>