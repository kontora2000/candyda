import { ref, } from "@nuxtjs/composition-api"
import {useAxios} from "./axios"

export  const  useVotes = (slug) => {
    const voteButtonDisabled = ref(false)
    const isLoading = ref(false)
    const { $axios, } = useAxios()
    const isVoted = ref(false)
    const localVotes = ref<number>(0)

    const onVote = async (slug) => {
        isLoading.value = true
        if (!voteButtonDisabled.value &&  !isVoted.value) {
            voteButtonDisabled.value = true
            try {
                const result = await $axios.$post('candidates/vote/' + slug)
                isLoading.value = false
                if (result) localVotes.value = result
                isVoted.value = true
                localStorage.setItem(`${slug}`, 'true')
            }
            catch (e) {
                console.error(e)
            }
        }
    }
    return {
        isVoted,
        voteButtonDisabled,
        onVote,
        localVotes,
        isLoading,
    }
}
