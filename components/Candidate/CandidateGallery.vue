<template>
    <div class="gallery-lightbox-wrapper">
        <transition-group name="fade">
            <div v-show="visible && images.length > 0" key="overlay"
                 class="gallery-lightbox-overlay"  @click.self="onClose"/>
            <div v-show="visible && images.length > 0" key="cont" class="gallery-lightbox-cont">
                <div class="gallery-lightbox-body">
                    <img class="gallery-lightbox-current-image" :src="'https://api.prostokontora.ru/storage/' + currentImage">
                    <div class="gallery-lightbox-numb">
                        {{ pos+1 }} / {{ imgCount }}
                    </div>
                </div>
                <div class="gallery-lightbox-left" @click="left">
                    <svg class="icon-arrow-svg icon-arrow-left-svg">
                        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 31" id="icon-arrow-left">
                            <path d="M0.556274 14.2684L31.1548 0L32 1.81262L2.72729 15.4626L32 29.1128L31.1548 30.9254L0.556274 16.657V14.2684Z"/>
                        </symbol>
                    </svg>
                </div>
                <div class="gallery-lightbox-right" @click="right">
                    <svg class="icon-arrow-svg icon-arrow-right-svg">
                        <symbol xmlns="http://www.w3.org/2000/svg"  id="icon-arrow-right">
                            <path d="M32 14.2684L1.40149 0L0.556274 1.81262L29.829 15.4626L0.556274 29.1128L1.40149 30.9254L32 16.657V14.2684Z"/>
                        </symbol>
                    </svg>
                </div>
                <div class="gallery-lightbox-close" @click="onClose">
                    <svg class="icon-close-svg">
                        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="icon-close">
                            <path d="M15.5564 14.1421L29.6985 0L31.1127 1.41422L16.9706 15.5563L31.1128 29.6985L29.6986 31.1127L15.5564 16.9705L1.41418 31.1127L0 29.6985L14.1422 15.5563L0.00012207 1.41422L1.41431 0L15.5564 14.1421Z"/>
                        </symbol>
                    </svg>
                </div>
            </div>
        </transition-group>
    </div>
</template>


<script>
import { defineComponent, PropType, ref, computed, watch, } from '@nuxtjs/composition-api'

import {Image,} from '~/modules/types';
import {useToggle,} from '~/composition/toggle';

export default defineComponent({
    name:'PostGallery',
    props: {
        images: {
            type: Array,
            default: () => [],
        },
        visible: {
            type: Boolean,
            default:false,
        },
        current: {
            type: Number,
            default: 0,
        },
    },
    setup(props, emit) {
        const pos = ref(props.current)
        const currentImage = ref(props.images[pos.value])
        const imgCount = computed(() => {
            return props.images.length
        })

        const c = computed(() => props.current)

        watch(c, () => {
            pos.value = c.value
            currentImage.value = props.images[pos.value]
        })

        const left = () => {
            pos.value = pos.value === 0 ? (props.images.length - 1) : pos.value - 1
            currentImage.value = props.images[pos.value]
        }
        const right = () => {
            pos.value = pos.value >= props.images.length-1 ? 0 : pos.value + 1
            currentImage.value = props.images[pos.value]
        }
        const onClose = () => {
            document.body.style.overflowY = ''
            document.querySelector('html').style.overflow = ''
            emit.emit('close')
        }



        return {
            imgCount,
            currentImage,
            pos,
            left,
            right,
            onClose,
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



