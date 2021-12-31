
const fruitContainer = document.getElementById('fruits')
let prevTarget = null

function moveToRight(e){
    // 바로 전에 클릭한 타겟을 초기화해주기
    if(prevTarget !== null){
        prevTarget.style.marginLeft = '0px'
    }

    // 현재 클릭한 타겟의 위치 변경
    const target = e.target
    if(target.className === 'fruit'){
        target.style.marginLeft = '100px'

        // 현재 타겟 저장
        prevTarget = target
    }


}



fruitContainer.addEventListener('click', moveToRight)