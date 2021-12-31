// 중복된 동물 모두 검색

const animals = ['lion', 'tiger', 'cat', 'dog', 'pig', 'cat', 'giraffe', 'duck', 'cat']
const animalToSearch = 'cat'
const searchedIndexes = []

let foundIndex = animals.indexOf(animalToSearch)
while(foundIndex != -1){  // 반환값이 -1이 아닌동안 반복문을 순회하면서 계속 검색
    searchedIndexes.push(foundIndex)  // cat을 찾을때마다 배열에 찾은 위치 추가
    foundIndex = animals.indexOf(animalToSearch, foundIndex+1)  // 검색 시작위치는 찾은 위치에서 1을 증가시킴
}

console.log(searchedIndexes)