// 1 3번째 마다 3의 배수 출력
const arrays = new Array(100).fill(0)
 i=1
for(let array in arrays ){

    i++
    if(i%3 === 0 ){
        arrays[i-1] = i
    }
}
console.log(arrays)

// 2 워드 피라미드
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const alphabets = []
a=0
b=''
for(let a in alphabet ){

    alphabets[a] = b+alphabet[a]
    b = alphabets[a]

}
console.log(alphabets)



// 3, 5  3의 배수 출력 6의 배수는 null로 출력
const x3 = new Array(20)

l=1
for(let c=0; c<x3.length; c++){
    x3[c] = l*3
    l++
    if(x3[c]%6 === 0){
        x3[c] = null
    }
}
console.log(x3)

// 4 알파벳 랜덤 출력
const random = new Array()
function randomStr(n){
    // 구현하기
    
    for(let r=0; r<n; r++){ // r부터 n까지 반복
        randInt = Math.floor(Math.random() * 26)  // 랜덤한 숫자 뽑기
        random[r] = alphabet[randInt]  // random[] 배열에 알파벳 입력
    }
    return random

}

console.log(randomStr(3))
console.log(randomStr(5))
console.log(randomStr(7))


// 6 배열 복사(깊은 복사)
const movies = [
    {title: 'Harry Potter', release: '2003-02-22'}, 
    {title: 'Indiana Jhones', release: '2009-01-09'}, 
    {title: 'Jurassic Park', release: '2007-04-13'},
    {title: 'Iron man', release: '2012-12-18'},
    {title: 'Spider man', release: '2017-03-07'}
]

// JSON.parse(JSON.stringify(movies)) 함수로 깊은 복사 가능
const movies_copied = JSON.parse(JSON.stringify(movies))


// 깊은복사 

// const movies_copied =[...movies]
// for(let index in movies){
//     movies_copied[index] = {title: movies[index].title, release: movies[index].release}
// }

movies[1].title = 'syleemomo' // 원본배열 변경

console.log(movies)
console.log(movies_copied)


// 7 좌우대칭인 단어의 갯수 출력
const words = [
    'abc',
    'animal',
    'fruit',
    'abba',
    'abcba',
    'location',
    'radar',
    'madam',
    'mario',
    'level'
]


function isPalindrome(word) {
    // 구현하기
    let isRight = true
    for(let i=0; i<word.length/2-1; i++){  // 배열의 절반까지만 반복함
        if(word[i] === word[word.length-1-i]){
            continue
        }else{
            return false
        }
    }
    return isRight
}

let cnt = 0
for(let word of words){
    if(isPalindrome(word)) cnt++
}
console.log(cnt)