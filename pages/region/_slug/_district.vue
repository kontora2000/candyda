<template>
 <div>
    <news-block />
    <PArtyBlock />
    <candidate-top />
 </div>
</template>
<script>
import { defineComponent, } from '@nuxtjs/composition-api'
import CandidateTop from '@/components/Generic/CandidateTop/CandidateTop.vue'
import NewsBlock from '@/components/Generic/NewsBlock/NewsBlock.vue'
import PartyBlock from '@/components/Party/PartyBlock.vue'

export default defineComponent({
    components: { CandidateTop, NewsBlock, PartyList, PartyBlock, },
    layout: 'map',
    transition: 'fade',
    components: {
        NewsBlock,
        PartyBlock,
        CandidateTop,
    },
    setup () {
        const district = useDistrict()
        return {
            candidates, 
            posts,
        }
    },
})
</script>
