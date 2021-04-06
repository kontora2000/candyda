import {ref, useContext, useFetch,} from '@nuxtjs/composition-api'
import { Post, } from '../modules/types'
import { useAxios, } from '~/composition/axios'
import { useHelpers, } from '~/composition/helpers'

export const usePost = () => {
  const { $axios, error} = useAxios()

  const { route, } = useContext()
  const slug=route.value.params.slug

  const postDate = ref()

  const { humanDateDiff, } = useHelpers()

  const post = ref<Post>({} as Post)
  const { fetch: fetchPost, } = useFetch(async () => {
    try {
      post.value = await $axios.$get( '/post/' + slug)
      if (!post.value.slug) 
      error({statusCode: 404, })
      post.value.date = humanDateDiff(post.value.post_date)
      postDate.value = humanDateDiff(post.value.post_date)
    }
    catch(e) {
      error({ statusCode:e?.status, message: e?.message })
    }
  })


  return {
    post,
    fetchPost,
    postDate,
  }
}
