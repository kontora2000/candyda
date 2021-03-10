<template>
   <nav class="site-nav">
      <a class="burger-"
               v-touch="() => toggleBurger()"
               v-show="menuState.isBurger"
               :class="{ 'burger-close': !isBurgerOpen, 'burger-open': isBurgerOpen }"
               key="b_button">
                <span class="icon-burger">
                    <span class="icon-burger-line"></span>
                    <span class="icon-burger-line"></span>
                </span>
      </a>
      <transition name="fade">
        <ul v-if="!menuState.isBurger" key="burger-open">
          <li><nuxt-link to="/news" class="nav-link link-underline-solid">Новости</nuxt-link></li>
          <li><nuxt-link to="/top" class="nav-link link-underline-solid">Топ кандидатов</nuxt-link></li>
        </ul>
      </transition>
   </nav>
</template>



<script>
import {defineComponent, useContext, ref, computed, onMounted,  watch, } from '@nuxtjs/composition-api'
import { useMenu, } from '@/composition/menu.ts'


export default defineComponent({
    name:'HeaderNavbar',
    setup () {
        const { menuState, isBurger, } = useMenu()
        const { route, } = useContext()
        const isBurgerOpen = ref(false)

        const page = computed(() => route.value.path)
        isBurger(page.value!=='/')
        
        watch(page, () => {
            isBurger(page.value!=='/')
            isBurgerOpen.value = false
        })

        const openBurger = () => {
            isBurgerOpen.value = true
        }
        const closeBurger = () => {
            isBurgerOpen.value = false
        }

        const toggleBurger = () => {
            isBurgerOpen.value = !isBurgerOpen.value
        }

        onMounted(() => {
            document.addEventListener('scroll', () => {
                if (page.value !== '/') { 
                    isBurger(true)
                    closeBurger()
                }
                else {
                    isBurgerOpen.value = indow.pageYOffset > 150
                }
                return false
            },  {
                passive: true,
            })
        })

        return {
            menuState,
            isBurgerOpen,
            openBurger,
            closeBurger,
            toggleBurger,
        }
    }, 
})
</script>



<style scoped>
.site-nav {
   grid-column: 2/9;
   grid-row: 2/2;
   top: 0;
   left: 0;
   z-index: 10;
}
.site-nav li:not(:first-child) {
   margin-top: .8rem;
}
.nav-link {
   border-bottom-width: 2.5px;
   font-size: 2rem;
   font-weight: 500;
}

@media (max-width: 460px) {
	.site-nav {
      grid-column: 1/2;
      grid-row: 2/2;
	}
}
</style>
