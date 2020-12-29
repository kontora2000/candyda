export const useHelpers = () => {
    const  numWord = (value: number, words: string[]) => {
        const valueLocal = Math.abs(value) % 100;
        const num = valueLocal % 10;
        if(valueLocal > 10 && valueLocal < 20) return words[2];
        if(num > 1 && num < 5) return words[1];
        if(num == 1) return words[0];
        return words[2];
    }

    return {
        numWord,
    }
}
