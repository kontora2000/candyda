import { ref, } from '@nuxtjs/composition-api'

import { SearchRequestBody, SearchResults, } from '@/modules/types'
import { sanitizeString, splitStringToWords, requestBodyFromBlocks, wordsToSearchBlocks,  } from '@/modules/parser'
import { useAxios, } from './axios'


const isSearchOpen = ref(false)
const searchString = ref('')
const searchBlocks = ref<string[]>([])
const searchResults = ref<SearchResults[]>([])
const searchRequestBody = ref<SearchRequestBody> ({
  tags: [] as Array<string>,
  words: [] as Array<string>,
})

export const useSearch = () => {
  const searchInputPlaceholder = ref<string>('Введите округ / район или город / имя кандидата / новость')
  const resetPlaceholder = () => {
    searchInputPlaceholder.value = 'Введите округ / район или город / имя кандидата / новость'
  }
  const searchInputPadding = ref<string>('6rem')

  const parseSearchString = () => {
    searchString.value = sanitizeString(searchString.value)
    debugger
    const w = splitStringToWords(searchString.value)
    if (searchBlocks.value?.length === 0 ) {
        searchBlocks.value = wordsToSearchBlocks(w)
    }
    else {
      searchBlocks.value = Array.from(new Set([...searchBlocks.value, ...w]))
    }
  }

  const { $axios, } =  useAxios()
  const hasResults = ref(false)
  const searchRequest = async () => {
    searchRequestBody.value = requestBodyFromBlocks(searchBlocks.value)
    try {
      const response =  await $axios.post('/search', searchRequestBody.value)
      if (response.status === 200) {
        searchResults.value = response.data
      }
      else {
        console.error('error while search request')
      }
    }
    catch(error) {
      console.error(error)
    }
  }

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