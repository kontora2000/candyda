<template>
  <transition name="fade025">
    <div class="map-label-area" :style="computedPosition" v-show="isVisible" @click="onRegClick">
        <div class="map-label-number-wrapper">
          <span class="map-label-number-header">Округ</span>
          <span class="map-label-number-line"></span>
          <span class="map-lable-number">{{ number }}</span>
        </div>
        <div class="map-label-area-title"><slot /></div>
    </div>
  </transition>
</template>



<script lang="ts">
import { defineComponent, PropType, ref, computed, onMounted, watch, useContext, useRouter, } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'RegionLabel',
  props: {
    slug: {
      type: String as PropType<string>,
      require: true
    },
    top: {
      type: Number as PropType<number>,
      required: true,
    },
    left: {
      type: Number as PropType<number>,
      required: true,
    },
    number: {
        type: Number as PropType<number>,
        required: true,
    }
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
    //   if (screen) {
    //      if (screen.height !== 800) {}
    //     top.value = (screen.height / 800 * props.top) - 44
    //   }
    })  
    const { route, } = useContext()
    const isVisible  = ref(false)
    const checkVisibility = () => {
      isVisible.value = route.value.path === '/'
    }
    onMounted(()=> {
      checkVisibility()
    })
    watch(route, () => {
      checkVisibility()
    })
    const storageURL = process.env.storageURL
    const router = useRouter()
    const onRegClick = () => {
        if (isVisible.value)
          router.push(`/region/o-${props.slug}`)
      }
    return {
      computedPosition,
      storageURL,
      isVisible,
      onRegClick,
    }
  },
})
</script>

<style scoped>
.map-label-area {
	align-items: center;
	background: var(--White100);
	border-radius: 12px 12px 12px 2px;
	box-shadow: 0px 18px 47px rgba(38, 117, 255, 0.12), 0px 7.51997px 19.6355px rgba(38, 117, 255, 0.0862625), 0px 4.02054px 10.4981px rgba(38, 117, 255, 0.0715329), 0px 2.25388px 5.88513px rgba(38, 117, 255, 0.06), 0px 1.19702px 3.12555px rgba(38, 117, 255, 0.0484671), 0px 0.498106px 1.30061px rgba(38, 117, 255, 0.0337375);
	cursor: pointer;
	display: flex;
    flex-direction: column;
	height: 4.4rem;
	padding: .4rem .8rem;
	position: absolute;
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
</style>