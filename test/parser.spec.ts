import { sanitizeString, splitStringToWords, splitStringToBlocks, requestBodyFromBlocks, } from '@/modules/parser'

describe('String sanitizer', () => {
    test('should replace all nulti-spaces with one space', () => {
        expect(sanitizeString(' word1  word2  ')).toEqual('word1 word2')
    })
    test('should removes all #, @ and `', () => {
        expect(sanitizeString('##word1 @word2`')).toEqual('#word1 word2')
    })
    test('should removes html', () => {
        expect(sanitizeString('<script>some XXS script</script> word2 <b></b>')).toEqual('some XXS script word2')
    })
})

describe('Search string to blocks parser', () => {
  test('should merge words in phrases', () => {
    expect(splitStringToBlocks(' Unit testing is    awesome  ')).toEqual(['unit testing is awesome']);
  })
  test('should return array of strings if has tag', () => {
    expect(splitStringToBlocks(' word1  #word2  ')).toEqual(['word1', '#word2']);
  })
})

describe('String to words array splitter', () => {
  test('should correctly split into words', () => {
    expect(splitStringToWords(' Unit testing is    awesome #tag ')).toEqual(['unit', 'testing', 'is' , 'awesome', '#tag']);
  })
})

describe('Search blocks parser', () => {
  test('should correctly create request body from blocks', () => {
    expect(requestBodyFromBlocks(['word1', 'I am very good at unit testing', '#tag1', '#tag2'])).toEqual({
      words: [
        'word1',
        'I am very good at unit testing'
      ],
      tags: [
        'tag1',
        'tag2'
      ]
    });
  })
  test('should place tags in tags array in request body', () => {
    expect(requestBodyFromBlocks(['#tag1', '#tag2'])).toEqual({
      words: [],
      tags: [
        'tag1',
        'tag2'
      ]
    });
  })
})

