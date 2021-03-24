<template>
  <div class="logo-nav-cont fixed">
    <transition name="fade-fast" mode="out-in">
      <a v-if="!isBurgerOpen"
          class="burger "       
          @mouseenter="openBurger"
          key="b-button">
            <span class="icon-burger">
                <span class="icon-burger-line"></span>
                <span class="icon-burger-line"></span>
            </span>
      </a>
      <div v-else 
        class="logo-navbar-wrapper" 
        key="menu-logo"  
        @mouseenter="resetBurgerTimer"
        @mouseleave="startBurgerTimer">
        <header-logo />
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
import HeaderLogo from './HeaderLogo.vue'

export default defineComponent({
  components: { HeaderLogo },
    name:'HeaderNavbar',
    setup () {
        const { route, } = useContext()

        const isBurgerOpen = ref(false)
        let timerID = 0

        const openBurger = () => {
            isBurgerOpen.value = true
        }
        
        const resetBurgerTimer = () => {
            if (timerID > 0) clearInterval(timerID)
        }

        const startBurgerTimer = () => {
            if (window.pageYOffset <= 150 && page.value === '/')  {
                window.clearTimeout(timerID)
                return
            }
            if (!isBurgerOpen.value) {
                window.clearTimeout(timerID)
                return
            }
            if (timerID) window.clearTimeout(timerID)
            timerID = window.setTimeout(() => {
                if (window.pageYOffset <= 150 && page.value === '/')  {
                    return
                }
                isBurgerOpen.value = false
            }, 800)
        }

        const isBurgerVisible = ref(false)
        
        const page = computed(() => route.value.path)
        isBurgerVisible.value = (page.value!=='/')
        
        const handleScroll = () => {
            if (page.value !== '/') { 
                isBurgerOpen.value = false
            }
            else {
                window.setTimeout(() => {
                    isBurgerOpen.value =  window.pageYOffset <= 150
                }, 200)                
            }
            return false
        } 

        watch(page, () => {
            if (timerID > 0) window.clearTimeout(timerID)
            isBurgerOpen.value = (page.value==='/' && window.pageYOffset <= 150)
            document.addEventListener('scroll', handleScroll,  {passive: true,})
        })

        
        onMounted(() => {
            isBurgerOpen.value = (page.value==='/' && window.pageYOffset <= 150)
            document.addEventListener('scroll', handleScroll,  {passive: true,})
        })

        return {
            isBurgerOpen,
            isBurgerVisible,
            openBurger,
            startBurgerTimer,
            resetBurgerTimer,
        }
    }, 
})
</script>



<style scoped>
.logo-nav-cont.fixed { 
  top: 2.8rem;
  margin-left: calc(((100vw - 49.6rem - 1.6rem) / 32) + 1.6rem);
  z-index: 3;
}

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
