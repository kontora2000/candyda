<template>
 <div>

 </div>
</template>
<script>
import { defineComponent, } from '@nuxtjs/composition-api'
import { useCandidateList, } from '~/composition/candidates'
import { usePostList, } from '~/composition/posts'


export default defineComponent({
    layout: 'map',
    transition: 'fade',
    setup () {
        const { candidates, } = useCandidateList()
        const { posts, } = usePostList()
        return {
            candidates, 
            posts,
        }
    },
})
</script>
