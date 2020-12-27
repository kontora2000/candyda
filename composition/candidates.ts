import { useAxios, } from "~/composition/axios";
import { ref, useContext, useFetch, } from "@nuxtjs/composition-api";

import { Candidate, } from "~/modules/types";

export const useCandidateList = () => {
    const { $axios, error,} = useAxios()
    const page = ref(1)
    const candidates = ref<Candidate[]>([])
    const { fetch: fetchCandidates } = useFetch(async () => {
        try {
            candidates.value = await $axios.$get('/candidates/list/' + page)
            page.value = page.value + 1
        }
        catch(e) {
            error({ statusCode: e?.response?.status })
        }
    })
    const { fetch: fetchCandidatesTop } = useFetch(async () => {
        try {
            candidates.value = await $axios.$get('/candidates/top/' + page)
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
    }
}

