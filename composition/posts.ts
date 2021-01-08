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
            const result = await $axios.get('/post/list?page=' + page.value )
            isNeedToUpload.value = result.data.last_page !== page.value
            posts.value = page.value === 1 ? result.data.data : [...posts.value,...result.data]
            page.value = isNeedToUpload ? page.value + 1 : page.value
        }
        catch(e) {
            error({ statusCode: e?.response?.status })
        }
    })

    const  upload = async () => {
        try {
            const result = await $axios.get('/post/list?page=' + page.value )
            isNeedToUpload.value = result.data.last_page !== page.value
            posts.value = page.value === 1 ? result.data.data : [...posts.value,...result.data]
            page.value = isNeedToUpload ? page.value + 1 : page.value
        }
        catch(e) {
            error({ statusCode: e?.response?.status })
        }
    }

    return {
        posts,
        fetchPosts,
        page,
        upload,
        isNeedToUpload,
    }
}
