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
          <ul key="burger-open" :class="{ scrolled: isScrolled }">
            <li><nuxt-link to="/news" class="nav-link link-underline-solid">Новости</nuxt-link></li>
            <li><nuxt-link to="/top" class="nav-link link-underline-solid">Топ кандидатов</nuxt-link></li>
            <li><nuxt-link to="/party" class="nav-link link-underline-solid">Партии</nuxt-link></li>
            <li v-for="flatPage in flatPages" 
              :key="flatPage.id">
              <nuxt-link :to="`/page/${flatPage.slug}`" class="nav-link link-underline-solid">
                {{ flatPage.title }}
              </nuxt-link>  
            </li>
          </ul>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, ref, computed, onMounted,  watch, } from '@nuxtjs/composition-api'
import { useFlatPages, } from '@/composition/flatpages'
import HeaderLogo from './HeaderLogo.vue'


export default defineComponent({
    components: { HeaderLogo, },
    name:'HeaderNavbar',
    setup () {
        const { route, } = useContext()
        const isScrolled = ref(false)
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
        
        const { flatPages, fetchFlatPages, } = useFlatPages()
        fetchFlatPages()

        const page = computed(() => route.value.path)
        isBurgerVisible.value = (page.value!=='/')
        
        const handleScroll = () => {
            if (page.value !== '/') { 
                isBurgerOpen.value = false
                isScrolled.value = true
            }
            else {
                window.setTimeout(() => {
                    isBurgerOpen.value =  window.pageYOffset <= 150
                    isScrolled.value = window.pageYOffset > 150
                }, 200)                
            }
            return false
        } 
        watch(page, () => {
            if (timerID > 0) window.clearTimeout(timerID)
            isBurgerOpen.value = (page.value==='/' && window.pageYOffset <= 150)
            isScrolled.value = page.value !== '/' || window.pageYOffset > 150

            document.addEventListener('scroll', handleScroll,  {passive: true,})
        })        
        onMounted(() => {
            isBurgerOpen.value = (page.value==='/' && window.pageYOffset <= 150)
            isScrolled.value = page.value !== '/' || window.pageYOffset > 150
            document.addEventListener('scroll', handleScroll,  {passive: true,})
        })
        return {
            isBurgerOpen,
            isBurgerVisible,
            isScrolled,
            openBurger,
            startBurgerTimer,
            resetBurgerTimer,
            flatPages,
        }
    }, 
})
</script>



<style scoped>
.logo-nav-cont.fixed { 
  top: 2.2rem;
  margin-left: calc(((100vw - 49.6rem - 1.6rem) / 32) + 1.6rem);
  margin-top: 2rem;
  z-index: 3;
}

.burger {
  position: static;
}

.site-nav {
  grid-column: 2/9;
  grid-row: 2/2;
  margin-top: 1.6rem;
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

.nav-link-burger-wrapper {
  background: var(--Azure16);
  border-radius: 12px;
  display: inline-block;
  -webkit-backdrop-filter: blur(32px);
  backdrop-filter: blur(32px);
  padding: 0 .8rem .6rem;
}

.scrolled .nav-link {
  background-color: var(--Black100) !important;
  border-radius: 8px;
  border-bottom: 0;
  color: var(--White100);
  padding: 1px 4px 3px;
  transition: background-color .15s ease-in-out;
}
.scrolled .nav-link:hover {
  background-color: var(--Gray100) !important;
}

.nav-link-burger {
  /*background: var(--Azure16);
  border-radius: 16px;
  -webkit-backdrop-filter: blur(32px);
  backdrop-filter: blur(32px);*/
}

@media (max-width: 460px) {
	.site-nav {
      grid-column: 1/2;
      grid-row: 2/2;
	}
}
</style>
