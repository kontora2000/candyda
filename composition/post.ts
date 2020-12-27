import { ref, useFetch, } from '@nuxtjs/composition-api'
import axios from 'axios'
import { Post, } from '../modules/types'
import {useSnackbar} from "~/composition/snackbar";

export const usePost = (post: Post, slug: any) => {
  const baseURL = 'http://localhost:8000/api'

  const { showNotification, } = useSnackbar()

  const isSaving = ref(false)

  const local = ref<Post>(post)

  const { fetch: fetchPost, } = useFetch(async () => {
    const response = await axios.get(baseURL + '/post/' + slug)
    local.value = response.data
  })

  const createPost = async () => {
    isSaving.value = true
    try {
      const response = await axios.post(baseURL + '/post/', local.value)
      if (response.status === 200) {
        showNotification('Данные обновлены', 'success')
      } else {
        showNotification('Ошибка при обновлении данных', 'danger')
      }
    } catch (e) {
      console.error(e)
    }
    isSaving.value = false
  }

  const updatePost = async () => {
    isSaving.value = true
    try {
      const response = await axios.put(baseURL + '/post/' + local.value.id, local.value)
      if (response.status === 200) {
        showNotification('Данные обновлены', 'success')
      } else {
        showNotification('Ошибка при обновлении данных', 'danger')
      }
    } catch (e) {
      console.error(e)
    } finally {
      isSaving.value = false
    }
  }

  const deletePost = async (): Promise<boolean> => {
    try {
      const response = await axios.delete(baseURL + '/post/', {
        data: local.value,
      })
      if (response.status === 200) {
        showNotification('Новость успешно удалена', 'success')

        return true
      } else {
        showNotification('Ошибка при обновлении данных', 'danger')
        return false
      }
    } catch (e) {
      console.error(e)
    }
    return false
  }

  return {
    local,
    updatePost,
    deletePost,
    fetchPost,
    createPost,
    isSaving,
  }
}
