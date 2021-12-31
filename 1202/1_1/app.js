// const instantMsg = document.querySelector('.instant-msg')

// function showMsg(){
//     instantMsg.classList.add('show')
// }
// function hideMsg(){
//     instantMsg.classList.remove('show')
// }
// setTimeout(showMsg, 1000)
// setTimeout(hideMsg, 3000)

// const circle = document.getElementById('circle')

// function moveCircle(e){
//     console.log('move circle~~~~~')
//     const mouseX = e.clientX  // 마우스 포인트의 x좌표
//     const mouseY = e.clientY // 마우스 포인트의 y좌표
//     circle.style.left = mouseX + 'px' // 클릭한 위치로 circle 이동
//     circle.style.top = mouseY + 'px'
// }

// window.addEventListener('mousemove', moveCircle)


// const ledContainer = document.getElementById('led-container')
// const leds = document.querySelectorAll('.led')

// function lighton(e){
//     // led 스타일 변경
//     console.log(e.target)
//     console.log(e.target.className)

//     if(e.target.className === 'led'){
//         e.target.classList.add('on')
//     }
// }

// function lightoff(e){
//     console.log(e.target.className)
//     if(e.target.className === 'led on'){
//         e.target.classList.remove('on')
//     }
// }

// ledContainer.addEventListener('mouseover', lighton)

// for(let led of leds){
//     led.addEventListener('mouseleave', lightoff)
// }

let index = 0

function lightoff(){
    const led = document.querySelectorAll('.led')[index]
    led.classList.remove('on')
}

function lighton(){
    const led = document.querySelectorAll('.led')[index]
    led.classList.add('on')
    index++
    if(index >2){
        index = 0
    }
    setTimeout(lightoff, 1000)
}

function startEffect(){
    console.log('load')
    setInterval(lighton, 1000)  // 1초마다 led가 깜빡이게 함
}
window.addEventListener('load', startEffect)