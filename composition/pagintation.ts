import { ref, } from '@nuxtjs/composition-api'

export const usePagination = () => {
  const page = ref(1)
  const isNeedToUpload = ref(false)
  const isLoading = ref(false)

  return {
    page,
    isNeedToUpload,
    isLoading,
  }
}