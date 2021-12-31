const animals = ['lion', 'tiger', 'cat', 'dog', 'pig', 'cat']

const searchedAnimal = animals.indexOf('cat', 3) // 뒤에 숫자를 입력하면, 그 위치부터 검색

console.log(searchedAnimal)  // animals 배열에 존재하지 않는 동물 입력시 -1 반환

