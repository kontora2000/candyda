import { ref, } from "@nuxtjs/composition-api"
import { useAxios } from "./axios"
import parser from '@/modules/parser'
import { SearchRequestBody } from "~/modules/types"

const isSearchOpen = ref(false)
const searchString = ref<string>('')
const searchBlocks = ref<string[]>([])
const searchRequestBody = ref<SearchRequestBody> ({
  tags: [] as Array<string>,
  words: [] as Array<string>,
})
const results = ref([])

export const useSearch = () => {
   
    const { $axios, } =  useAxios()

    const searchRequest = () => {

    }
    
    const parseSearchString = () => {
      searchString.value = parser.sanitizeString(searchString.value)
      const w = parser.stringToWords(searchString.value)
      if (searchBlocks.value?.length === 0 ) {
          searchBlocks.value = parser.parseWords(w) 
      }
      else {
        searchBlocks.value = Array.from(new Set([...searchBlocks.value, ...w]))
      }
    }

    const hasResults = ref(false)
    
    const searchInputPlaceholder = ref<string>('Введите округ / район или город / имя кандидата / новость')
    const resetPlaceholder = () => {
      searchInputPlaceholder.value = 'Введите округ / район или город / имя кандидата / новость'
    }

    const searchInputPadding = ref<string>('6rem')

    return {
      isSearchOpen,
      searchString,
      searchBlocks,
      results,
      hasResults,
      searchInputPlaceholder,
      searchInputPadding,
      parseSearchString,
      resetPlaceholder,
    }
}