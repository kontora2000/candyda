import { ref, computed, } from '@nuxtjs/composition-api'
import axios from 'axios'

const userEmail = ref('admin@duma.one')
const userPass = ref('1234')

const baseURL = ref('http://127.0.0.1:8000')

const isLogin = computed(() => {
  if (process.client) {
    return localStorage.getItem('token') || ''
  }
  return ''
})

const login = async () => {
  const response = await axios.get(baseURL.value + '/auth/login', {
    data: {
      email: userEmail.value,
      password: userPass.value,
    },
    headers: {
      'Content-type': 'application/json',
    },
  })
  if (response.status === 200) {
    userEmail.value = response.data.email
    userPass.value = response.data.pass
    localStorage.setItem('token', response.data.token)
    axios.defaults.headers.Auhtorization = 'Bearer' + response.data.token
  } else {
    console.error('Не удалось авторизоваться')
  }
}

const logout = () => {
  localStorage.removeItem('token')
  window.location.href = '/'
}

export const useAuth = () => {
  return {
    login,
    logout,
    isLogin,
    userEmail,
    userPass,
    baseURL,
  }
}
