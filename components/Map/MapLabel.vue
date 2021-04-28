<template>
  <div class="map-label-area" :style="computedPosition">
        <div class="map-label-area-emblem" v-if="logo">{{}}</div>
        <div class="map-label-area-title"><slot /></div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, } from '@nuxtjs/composition-api'

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
    // isVisible: {
    //   type: Boolean as PropType<boolean>,
    //   default: false,
    // }
  },
  setup(props) {
    const logo = false
    const computedPosition = computed(() => { return {
      top: props.top + 'px',
      left: props.left + 'px',
    }})
    return {
      logo,
      computedPosition,
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