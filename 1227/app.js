/* 배열 선언 */
// const fruits = [,,,]

// for(let i=0; i<fruits.length; i++){
//     console.log('I like ', fruits[i])
// }

// const fruits = new Array('apple', 'banana', 'orange')

// for(let i=0; i<fruits.length; i++){
//     console.log('I like ', fruits[i])
// }

// const fruits = new Array(3).fill(0)

// for(let i=0; i<fruits.length; i++){
//     console.log('I like ', fruits[i])
// }


/* 배열요소 CRUD(배열요소 생성, 배열요소 조회, 배열요소 변경, 배열요소 삭제) */

// const movies =[]

// movies[0] = 'Harry Potter'
// movies[1] = 'Indiana Jhones'
// movies[2] = 'Jurassic Park'
// movies[3] = 'Iron man'
// movies[4] = 'Spider man'

// console.log('/* My Favorite Movie List */')
// for(let i=0; i<movies.length; i++){
//     console.log(movies[i])
// }
// console.log('*****************************')


// const movies = []

// movies[0] = 'Harry Potter'
// movies[1] = 'Indiana Jhones'
// movies[2] = 'Jurassic Park'
// movies[3] = 'Iron man'
// movies[4] = 'Spider man'

// delete movies[2]

// console.log('/* My Favorite Movie List */')
// for(let index in movies){
//     console.log(movies[index])
// }
// console.log('*****************************')


// const movies = []

// movies[0] = 'Harry Potter'
// movies[1] = 'Indiana Jhones'
// movies[2] = 'Jurassic Park'
// movies[3] = 'Iron man'
// movies[4] = 'Spider man'

// console.log('/* My Favorite Movie List */')
// for(let movie of movies){
//     console.log(movie)
// }
// console.log('*****************************')


/* 배열참조 CRUD (참조, 참조변경, 참조삭제 */

const movies = ['Harry Potter', 'Indiana Jhones', 'Jurassic Park', 'Iron man', 'Spider man']

// 주소 복사 vs 값 복사

// const movies_copied = movies

// movies[1] = null

// console.log(movies)
// console.log(movies_copied)

// 자바 스크립트 ES6 스프레드

const movies_copied = [...movies]

movies[1] = null

console.log(movies)
console.log(movies === movies_copied)