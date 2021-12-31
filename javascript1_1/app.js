/*
const div = document.createElement('div')
div.className = "container"
div.innerText = "Hello world"

console.log(div) // 요소 ( element) 출력
console.dir(div) // DOM 의 전체 프로퍼티 출력
*/

/*
const input = document.createElement('input')
input.className = "search-img"
input.type = "text"
input.placeholder = "search ..."

console.log(input)
*/

/*
const div = document.createElement('div')
div.className = 'container'
div.innerHTML = "<img src ='' alt=''/> <p> You have happy family</p>"

console.log(div)
*/

/*
const img = document.createElement('img')
img.src = 'http://localhost:3000'
img.alt = 'javascript'

console.log(img)

//img => DOM 객체
*/

/*
const div = document.createElement('div')
div.className = "container"
div.innerHTML = "<img scr='' alt=''/> \ <p>You have happy family</p>"

console.dir(div) //DOM 객체의 프로퍼티 확인
*/

/*
// 부모 요소에 접근하기
const photos = document.querySelectorAll('.photo-item')

console.log(photos[0].closest('#photo-container'))
*/

/*
// 자식 요소에 접근하기
const parent = document.querySelector('.parent')
console.log(parent.children)
*/

/*
// 자식 노드(node)에 접근하기
const parent = document.querySelector('.parent')
console.log(parent.childNodes)
*/

/*
// 부모의 첫번째 자식요소 검색
const parent = document.querySelector('.parent')
console.log(parent.firstElementChild)
*/

/*
// 부모의 첫번째 노드(node) 검색
const parent = document.querySelector('.parent')
console.log(parent.firstChild)
*/

/*
// 부모의 마지막 자식요소 검색
const parent = document.querySelector('.parent')
console.log(parent.lastElementChild)
*/

/*
// 부모의 마지막 노드(node) 검색
const parent = document.querySelector('.parent')
console.log(parent.lastChild)
*/

/*
// img 요소의 다음 형제요소 (element) 검색
const img = document.querySelector('#photo')
console.log(img.nextElementSibling)
*/

/*
// img 요소의 다음 형제노드 (node) 검색
const img = document.querySelector('#photo')
console.log(img.nextSibling)
*/

/*
// 이전 형제요소 검색하기
const img = document.querySelector('#photo')
console.log(img.previousElementSibling)
*/

/*
// 이전 형제노드 검색하기
const img = document.querySelector('#photo')
console.log(img.previousSibling)
*/

// img 요소의 속성 조회하기
const img = document.querySelector('#photo')
console.log(img.id)
console.log(img.src)
console.log(img.alt)
console.log('------------------------------')

// p 요소의 속성 조회하기
const p = document.querySelector('.summary')
console.log(p.className)
console.log(p.innerText)
console.log('------------------------------')

// input 요소의 속성 조회하기
const input = document.querySelector('#search')
console.log(input.id)
console.log(input.type)
console.log(input.placeholder)