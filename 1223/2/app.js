const box = document.getElementById('box')
const gravity = 1
const FPS = 30 // 초당 프레임수
const limitBottom = 500  // 땅 위 근처에 도달하면 멈추게 하기 위함
const limitLeft = 700  // 
const limitTop = 300

let vx = 100
let vy = 0
let isJumping = true
let isDead = false

function down() {
    const topStyle = window.getComputedStyle(box).top
    let top = parseInt(topStyle)

    // 중력이 계속 작용하고 있는중
    vy += gravity
    top += vy

    // 슈퍼마리오가 땅에 있는 동안에는 죽지 않으므로 더이상 아래로 떨어지지 않음
    if(!isDead && top >= limitBottom){
        top = limitBottom
        isJumping = true
    }
    box.style.top = `${top.toString()}px`
}
const timerId = setInterval(down, 1000/FPS)

function move(e){
    const leftStyle = window.getComputedStyle(box).left
    const topStyle = window.getComputedStyle(box).top
    let left = parseInt(leftStyle)
    let top = parseInt(topStyle)
    

    // 여러 키의 동작이 동시에 적용되려면 if문을 사용하면 됨 (예:spacebar + arrow key)

    if(e.keyCode === 39){  // 화살표키 우측 누른 경우
        box.style.backgroundImage = "url('super-mario-right.jpg')"
        left += vx  //등속운동
        if(left > limitLeft){
            isDead = true
        }
    }
    else if(e.keyCode === 37){  // 화살표키 좌측 누른 경우
        box.style.backgroundImage = "url('super-mario-left.jpg')";
        if(left > 0){
            left -= vx  // 등속운동
        }
    }
    else if(e.keyCode === 32 || e.keyCode === 38){  // 캐릭터 점프
        if(isJumping && top >= limitTop){
            vy -= gravity
            top -= vy
        }
        if(vy <= 0){
            isJumping = false
        }
        
    }
    
    box.style.left = `${left.toString()}px`
    box.style.top = `${top.toString()}px`
}

window.addEventListener('keydown',move)