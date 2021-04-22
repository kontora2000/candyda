import { ref, } from "@nuxtjs/composition-api"
import {useAxios} from "./axios"

export  const  useVotes = (slug) => {
    const voteButtonDisabled = ref(false)
    const isLoading = ref(false)
    const { $axios, } = useAxios()
    const isVoted = ref(true)
    const localVotes = ref<number>(0)
    const localNum = ref<number>()

    const onVote = async (slug) => {
        isLoading.value = true
        if (!voteButtonDisabled.value &&  !isVoted.value) {
            voteButtonDisabled.value = true
            try {
                const result = await $axios.$post('candidates/vote/' + slug)
                isLoading.value = false
                if (result) {
                  debugger
                  localVotes.value = result.votes
                  isVoted.value = true
                  localNum.value = result.num
                  localStorage.setItem(`${slug}`, 'true')
                }
             
            }
            catch (e) {
                console.error(e)
            }
        }
    }
    return {
        isVoted,
        voteButtonDisabled,
        localVotes,
        localNum,
        isLoading,
        onVote,
    }
}
