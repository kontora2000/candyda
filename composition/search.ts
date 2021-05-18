import { ref, } from '@nuxtjs/composition-api'
import { useAxios, } from './axios'
import { sanitizeString, splitStringToWords, requestBodyFromBlocks,  } from '@/modules/parser'
import { SearchRequestBody, SearchResults, } from '@/modules/types'

const isSearchOpen = ref(false)
const searchString = ref('')
const searchBlocks = ref<string[]>([])
const searchResults = ref<SearchResults[]>([])
const searchRequestBody = ref<SearchRequestBody> ({
  tags: [] as Array<string>,
  words: [] as Array<string>,
})

export const useSearch = () => {
   
    const { $axios, } =  useAxios()

    const searchRequest = async () => {
      searchRequestBody.value = requestBodyFromBlocks(searchBlocks.value)
      try {
        const response =  await $axios.post('/search', searchRequestBody.value)
        if (response.status === 200) {
          searchResults.value = response.data
          console.log(searchResults.value)
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
      searchString.value = sanitizeString(searchString.value)
      const w = splitStringToWords(searchString.value)
      if (searchBlocks.value?.length === 0 ) {
          searchBlocks.value = parser.parseWords(w)  as never[]
      }
      else {
        searchBlocks.value = Array.from(new Set([...searchBlocks.value, ...w])) as never[]
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
      searchResults,
      hasResults,
      searchInputPlaceholder,
      searchInputPadding,
      parseSearchString,
      resetPlaceholder,
      searchRequest,
    }
}