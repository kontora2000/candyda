import { ref } from "@nuxtjs/composition-api";

const menuState = ref('')

export const useMenu =() => {
    const getMenuState = () => menuState.value


    const setMenuState = (state) => {
        menuState.value = state
    }

    const onScroll = () => {
        menuState.value = 'closed'
    }

    return {
        menuState,
        getMenuState,
        setMenuState,
    }
}
