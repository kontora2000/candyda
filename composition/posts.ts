import {useAxios} from '@/composition/axios'
import {ref, useContext, } from "@nuxtjs/composition-api"
import { LocationFilter, Post } from "@/modules/types"
import { useLocationFilter, } from "@/composition/filter"

export const usePostList = () => {
    const { $axios, } = useAxios()
    const { error, } = useContext()
    const page = ref(1)
    const  isNeedToUpload = ref(false)
    const posts = ref<Post[]>([])

    const { locationFilter, } = useLocationFilter()

    const fetchPosts  = async () => {
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

    const filterPosts = async (filter: LocationFilter, ) => {
      try {
        const result = await $axios.post('/post/filter?page=' + page.value, filter )
        isNeedToUpload.value = result.data.last_page !== page.value
        posts.value = page.value === 1 ? result.data.data : [...posts.value,...result.data.data]
        page.value = isNeedToUpload ? page.value + 1 : page.value
    }
      catch(e) {
        error({ statusCode: e?.response?.status })
      }
    }

    const fetchPostsByLocation = async (slug:string, type = 'region') => {
      try {
        const result = await $axios.get(`/post/by_${type}/${slug}?page=${page.value}` )
        isNeedToUpload.value = result.data.last_page !== page.value
        posts.value = page.value === 1 ? result.data.data : [...posts.value,...result.data.data]
        page.value = isNeedToUpload ? page.value + 1 : page.value
    }
      catch(e) {
        console.error(e)
      }
    }

  
    const  upload = async ($state) => {
        try {
            if (locationFilter.value.region !== '' ) {
              filterPosts(locationFilter.value)
            }
            else {
              const result = await $axios.get('/post/list?page=' + page.value )
              isNeedToUpload.value = result.data.last_page !== page.value
              posts.value = page.value === 1 ? result.data.data : [...posts.value,...result.data.data]
              page.value = isNeedToUpload.value ? page.value + 1 : page.value  
            }
        }
        catch(e) {
            error({ statusCode: e?.response?.status })
        }
    }
    
    const  onScroll = async ($state) => {
        try {
            const result = await $axios.get('/post/list?page=' + page.value )
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
        filterPosts,
        fetchPostsByLocation,
        page,
        upload,
        onScroll,
        isNeedToUpload,
    }
}
