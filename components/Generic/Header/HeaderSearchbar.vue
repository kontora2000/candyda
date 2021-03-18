<template>
   <div class="search-input-wrapper" v-if="!$device.isMobile">
      <svg class="icon-search-svg icon-svg">
         <use xlink:href="/sprite.svg#icon-search" />
      </svg>
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

.icon-search-svg {
   width: inherit;
   height: inherit;
}

.icon-search-svg use {
   fill: var(--Black32);
}

@media (max-width: 460px) {
	.search-input-wrapper {
      grid-column: 1/7;
      grid-row: 2/2;
	}
}
</style>
