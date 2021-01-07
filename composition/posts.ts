import {useAxios} from "~/composition/axios";
import {ref, useContext, useFetch} from "@nuxtjs/composition-api";
import { Post } from "~/modules/types";

export const usePostList = () => {
    const { $axios, } = useAxios()
    const { error, } = useContext()
    const page = ref(1)
    const  isNeedToUpload = ref(false)
    const posts = ref<Post[]>([])
    const { fetch: fetchPosts } = useFetch(async () => {
        try {
            const result = await $axios.get('/post/list/' + page.value )
            isNeedToUpload.value = result.data.next_page_url !== null
            posts.value = result.data.data
            console.log(isNeedToUpload.value)
            page.value = isNeedToUpload ? page.value : page.value + 1
        }
        catch(e) {
            error({ statusCode: e?.response?.status })
        }
    })

    return {
        posts,
        fetchPosts,
        page,
        isNeedToUpload,
    }
}
