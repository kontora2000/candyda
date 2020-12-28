import { ref, } from "@nuxtjs/composition-api"
import {useAxios} from "./axios"

export  const  useVotes = (candidate) => {
    const voteButtonDisabled = ref(false)
    const { $axios, } = useAxios()
    const isVoted = ref(false)
    const localVotes = ref(candidate.votes)
    const onVote = async () => {
        if (voteButtonDisabled.value &&  !isVoted.value) {
            voteButtonDisabled.value = true
            try {
                const result = await $axios.$post('/vote/' + candidate.slug)
                if (result) localVotes.value = result
                isVoted.value = true
                localStorage.setItem(`${candidate.id}${candidate.slug}`, 'true')
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
    }
}
