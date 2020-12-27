import { ref, computed, } from '@nuxtjs/composition-api'

const message = ref<string>('')
const notificationClass = ref<string>('')
const isVisible = ref<boolean>(false)

export const useSnackbar = () => {
  const showNotification = (
    m: string,
    t = 'success'
  ) => {
    isVisible.value = false
    if (isVisible.value === false) {
      message.value = m
      notificationClass.value = t
      isVisible.value = true
    }
  }

  const hideNotification = () => {
    isVisible.value = false
  }

  return {
    message,
    isVisible: computed(() => isVisible.value),
    showNotification,
    hideNotification,
    notificationClass: computed(() => notificationClass.value),
  }
}
