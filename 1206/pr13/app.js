const box = document.querySelectorAll('.box')

let cnt = 0
let prevOption = 0

function upBox(){
    box[prevOption].style.marginTop = 0 + 'px'
    box[cnt].style.marginTop = -100 + 'px'
    prevOption = cnt  // 현재 인덱스값을 저장함
    cnt = cnt === box.length - 1 ? 0 :cnt + 1
}

function startCarousel(){
    setInterval(upBox, 1000)
}

window.addEventListener('load', startCarousel)