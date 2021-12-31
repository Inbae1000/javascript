const photos = document.getElementById('photos')
const photoItems = photos.querySelectorAll('.photo')
const option = document.querySelectorAll('.options')
const selection = document.getElementById('selection')

let timerID = null
let cnt = 0
let prevOption = 0


function changePosition(){
    cnt = cnt === photoItems.length - 1 ? 0 : cnt + 1
    photos.style.marginLeft = cnt * -500 + 'px'

    console.log(cnt)
    // 셀렉터 구현부분
    option[prevOption].style.width = 20 + 'px' // 이전 셀렉터 초기화
    option[cnt].style.width = 50 + 'px' // 현재 셀렉터 변경
    option[cnt].style.borderRaidus = '5px'
    prevOption = cnt // 현재 셀렉터 인덱스 저장
}

function startCarousel(){
    timerID = setInterval(changePosition, 3000)
}

function stopCarousel(){
    clearInterval(timerID)
}

function changePhoto(e){
    console.log(e.target)
    const target = e.target
    if(target.className === 'options'){
        // 버튼클릭한 경우
        console.log(target.id)
        cnt = parseInt(target.id) -1
        changePosition()
    }

}
window.addEventListener('load', startCarousel)
photos.addEventListener('mouseenter', stopCarousel)
photos.addEventListener('mouseleave', startCarousel)

selection.addEventListener('click', changePhoto)