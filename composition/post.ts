import {ref, useContext, useFetch,} from '@nuxtjs/composition-api'
import { Post, } from '../modules/types'
import {useAxios} from "~/composition/axios";
import moment from  'moment'

export const usePost = () => {
  const { $axios, error} = useAxios()

  const { route,} = useContext()
  const slug=route.value.params.slug

  const postDate = ref()

  const post = ref<Post>({} as Post)
  const { fetch: fetchPost, } = useFetch(async () => {
    post.value = await $axios.$get( '/post/' + slug)
    if (!post.value.slug) error({statusCode: 404, })
    moment.locale('ru')
    postDate.value = moment(post.value.created_at).format('DD MMMM YYYY в HH:MM')
    post.value.date = moment(post.value.created_at).format('DD MMMM YYYY в HH:MM')

  })




  return {
    post,
    fetchPost,
    postDate,
  }
}
