<template>
  <div class="fixed">
    <transition name="fade" mode="out-in">
      <a v-if="isBurgerVisible && !isBurgerOpen"
          class="burger "       
          @mouseenter="openBurger"
          key="b_button">
            <span class="icon-burger">
                <span class="icon-burger-line"></span>
                <span class="icon-burger-line"></span>
            </span>
      </a>
      <div v-else 
        class="logo-navbar-wrapper" 
        key="menu-logo"  
        @mouseleave="startBurgerTimer">
        <div class="logo-wrapper" >
            <nuxt-link to="/" class="logo-link">Duma.one</nuxt-link>
        </div>
        <nav class="site-nav">
          <ul key="burger-open">
            <li><nuxt-link to="/news" class="nav-link link-underline-solid">Новости</nuxt-link></li>
            <li><nuxt-link to="/top" class="nav-link link-underline-solid">Топ кандидатов</nuxt-link></li>
          </ul>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script>
import { defineComponent, useContext, ref, computed, onMounted,  watch, } from '@nuxtjs/composition-api'

export default defineComponent({
    name:'HeaderNavbar',
    setup () {
        const { route, } = useContext()

        const isBurgerOpen = ref(false)
        const openBurger = () => {
            isBurgerOpen.value = true
            isBurgerVisible.value = false
        }
        
        let timerID = 0

        const startBurgerTimer = () => {
            if (timerID) window.clearTimeout(timerID)
            timerID = window.setTimeout(() => {
                if (window.pageYOffset <= 150 && page.value === '/')  {
                    isBurgerVisible.value = false
                    return
                }
                isBurgerOpen.value = false
                isBurgerVisible.value = true
            }, 800)
        }

        const isBurgerVisible = ref(false)
        
        const page = computed(() => route.value.path)
        isBurgerVisible.value = (page.value!=='/')
        
        const handleScroll = () => {
            if (page.value !== '/') { 
                if (isBurgerOpen.value === true) isBurgerOpen.value = false
            }
            else {
                isBurgerVisible.value = window.pageYOffset > 150
                isBurgerOpen.value = false
            }
            return false
        } 

        watch(page, () => {
            isBurgerVisible.value = (page.value!=='/')
            isBurgerOpen.value = false
            document.addEventListener('scroll', handleScroll,  {passive: true,})
        })

        
        onMounted(() => {
            isBurgerVisible.value = (page.value!=='/' || window.pageYOffset > 150)
            document.addEventListener('scroll', handleScroll,  {passive: true,})
        })

        return {
            isBurgerOpen,
            isBurgerVisible,
            openBurger,
            startBurgerTimer,
        }
    }, 
})
</script>



<style scoped>
.burger {
  position: static;
}

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
