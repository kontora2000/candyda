import { ref, } from "@nuxtjs/composition-api"

const menuState = ref({
  isBurger: false,
  isMobile: false,
})

export const useMenu =() => {
    const getMenuState = () => menuState.value


    const setMenuState = (state) => {
        menuState.value = state
    }

    const isBurger = (value) => {
      menuState.value.isBurger = value
    }

    

    return {
        menuState,
        getMenuState,
        setMenuState,
        isBurger,
    }
}
