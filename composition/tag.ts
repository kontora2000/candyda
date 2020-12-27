import { ref, } from '@nuxtjs/composition-api'
import { useSnackbar, } from '@/composition/snackbar'
import axios from 'axios'

import { Tag, } from '@/modules/types'

export const useTag = (tag: Tag) => {
  const baseURL = process.env.baseURL || 'http://localhost:8000'

  const local = ref<Tag>(tag)
  const isSaving = ref<boolean>(false)
  const { showNotification, } = useSnackbar()

  const createTag = async () => {
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

  const updateTag = async () => {
    isSaving.value = true
    try {
      const response = await axios.put(baseURL + '/tag/', local.value)
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

  const deleteTag = async (): Promise<boolean> => {
    try {
      const response = await axios.delete(baseURL + '/tag/', {
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
    createTag,
    updateTag,
    deleteTag,
    local: tag,
  }
}
