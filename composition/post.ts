import { ref, useFetch, } from '@nuxtjs/composition-api'
import axios from 'axios'
import { Post, } from '../modules/types'
import {useSnackbar} from "~/composition/snackbar";
import {useAxios} from "~/composition/axios";

export const usePost = (slug: any) => {
  const { $axios, } = useAxios()

  const post = ref<Post>({} as Post)
  const { fetch: fetchPost, } = useFetch(async () => {
    post.value = await $axios.$get( '/post/' + slug)
  })

  return {
    post,
    fetchPost,
  }
}
