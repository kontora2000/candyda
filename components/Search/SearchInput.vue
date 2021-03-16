<template>
  <input class="search-input" type="search" placeholder="Введите округ / район или город / имя кандидата / новость"/>
</template>

<script>
import { defineComponent, } from '@nuxtjs/composition-api'
import { useSearch, } from '~/composition/search'


export default defineComponent({
    name:'HeaderSearchbar',
    setup () {
        const { searchBlocks, } = useSearch()
        return {
            searchBlocks,
        }
    },
})
</script>