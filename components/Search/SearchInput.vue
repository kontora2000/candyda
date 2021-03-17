<template>
  <div>
    <input 
      @focus="onFocus"
      class="search-input" 
      type="search" 
      placeholder="Введите округ / район или город / имя кандидата / новость">
      <div class="search-blocks-wrapper">
        <span 
          v-for="(block, index) in searchBlocks"
          :key="generateKey(index)"> {{ block }} 
        </span>
      </div>
  </div>
</template>

<script>
import { defineComponent,  } from '@nuxtjs/composition-api'
import { useSearch, } from '~/composition/search'
import { generateKey, } from '@/composition/helpers'

export default defineComponent({
    name:'SearchInput',
    setup (_, { emit, }) {
        const { searchBlocks, } = useSearch()
        const onFocus = () => {
            emit('searchFocus')
        }
        return {
            searchBlocks,
            generateKey,
            onFocus,
        }
    },
})
</script>