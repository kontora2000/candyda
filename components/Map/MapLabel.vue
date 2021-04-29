<template>
  <div class="map-label-area" :style="computedPosition">
        <div class="map-label-area-emblem" v-if="logo && logo!==''">
          <img :src="storageURL + logo" :alt="slug">
        </div>
        <div class="map-label-area-title">
          <slot />
        </div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed, onMounted, watch, useFetch, useContext, } from '@nuxtjs/composition-api'
import { useAxios, } from '@/composition/axios'
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
    const district = ref<Distritct>({} as Distritct)
    const { $axios, error, } = useAxios()
    const  { fetch: fetchDistrictBySlug, }  = useFetch(async () => {
      try {
      const response = await $axios.get('/district/' + props.slug)
      if (response.status === 200) {
        district.value = response.data
        if (!district.value.slug) error({ statusCode:404, message:'Страница не найдена' })
      }
    }
    catch(error) {
      console.error(error)
      }
    })
    fetchDistrictBySlug()
    const computedPosition = computed(() => { return {
      top: props.top + 'px',
      left: props.left + 'px',
    }})
    // onMounted(() => {
    //   if (props.slug && props.slug!=='')
    //    fetchDistrictBySlug(props.slug)
    // })
    const logo = ref<string>('')
    const storageURL = process.env.storageURL
    watch(district,() => {
      if (district.value.logo)
        logo.value = district.value.logo
    })

    return {
      logo,
      computedPosition,
      storageURL,
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