const fruits = ['apple', 'banana', 'orange', 'watermelon']

function longest(element){
    return element.length >6 // 6글자초과 반환
}

const found = fruits.find(longest)
const foundIn = fruits.findIndex(longest)

console.log(found)  // 단어 출력
console.log(foundIn)  // index 값 출력