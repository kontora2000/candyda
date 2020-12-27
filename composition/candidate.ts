import { ref, computed, } from '@nuxtjs/composition-api'
import { Candidate, } from '@/modules/types.ts'
import { useSnackbar, } from '~/composition/snackbar'
import { useAxios, } from './axios'

export const useCandidate = (candidate: Candidate, slug: string) => {
  const { showNotification, } = useSnackbar()
  const isSaving = ref(false)
  const local = ref(candidate)
  const { $axios, } = useAxios()

  const fetch = async () => {
    try {
      const response = await $axios.get('/candidates/' + slug)
      if (response.status === 200) {
        local.value = response.data
      }
    } catch (e) {
      showNotification('Ошибка при обновлении данных', 'danger')
      console.error(e)
    }
  }

  const create = async (): Promise <Candidate | boolean> => {
    try {
      const response = await $axios.post('candidate/', {
        data: local.value,
      })
      if (response.status === 200) {
        showNotification('Данные обновлены', 'success')
        local.value = response.data
        return local.value
      } else {
        showNotification('Ошибка при обновлении данных', 'danger')
        return false
      }
    } catch (e) {
      console.error(e)
    }
    return false
  }

  const update = async () => {
    isSaving.value = true
    try {
      const response = await $axios.put('/candidate/' + local.value.slug, {
        data: local.value,
      })
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

  const del = async (): Promise <boolean> => {
    try {
      const response = await $axios.delete('/candidate/' + local.value.slug)
      if (response.status === 200) { local.value = {} as Candidate }
        showNotification('Ошибка сервера при удалении кандидата, попробуйте позже')
      return true
    } catch (e) {
      showNotification('Ошибка при удалении кандидата')
      console.error(e)
    }
    return false
  }

  const vote = async () => {
    try {
      const response = await $axios.delete('/candidate/vote/' + local.value.slug)
      if (response.status === 200) { local.value = {} as Candidate }
        showNotification('Ошибка сервера, попробуйте позже')
      return true
    } catch (e) {
      showNotification('Ошибка при удалении кандидата')
      console.error(e)
    }
    return false
  }

  return {
    local: computed(() => local.value),
    isSaving,
    create,
    update,
    del,
    fetch,
    vote,
  }
}
