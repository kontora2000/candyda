<template>
    <div class="burger-menu">
            <a class="burger"
               :class="{ 'burger-close': !isBurgerVisible }"
               @click="toggleBurger"
               key="b_button">
                <span class="icon-burger" >
                    <span class="icon-burger-line"></span>
                    <span class="icon-burger-line"></span>
                </span>
            </a>
            <transition name="fade">
                <nav class="site-nav-burger" v-if="isBurgerVisible" key="b_menu">
                        <ul>
                            <li><nuxt-link to="/news" class="nav-link link-underline-solid">Новости</nuxt-link></li>
                            <li><nuxt-link to="/top" class="nav-link link-underline-solid">Топ кандидатов</nuxt-link></li>
                            <li><nuxt-link to="/about" class="nav-link link-underline-solid">О проекте</nuxt-link></li>
                        </ul>
                </nav>
                <div class="burger-search">
                    <input name="search" class="search-input" type="search"  />
                    <span class="search-input-icon"></span>
                </div>
        </transition>
    </div>
</template>

<script>
import { defineComponent, } from '@nuxtjs/composition-api'

export default defineComponent({
    name:'HeaderBurger',
    data() {
        return  {
            isMobile: this.$device.isMobile,
            isBurgerVisible: false,
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
        },
        hideBurger() {
            this.isBurgerVisible = false;
        },
    },
})
</script>
<style>
.icon-burger{
    cursor: pointer;
    display: block;
    float: right;
    height: 4rem;
    position: relative;
    width: 5.2rem;
    transition: transform .175s ease-in-out;
    will-change: transform;
}

.icon-burger-line {
    display: block;
    height: 2.5px;
    margin-bottom: 1.6rem;
    background-color: #000;
    width: 100%;
    transition: all .175s ease-in-out,margin .175s ease-in-out;
    will-change: background-color,margin
}
</style>
