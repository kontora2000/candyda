import { ref, } from "@nuxtjs/composition-api"
import { useAxios } from "./axios"
import parser from '@/modules/parser'
import { SearchRequestBody, SearchResults, } from "~/modules/types"

const isSearchOpen = ref(false)
const searchString = ref<string>('')
const searchBlocks = ref([])
const searchResults = ref<SearchResults[]>([])
const searchRequestBody = ref<SearchRequestBody> ({
  tags: [] as Array<string>,
  words: [] as Array<string>,
})
const results = ref([])

export const useSearch = () => {
   
    const { $axios, } =  useAxios()

    const searchRequest = async () => {
      searchRequestBody.value = parser.blocksToRequestBody(searchBlocks.value)
      try {
        const response =  await $axios.post('/search', searchRequestBody.value)
        if (response.status === 200) {
          searchResults.value = response.data
        }
        else {
          console.log('error while search request')
        }
      }
      catch(error) {
        console.error(error)
      }
    }
    
    const parseSearchString = () => {
      searchString.value = parser.sanitizeString(searchString.value)
      const w = parser.stringToWords(searchString.value)
      searchBlocks.value = parser.parseWords(w) as never[]
    }

    const hasResults = ref(false)
    
    const searchInputPlaceholder = ref<string>('Введите округ / район или город / имя кандидата / новость')
    const resetPlaceholder = () => {
      searchInputPlaceholder.value = 'Введите округ / район или город / имя кандидата / новость'
    }

    return {
      isSearchOpen,
      searchString,
      searchBlocks,
      results,
      hasResults,
      searchInputPlaceholder,
      parseSearchString,
      resetPlaceholder,
      searchRequest,
    }
}