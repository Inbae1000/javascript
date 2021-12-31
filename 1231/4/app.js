// includes(검색할 값)

const seasons = ['spring', 'summer', 'autumn', ' winter']

console.log(seasons.includes('summer'))   // true
console.log(seasons.includes('cat'))  // false

// filter(판별함수)

// const words = ['car', 'paper', 'mobile', 'computer', ' school', 'sun', 'house']

// function isShort(word){
//     return word.length < 5  // words 배열에서 길이가 5보다 작은 모든 배열요소로 새로운 배열을 만들어 반환한다.
// }

// const wordsFiltered = words.filter(isShort)

// console.log(wordsFiltered)


// const words = ['car', 'paper', 'mobile', 'computer', 'school', 'sun', 'house']

// function isShort(word){
//     if(word.length < 5 ) return true
//     else return false
// }

// const wordsFiltered = words.filter(isShort)

// console.log(wordsFiltered)



const numbers = [32, 6, 4, 13, 9, 57]

function isMultiplyByThree(element){
    return element % 3 === 0
}

console.log(numbers.every(isMultiplyByThree))