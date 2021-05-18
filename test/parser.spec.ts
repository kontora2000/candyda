import { sanitizeString, splitStringToWords, splitStringToBlocks, requestBodyFromBlocks, } from '@/modules/parser'

describe('String sanitizer', () => {
    test('should replace all nulti-spaces with one space', () => {
        expect(sanitizeString(' word1  word2  ')).toEqual('word1 word2')
    })
    test('should removes all #, @ and `', () => {
        expect(sanitizeString('#word1 word2')).toEqual('word1 word2')
    })
    test('should removes html', () => {
        expect(sanitizeString('<script>some script</script> word2 <b></b>')).toEqual('some script word2')
    })
})