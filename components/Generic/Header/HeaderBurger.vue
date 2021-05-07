<template>
    <div class="burger-menu"  >
            <a class="burger"
              @click="toggleBurger"
               v-touch="() => toggleBurger"
               :class="{ 'burger-close': !isBurgerVisible, 'burger-open': isBurgerVisible }"
               key="b_button">
                <span class="icon-burger">
                    <span class="icon-burger-line"></span>
                    <span class="icon-burger-line"></span>
                </span>
            </a>
            <transition name="fade">
                <div class="burger-overlay" v-if="isBurgerVisible">
                    <nav class="site-nav-burger" key="b_menu" v-if="!isSearchOpen">
                            <ul>
                                <li><nuxt-link to="/news" class="nav-link link-underline-solid">Новости</nuxt-link></li>
                                <li><nuxt-link to="/top" class="nav-link link-underline-solid">Топ кандидатов</nuxt-link></li>
                                <li><nuxt-link to="/party" class="nav-link link-underline-solid">Партии</nuxt-link></li>
                                <li><nuxt-link to="/about" class="nav-link link-underline-solid">О проекте</nuxt-link></li>
                                <li v-for="flatPage in flatPages" 
                                  :key="flatPage.id">
                                    <nuxt-link :to="`/page/${flatPage.slug}`" class="nav-link link-underline-solid">{{ flatPage.title }}</nuxt-link>
                                </li>
                            </ul>
                    </nav>
                    <SearchResults v-if="isSearchOpen"/>
                    <div class="burger-search">
                        <SearchInput/>
                    </div>
                </div>
        </transition>
    </div>
</template>

<script>
import { defineComponent, ref, useContext, } from '@nuxtjs/composition-api'
import { useFlatPages, } from '@/composition/flatpages'
import { useSearch, } from '@/composition/search'

import SearchInput from '@/components/Search/SearchInput.vue'
import SearchResults from '@/components/Search/SearchResults.vue'

export default defineComponent({
    name:'HeaderBurger',
    components:{
        SearchInput,
        SearchResults,
    },
    setup () {
        const { flatPages,  fetchFlatPages, } =  useFlatPages()
        const {  isSearchOpen, } = useSearch()
        fetchFlatPages()
        const  isBurgerVisible = ref(false)
        return {
            flatPages,
            isBurgerVisible,
            isSearchOpen,
        }
    },
    mounted() {
        document.body.addEventListener('scroll', () => {
            if (this.$device.isMobile) {
                this.hideBurger()
            }
        }, {
            passive: true,
        })
    },
    methods: {
        toggleBurger() {
            this.isBurgerVisible = !this.isBurgerVisible
            document.body.style.overflow = document.body.style.overflow === 'hidden' ? '' : 'hidden'
            document.body.style.position = document.body.style.position === 'fixed' ? '' : 'fixed'
            const htmlElem = document.querySelector('html')
            htmlElem.style.overflow = htmlElem.style.overflow === 'hidden' ?  '' : 'hidden'
        },
        hideBurger() {
            this.isBurgerVisible = false;
            document.body.style.overflow = ''
            document.querySelector('html').style.overflow = ''
            document.body.style.position = ''
        },
    },
})
</script>
<style>
.burger-menu {
    grid-column: 1/7;
    grid-row: 1/1;
    position: relative;
}

.burger {
    display: block;
    margin-top: .6rem;
    position: absolute;
    right: 0;
    width: 10.4rem;
    z-index: 3;
    transition: all .15s ease-in-out;
}
.burger.burger-close {
    height: 1.6rem;
}
.icon-burger {
    cursor: pointer;
    display: block;
    float: right;
    height: 100%;
    position: relative;
    width: 100%;
    transition: transform .15s ease-in-out;
    will-change: transform;
}
.icon-burger-line {
    display: block;
    height: .4rem;
    background-color: var(--Black100);
    width: 100%;
    transition: all .15s ease-in-out,margin .15s ease-in-out;
    will-change: background-color,margin;
}
.icon-burger-line:first-child {
    margin-bottom: .8rem;
}

.burger-overlay {
    background: var(--White48);
    height: calc(100vh - 6rem);
    padding: 8.8rem 1.2rem 0;
    position: absolute;
    top: -2.8rem;
    left: -1.2rem;
    width: 100vw;
    z-index: 2;
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
}

.site-nav-burger li:not(:first-child) {
    margin-top: .8rem;
}

.site-nav-burger .nav-link {
    border-bottom-width: 3px;
    font-size: 2.8rem;
    font-weight: 500;
}

.burger-search {
    position: absolute;
    bottom: 2rem;
    width: calc(100vw - 2.4rem);
}

.burger-search .search-input {
    width: 100%;
}

.burger.burger-open {
    height: 6.4rem;
    margin-top: -1.6rem;
    right: 2.8rem;
    width: 6.4rem;
}
.burger-open .icon-burger-line:first-child {
    transform: rotate(45deg);
    margin-top: 3.4rem;
}
.burger-open .icon-burger-line:nth-child(2) {
    margin-top: -1.2rem;
}
.burger-open .icon-burger-line {
    width: 8rem;
    transform: rotate(-45deg);
    margin-top: 1.2rem;
}


@media (max-width: 460px) {
    .burger-search {
        position: fixed;
    }
}
</style>