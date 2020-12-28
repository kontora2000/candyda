import {useAxios} from "~/composition/axios";
import {ref, useContext, useFetch} from "@nuxtjs/composition-api";
import { Post } from "~/modules/types";

export const usePostList = () => {
    const { $axios, } = useAxios()
    const { error, } = useContext()
    const page = ref(1)
    const posts = ref<Post[]>([])
    const { fetch: fetchPosts } = useFetch(async () => {
        try {
            const result = await $axios.get('/post/list/' + page.value )

            posts.value = result.data.data
            page.value = page.value + 1
        }
        catch(e) {
            error({ statusCode: e?.response?.status })
        }
    })




    return {
        posts,
        fetchPosts,
        page,
    }
}
