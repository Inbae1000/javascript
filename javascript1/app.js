/*
// 문자열 이스케이핑
const message = "she dosen't look like a girtly type"
console.log(message)

const message2 = 'she dosen\t like a girly type'
console.log(message2)
*/

/*
// 문자열 연결하기
const name = "gong"
const message = 'Happy birthday!' + name
const message2 = `Happy birthday! ${name}~ Your age is ${23}` // 템플릿 리터럴 (`) 1옆에 있는거 써야함

console.log(message)
console.log(message2)
*/

/*
// 여러줄에 걸쳐서 문자열 선언하기
const message = 'Happy birthday! \n\
\t\I hope you have a great day today!\n\
You are amazing guy for me ^^'  // \n\ 줄 바꾸기 \t\ tab
console.log(message)
*/

/*
// 객체
const person = { // 객체 리터럴 선언
    name: 'gong', // 문자열
    age : 23, //숫자
    isActive : false //불리언
} 
console.log(person)
*/

/*
// 배열
const numbers = [0,1,2,3,4,5,6,7,8,9]
console.log(numbers)
*/

/*
// 자바스크립트 배열도 객체이다
const numbers = [0, "apple", 2, true, 4, 5, 3.6484, 7,8,9]
console.log(numbers)
*/

/*
// 자료형을 인식하지 못하는 경우
const isLoading = true
const person = null  // 특수한 자료형 null은 어떠한 값도 저장하지 않는다는 의미
let city

console.log(isLoading)
console.log(person)
console.log(city)
*/

/*
// 자료형 검사하기 (타입 체크)
const age = 23
const msg = "hello world"
const isLoading = true

console.log(typeof age)
console.log(typeof msg)
console.log(typeof isLoading)
*/

/*
const fruits = ["apple", "banana", "orange"]
const car = {
    name : "Grandier",
    year : 2016,
    owner : 'gong'
}

console.log(Array.isArray(fruits))
console.log(Array.isArray(car))
*/

/*
function changeName(){ //빈 함수

}
console.log(typeof changeName)
*/

/*
// 숫자형에서 정수형과 실수형 구분하기
const age = 27
const temperature = 32.7

console.log(Number.isInteger(age))
console.log(Number.isInteger(temperature))
*/

/*
// 숫자형으로 변환하기
const age = "27"
const temperature = "32.7"
const msg = "hello world 237"

const age_casted = Number(age)
const temp_casted = Number(temperature)
const msg_casted = Number(msg)

console.log(typeof age)
console.log(typeof age_casted)
console.log(age_casted)

console.log(typeof temperature)
console.log(typeof temp_casted)
console.log(temp_casted)

console.log(typeof msg)
console.log(typeof msg_casted)
console.log(msg_casted)
*/

/*
const msg = "hello world 359"
const msg2 = "359 hello world"

const msg_casted = parseInt(msg)
const msg2_casted = parseInt(msg2)

console.log(msg_casted)
console.log(msg2_casted)
*/

/*
const temp = "degree 23.9"
const temp2 = "23.9 degree"

const temp_casted = parseFloat(temp)
const temp2_casted = parseFloat(temp2)

console.log(temp_casted)
console.log(temp2_casted)
*/

/*
// 문자형으로 변환하기 or 논리형으로 변환하기
// toString 문자형, Boolean 논리형
const age = 17
const temp = 23.9
const isLoading = false
const numbers = [1,2,3,4,5]
const person = {
    name : 'sunrise',
    city : 'seoul'
}

const age_casted = Boolean(age)
const temp_casted = Boolean(temp)
const isLoading_casted = Boolean(isLoading)
const numbers_casted = Boolean(numbers)
const person_casted = Boolean(person)

console.log(age_casted)
console.log(typeof age_casted)

console.log(temp_casted)
console.log(typeof temp_casted)

console.log(isLoading_casted)
console.log(typeof isLoading_casted)

console.log(numbers_casted)
console.log(typeof numbers_casted)

console.log(person_casted)
console.log(typeof person_casted)
*/

/*
// 자동 형변환
const n = 31 + "3"
const n2 = 31 * "3"

console.log(n)
console.log(n2)
*/


// 연습문제

/*
// 1번
let s = 360000
console.log(s)
*/

/*
// 2번
let shoesSize = 275
console.log(shoesSize)
*/

/*
// 3번
const PI = 3.14
console.log(PI)
*/

/*
// 4번
const name = "sunrise"
const message = "Happy halloween, "

console.log(message + name)
*/

/*
// 5번
const letter = 'Dear syleemomo. \n\
Hello, syleemomo ^^ \n\
My name is kiki. Your sincere friend \n\
How are you thesedays? \n\
Are you busy or not? \n\
I guess you haven\'t sleep much last night \n\
I am spending good day thesedays ! \n\
I hope to see you soon. See you later :)'

console.log(letter)
*/

// 6번
//const favoriteFoods = ["짜장면", "짬뽕", "햄버거"]

/*
// 8번
const hoursForDay = 24
const bookName = "Harry Potter"
const isChecked = true

console.log(typeof hoursForDay)
console.log(typeof bookName)
console.log(typeof isChecked)
*/

/*
// 9번
const cities = ["seoul", "daegu", "busan"]
const bookInfo = {
    name : 'Harry Potter',
    price : 17000,
    author : 'J.K Rolling'
}

console.log (Array.isArray(cities))
console.log (Array.isArray(bookInfo))
*/

/*
// 10번
const distanceSeoulToBusan = 370
const sizeOfYourHeight = 275.9

console.log(Number.isInteger(distanceSeoulToBusan))
console.log(Number.isInteger(sizeOfYourHeight))
*/

/*
// 11번
const speedOfCar = "37.5 m/s"
const heightOfYourFriend = "289 cm"

console.log(parseInt(speedOfCar))
console.log(parseFloat(heightOfYourFriend))
*/

/*
// 12번
const heightOfYourFriend =289
const temperature = 13.9
const fruits = ["apple", "banana", "orange"]

console.log(heightOfYourFriend.toString())
console.log(temperature.toString())
console.log(fruits.toString())
*/