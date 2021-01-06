<template>
   <div class="logo-wrapper">
      <nuxt-link to="/" class="logo-link">Duma.one</nuxt-link>
   </div>
</template>



<script>
import { defineComponent, } from '@nuxtjs/composition-api'

export default defineComponent({
    name:'HeaderLogo',
})
</script>


<style scoped>
.logo-wrapper {
   grid-column: 2/9;
   grid-row: 1/1;
}

.logo-link {
   display: inline-block;
   font-size: 3.2rem;
   font-weight: 500;
   letter-spacing: -.01em;
   line-height: 3.6rem;
   margin: 1.2rem 0 0;
}


@media (max-width: 460px) {
	.logo-wrapper {
		grid-column: 1/4;
        position: relative;
        z-index: 2;
	}

    .logo-link {
        margin-top: 0;
    }

}
</style>
