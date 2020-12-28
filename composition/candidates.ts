import { useAxios, } from "~/composition/axios";
import { ref, useContext, useFetch, } from "@nuxtjs/composition-api";

import { Candidate, } from "~/modules/types";

export const useCandidateList = () => {
    const { $axios, error,} = useAxios()
    const page = ref(1)
    const candidates = ref<Candidate[]>([])
    const  fetchCandidates = async () => {
        try {
            candidates.value = await $axios.$get('/candidates/list/' + page)
            page.value = page.value + 1
            return candidates.value
        }
        catch(e) {
            error({ statusCode: e?.response?.status })
        }
    }
    const { fetch: fetchCandidatesTop } = useFetch(async () => {
        try {
            const result = await $axios.$get('/candidates/list/' + page.value)
            candidates.value = result.data
            page.value = page.value + 1
        }
        catch(e) {
            error({ statusCode: e?.response?.status })
        }
    })

    return {
        fetchCandidates,
        fetchCandidatesTop,
        candidates,
        page,
    }
}

