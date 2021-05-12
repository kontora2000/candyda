import { useContext, } from '@nuxtjs/composition-api/'

export const useDevice = () => {
    const  { $device, } = useContext()
    if (!$device) {
        throw new Error('nuxt device is not defined!')
      }
    return {
        isMobile: $device.isMobile,
    }
}
