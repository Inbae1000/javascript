const photos = document.getElementById('photos')
const options = document.querySelectorAll('.options')
let cnt = 0
let timerID = null
let prevOption = 0 // 이전에 늘어났던 동그라미의 인덱스 값

function changePosition(){
    const photoItems = document.querySelectorAll('.photo')
    console.log(photoItems.length) //5
    cnt = cnt === photoItems.length - 1 ? 0 :cnt + 1
    photos.style.marginLeft = cnt*-500 +'px'

    //셀렉터 구현
    options[prevOption].style.width = 20 + 'px'// 이전 인덱스값으로 동그라미의 길이를 초기화
    options[cnt].style.width = 50 + 'px'
    options[cnt].style.borderRadius = '5px'
    prevOption = cnt // 현재 인덱스값을 저장함
}


function startCarousel(){
    console.log('mouse eter')
    timerID = setInterval(changePosition, 1000)
}

function stopCarousel(){
    clearInterval(timerID)
}

photos.addEventListener('mouseenter', startCarousel)
photos.addEventListener('mouseleave', stopCarousel)