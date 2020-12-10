<template>
   <div class="search-input-wrapper">
      <input class="search-input" type="search" placeholder="Введите округ / район или город / имя кандидата / новость"/>
   </div>
</template>



<script>
import { defineComponent, } from '@nuxtjs/composition-api'

export default defineComponent({
   name:'HeaderSearchbar',
})
</script>



<style scoped>
   .search-input-wrapper {
      grid-column: 9/28;
      grid-row: 1/1;
   }

   .search-input {
      width: 100%;
   }
</style>