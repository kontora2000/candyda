<template>
    <div class="gallery-lightbox-wrapper">
        <transition-group name="fade">
            <div v-show="isVisible && images.length > 0" key="overlay" class="gallery-lightbox-overlay" />
            <div v-show="isVisible && images.length > 0" key="cont" class="gallery-lightbox-cont">
                <div class="gallery-lightbox-body">
                    <img class="gallery-lightbox-current-image" :src="currentImage.src">
                    <div class="gallery-lightbox-numb">
                        {{ pos+1 }} / {{ imgCount }}
                    </div>
                </div>
                <div class="gallery-lightbox-left" @click="left">
                    <svg class="icon-arrow-svg icon-arrow-left-svg"><use xlink:href="/images/sprite.svg#icon-arrow-left"></use></svg>
                </div>
                <div class="gallery-lightbox-right" @click="right">
                    <svg class="icon-arrow-svg icon-arrow-right-svg"><use xlink:href="/images/sprite.svg#icon-arrow-right"></use></svg>
                </div>
                <div class="gallery-lightbox-close" @click="close">
                    <svg class="icon-close-svg"><use xlink:href="/images/sprite.svg#icon-close"></use></svg>
                </div>
            </div>
        </transition-group>
    </div>
</template>


<script lang="ts">
import { defineComponent, PropType, ref, computed } from '@nuxtjs/composition-api'

import {Image} from "~/modules/types";
import {useToggle} from "~/composition/toggle";

export default defineComponent({
  name:'PostGallery',
  props: {
    images: {
        type: Array as PropType<Image[]>,
        default: () => [],
    }
  },
  setup(props) {
    const pos = ref(0)
    const currentImage = ref({})
    const imgCount = computed(() => {
      return props.images.length
    })
    const { isVisible, hide:close } = useToggle()
    const left = () => {
        pos.value = pos.value > props.images.length ? props.images.length : pos.value - 1
        currentImage.value = props.images[pos.value]
    }
    const right = () => {
        pos.value = pos.value > props.images.length ? props.images.length : pos.value + 1
        currentImage.value = props.images[pos.value]
    }
    return {
      imgCount,
      left,
      right,
      close,
      isVisible,
    }
  },

})
</script>
<style scoped>
.gallery-lightbox-wrapper {
  z-index: 101;
}
.gallery-lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--Black92);
  z-index: 101;
  min-width: 100vw;
}
.gallery-lightbox-cont {
  position: fixed;
  display: flex;
  z-index: 102;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.gallery-lightbox-body {
  position: absolute;
  top: 3.2rem;
  left: 50%;
  transform: translateX(-50%);
}
.gallery-lightbox-current-image {
  max-width: calc(100vw - 3.2rem);
  height: 100%;
  max-height: 90vh;
}
.gallery-lightbox-close {
  cursor: pointer;
  position: absolute;
  left: 1.6rem;
  top: 3.2rem;
  transition: transform .175s ease-in-out;
  will-change: transform;
}
.gallery-lightbox-close:hover {
  transform: scale(1.075);
}
.gallery-lightbox-close .icon-close-svg>use {
  fill: var(--White56);
  transition: fill .175s ease-in-out;
}
.gallery-lightbox-close:hover .icon-close-svg>use {
  fill: var(--White100);
}
.gallery-lightbox-left,
.gallery-lightbox-right {
  position: absolute;
  height: 100%;
  width: 10rem;
}
.gallery-lightbox-left:hover,
.gallery-lightbox-right:hover {
  cursor: pointer;
}
.gallery-lightbox-left {
  left: 0;
}
.gallery-lightbox-right {
  right: 0;
}
.gallery-lightbox-left .icon-arrow-svg,
.gallery-lightbox-right .icon-arrow-svg {
  top: calc(50vh - 1.8rem);
  position: absolute;
}
.gallery-lightbox-left .icon-arrow-svg {
  left: 1.6rem;
}
.gallery-lightbox-right .icon-arrow-svg {
  right: 1.6rem;
}
.icon-arrow-svg>use {
  fill: var(--White56);
}
.gallery-lightbox-left:hover>.icon-arrow-svg>use,
.gallery-lightbox-right:hover>.icon-arrow-svg>use {
  fill: var(--White100);
}
.gallery-lightbox-numb {
  color: var(--White100);
  font-size: 2.4rem;
  text-align: center;
}
</style>



