// 반복문을 사용하지 않는 배열요소 조회 및 처리

const currentTime = [3, 8, 23]  // 시, 분, 초
const timeStr = []

function addZero(time){
    timeStr.push(`${time < 10 ? '0' + time : time}`)
}

currentTime.forEach(addZero)  // forEach를 이용해 데이터 재가공

console.log('********* CURRENT TIME *********')
console.log(timeStr.join(':'))
console.log('***********************************')

/* ---------------------------------------------------- */

// const userIDs = ['victoria', 'sun', 'johseb', 'syleemomo', 'hannah', 'shara', 'martin', 'gorgia', 'nana', 'dannel']

// console.log('********* USER EMAIL LIST *********')
// function addDotCom(userID){
//     console.log(userID + '@gmail.com')
// }

// userIDs.forEach(addDotCom) // forEach를 이용해 데이터 재가공
// console.log('***********************************')


/* ------------------------------------------------------- */

const numbers = [1,2,3,4,5]

function multiplyByThree(n){
    return n*3
}

const numbersRefined = numbers.map(multiplyByThree)
console.log(numbersRefined)

/* -------------------------------------------------------- */

// map 함수

const userEmails = [
    'victoria@gmail.com',
    'sun@gmail.com',
    'johseb@gmail.com',
    'syleemomo@gmail.com',
    'hannah@gmail.com',
    'shara@gmail.com',
    'martin@gmail.com',
    'gorgia@gmail.com',
    'nana@gmail.com',
    'dannel@gmail.com'
]

function removeDotCom(userEmail){
    return userEmail.split('@')[0]
}

function displayUserID(userID){
    console.log(userID)
}

const userIDs = userEmails.map(removeDotCom)
console.log('********* USER ID LIST *********')
userIDs.forEach(displayUserID)
console.log('********************************')