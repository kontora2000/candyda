import { SearchRequestBody,  } from '@/modules/types'

/**
 * Удаляет из строки специальные символы, html-символы и т.д.
 * @param s входная строка
 * @param toLower флаг преобразования в lower case
 * @returns санитизированную строку
 */
export const sanitizeString = (s: string, toLower = true) => {
    
    s = s.trim().replace(/\s+/g, ' ')
    s = s.replace(/(<([^>]+)>)/ig, '')
    s = s.replace(/(#|@|`|")+/g, '')
    return toLower ? s.toLowerCase() : s
}

/**
 * Рзабивает строку на строки, разделитель - пробел
 * @param s - входная строка
 * @returns массив строк
 */
export const splitStringToWords = (s: string) => {
  if (s.trim() === '') { return [] }
    const w = sanitizeString(s).split(' ')
    return w.filter(w => w.trim() !== '')
}

/**
 *  Преобразует массив строк в массив фразы и тэгов (блоки поиска)
 * @param w массив строк-слов
 * @returns массив фраз и тэгов
 */
export const wordsToSearchBlocks = (w: string[]) => {
  let phrase: string = ''
  const blocks: string[] = []
  w = Array.from(new Set(w))
  for (const word of w) {
      if (word[0] === '#') {
          if (phrase !== '') {
              blocks.push(phrase)
              phrase = ''
          }
          blocks.push(word)
          continue
      }
      if (phrase === '') { phrase = word } else { phrase += (' ' + word) }
  }
  if (phrase !== '') { blocks.push(phrase) }
  return blocks
}

/**
 * Парсить строку в блоки поиска
 * @param s  входная строка
 * @returns блоки поиска либо false, если парсить нечего
 */
 export const splitStringToBlocks = (s: string) :string[] | boolean => {
  if (s.trim() === '') { return false }
  const words = splitStringToWords(s)
  const blocks = wordsToSearchBlocks(words)
  return blocks
}

/**
 * Получет Rest-строку из массива блоков
 * @param b входной массив тэгов и фраз (блоков поиска)
 * @returns строку Rest-запроса для Wordpress
 */
export const restStringFromBlocks = (b: string[]) => {
  const fullString: string[] = []
  const tags: string[] = []
  const authors: string[] = []
  const blocks = Array.from(new Set(b))
  for (const block of blocks) {
      if (block[0] === '#') {
          tags.push(block.replace('#', ''))
          continue
      }
      if (block[0] === '@') {
          authors.push(block.replace('@', ''))
          continue
      }
      fullString.push(block)
  }
  let restSearchString = '/s?'
  if (fullString.length > 0) {
      restSearchString += ('&w=' + fullString.join(','))
  }
  if (tags.length > 0) {
      restSearchString += ('&t=' + tags.join(','))
  }
  if (authors.length > 0) {
      restSearchString += ('&a=' + authors.join(','))
  }
  if (restSearchString === 's?') { return false }
  return restSearchString
}

/**
 * Преобразует массив блоков в массив SearchRequestBoydy (см types)
 * @param b входной массив тэгов и фраз (блоков поиска)
 * @returns строку блок для Wordpress
 */
export const requestBodyFromBlocks = (b: string[]) : SearchRequestBody => {
  const tags: string[] = []
  const words: string[] = []
  for (const block of b) {
      if (block[0] === '#') {
          tags.push(block.replace('#', ''))
          continue
      }
      else {
          words.push(block)
      }
  }
  return {
      words, 
      tags,
  }
}

/**
 * Пеобразует блоки в URL выполнения поиска после обнолвления страницы
 * @param blocks 
 * @returns 
 */
export const searchBlockstoURL  = (blocks: string[]) => {
  return encodeURIComponent(JSON.stringify(blocks))
}

/**
 * Пеобразует URL в блоки для выполнения поиска
 * @param blocks 
 * @returns 
 */
export const URLtoSearchBlocks  = (url: string) => {
  return JSON.parse(decodeURIComponent(url))
}




