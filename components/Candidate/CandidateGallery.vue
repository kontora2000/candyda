<template>
    <div class="gallery-lightbox-wrapper" 
      tabindex="-1"
      autofocus 
      ref="lightbox"
      @keyup.left="left"
      @keyup.right="right"
      @keyup.esc="onClose"
    >
        <transition-group name="fade">
            <div v-show="visible && images.length > 0" key="overlay"
                 class="gallery-lightbox-overlay"  @click.self="onClose"/>
            <div v-show="visible && images.length > 0" key="cont" class="gallery-lightbox-cont">
                <div class="gallery-lightbox-body"
                    >
                    <img class="gallery-lightbox-current-image" :src="'https://api.prostokontora.ru/storage/' + currentImage">
                </div>
                <div class="gallery-lightbox-numb">
                  {{ pos+1 }} / {{ imgCount }}
                </div>
                <div class="gallery-lightbox-left" @click="left" v-on:touch="left" >
                    <svg class="icon-arrow-svg icon-arrow-left-svg">
                      <use xlink:href="/sprite.svg#icon-arrow-left" />
                    </svg>
                </div>
                <div class="gallery-lightbox-right" @click="right" v-on:touch="right">
                    <svg class="icon-arrow-svg icon-arrow-right-svg">
                        <use xlink:href="/sprite.svg#icon-arrow-right" />
                    </svg>
                </div>
                <div class="gallery-lightbox-close" @click="onClose" v-on:touch="onClose">
                    <svg class="icon-close-svg">
                        <use xlink:href="/sprite.svg#icon-close" />
                    </svg>
                </div>
            </div>
        </transition-group>
    </div>
</template>


<script>
import { defineComponent,  ref, computed, watch, onMounted, useContext, } from '@nuxtjs/composition-api'

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
        const imgCount = computed(() =>  props.images.length)
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
            document.body.style.position = ''
            document.querySelector('html').style.overflow = ''
            emit.emit('close')
        }

        const { route, } = useContext()


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
  outline: none;
  z-index: 101;
}
.gallery-lightbox-overlay {
  background-color: var(--White84);
  backdrop-filter: blur(64px);
  -webkit-backdrop-filter: blur(64px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
  right: 1.6rem;
  top: 3.2rem;
  transition: transform .15s ease-in-out;
  will-change: transform;
}
.gallery-lightbox-close:hover {
  transform: scale(1.075);
}

.gallery-lightbox-close .icon-close-svg {
  width: 4rem;
  height: 4rem;
}
.gallery-lightbox-close .icon-close-svg>use {
  fill: var(--Black100);
  transition: fill .15s ease-in-out;
}
.gallery-lightbox-close:hover .icon-close-svg>use {
  fill: var(--Black64);
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
  height: 4.8rem;
  width: 4.8rem;
}
.gallery-lightbox-left .icon-arrow-svg {
  left: 1.6rem;
}
.gallery-lightbox-right .icon-arrow-svg {
  right: 1.6rem;
}
.icon-arrow-svg>use {
  fill: var(--Black100);
}
.gallery-lightbox-left:hover>.icon-arrow-svg>use,
.gallery-lightbox-right:hover>.icon-arrow-svg>use {
  fill: var(--Black64);
}
.gallery-lightbox-numb {
  color: var(--Black100);
  font-size: 2.4rem;
  bottom: 1.2rem;
  position: absolute;
  text-align: center;
  width: 100vw;
}



@media (max-width: 460px) {
  .gallery-lightbox-body {
    height: calc(100vh - 3.2rem);
  }

  .gallery-lightbox-close {
    right: .4rem;
  }

  .gallery-lightbox-current-image {
    object-fit: contain;
    max-width: 100vw;
  }

  .gallery-lightbox-left,
  .gallery-lightbox-right {
    width: 4.8rem;
  }

  .gallery-lightbox-left .icon-arrow-svg {
    left: .4rem;
  }
  .gallery-lightbox-right .icon-arrow-svg {
    right: .4rem;
  }

  .gallery-lightbox-left .icon-arrow-svg,
  .gallery-lightbox-right .icon-arrow-svg {
    width: 3.2rem;
    height: 3.2rem;
  }

  .icon-arrow-svg>use {
    fill: var(--White100);
    mix-blend-mode: difference;
  }
  .gallery-lightbox-left:hover>.icon-arrow-svg>use,
  .gallery-lightbox-right:hover>.icon-arrow-svg>use {
    fill: var(--White100);
  }
}
</style>