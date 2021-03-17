import moment from "moment"

export const useHelpers = () => {
    const  numWord = (value: number, words: string[]) => {
        if (!value) return ''
        const valueLocal = Math.abs(value) % 100;
        const num = valueLocal % 10;
        if(valueLocal > 10 && valueLocal < 20) return words[2];
        if(num > 1 && num < 5) return words[1];
        if(num == 1) return words[0];
        return words[2];
    }

    const humanDateDiff = (date:string):string => {
        moment.locale('ru')
        const momentDate = moment(date)
        const dayDiff = moment().diff(momentDate, 'days')
        const hoursDiff = moment().diff(momentDate, 'hours')
        const minutesDiff = moment().diff(momentDate, 'minutes')
        if (dayDiff === 0 && hoursDiff === 0 && minutesDiff === 0)  {  return  'Менее минуты назад'}
        if (dayDiff === 1) {
            return momentDate.format('Вчера в HH:mm')
        }
        if (dayDiff === 0 && hoursDiff > 0) {
            return `${hoursDiff} ${numWord(hoursDiff, ['час', 'часа', 'часов'])} назад`
        }
        if (dayDiff === 0 && hoursDiff === 0 && minutesDiff > 0) {
            return minutesDiff + ' ' + numWord(minutesDiff, ['минуту', 'минуты', 'минут']) + ' ' + 'назад'
        }
        return momentDate.format('D MMMM YYYY в HH:MM')
    }

    const randomInRange = (min: number, max: number) => {
      return Math.floor(Math.random() * max) + min  
    }

    const generateKey = (id: number) => {
      return  Symbol(Date.now())
    }

    return {
        numWord,
        humanDateDiff,
        randomInRange,
        generateKey,
    }
}
