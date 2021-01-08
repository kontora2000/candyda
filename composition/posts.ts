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

    const  upload = async ($state) => {
        try {
            const result = await $axios.get('/post/list?page=' + page.value )
            isNeedToUpload.value = result.data.last_page !== page.value
            posts.value = page.value === 1 ? result.data.data : [...posts.value,...result.data.data]
            page.value = isNeedToUpload.value ? page.value + 1 : page.value

        }
        catch(e) {
            error({ statusCode: e?.response?.status })
        }
    }

    const  onScroll = async ($state) => {
        try {
            const result = await $axios.get('/post/list?page=' + page.value )
            debugger
            isNeedToUpload.value = result.data.last_page !== page.value
            posts.value = page.value === 1 ? result.data.data : [...posts.value,...result.data.data]
            page.value = isNeedToUpload.value ? page.value + 1 : page.value
            if ($state && !isNeedToUpload.value) $state.complete()
            if ($state && isNeedToUpload.value) $state.loaded();
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
        onScroll,
        isNeedToUpload,
    }
}
