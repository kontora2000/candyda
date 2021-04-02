import { useContext, } from '@nuxtjs/composition-api'
import { NuxtAxiosInstance, } from '@nuxtjs/axios'

export function useAxios (): any {
  const { $axios, error, } = useContext()
  if (!$axios) {
    throw new Error('nuxt axios is not defined!')
  }
  const baseURL = process.env.API_URL
  return {
    $axios,
    baseURL,
    error,
  }
}
