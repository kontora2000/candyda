import { ref, } from "@nuxtjs/composition-api"
import { useAxios } from "./axios"
import parser from '@/modules/parser'

const searchString = ref<string>('')
const searchBlocks = ref([])
const results = ref([])

export const useSearch = () => {
   
    const { $axios, } =  useAxios()

    const doSearch = () => {
        return
    }

    return {
      searchString,
      searchBlocks,
      results,
    }
}