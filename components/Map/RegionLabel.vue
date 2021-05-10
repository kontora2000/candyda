<template>
  <div>
    <transition name="fade025">
      <div class="map-label-area" :style="computedPosition" v-show="isVisible" @click="onRegClick">
          <div class="map-lable-number">{{ props.number }} </div>
          <div class="map-label-area-title">
            <slot />
        </div>J
         <div class="map-label-type">Округ</div>
      </div>
    </transition>
  </div>
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
      if (screen) {
         if (screen.height !== 800) {}
        top.value = (screen.height / 800 * props.top) - 44
      }
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
  box-shadow: 0 16px 25px 0 rgba(0, 130, 193, 0.12);
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

.map-label-area-emblem>img {
  display: block;
  width: 2.8rem;
  height: 3.2rem;
  max-width: 2.8rem;
  object-fit: contain;
}

.map-label-area-title {
	color: var(--Azure100);
	font-size: 1.4rem;
	line-height: 1.6rem;
	text-transform: uppercase;
	letter-spacing: .04em;
}
</style>