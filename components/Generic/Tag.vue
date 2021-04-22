<template>
   <a class="button tag" href="#" @click.prevent="onTagClick()"><slot /></a>
</template>

<script lang="ts">
import { defineComponent, PropType  } from '@nuxtjs/composition-api'
import { useSearch, } from '@/composition/search'
import { Tag, } from '@/modules/types'

export default defineComponent({
    name:'Tag',
    props: {
      tag: {
        type: Object as PropType<Tag>,
        required: true,
        default: null,
      }
    },
    setup (props) {
        const { searchBlocks, searchString, } =  useSearch()
        const onTagClick = () => {
            searchBlocks.value = ['#' + props.tag.name ]
        }
        return {
            onTagClick,
        }
    },
})
</script>
<style scoped>
button {
  max-height: 6.4rem;
}
</style>
