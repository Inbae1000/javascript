const colorBox = document.querySelector('.color-box')
const colorList = document.querySelector('.color-list')
const colorInput = document.getElementById('color-input')

const colors = ['orange', 'blue', 'brown', 'green', 'red', 'skyblue']
let index = -1
let prevIndex = -1

function addColors(colors){
    for(let color of colors){
        const item = `<div class='color-item'>${color}</div>`
        colorList.innerHTML += item
    }
}

function typeColor(e){
    console.log(e.target.value)

    if(e.target.value !== ''){
        console.log('you typed something')
        colorList.classList.add('show')
    }else{
        console.log('you didn\'t type anything')
        colorList.classList.remove('show')
    }
}

function setBackground(color){
    console.log('you picked color !', color)
    colorInput.value = color
    colorList.classList.remove('show')
    colorBox.style.background = color
}

function setColor(e){
    console.log(e.target)

    if(e.target.className === 'color-item'){
        const pickedColor = e.target.innerText
        setBackground(pickedColor)
    }
}

function changeHighLightItem(key){
    prevIndex = index

    if(key === 40){
        index++
        if(index > colors.length - 1){
            index = 0
        }
    }else if(key === 38){
        index--
        if(index < 0){
            index = colors.length - 1
        }
    }else if(key === 13){
        // TODO :: 배경색 변경
        const colorItem = document.querySelectorAll('.color-item')[index]
        const pickedColor = colorItem.innerText
        setBackground(pickedColor)
    }

}
function unsetHighLightColorItem(){
    if(prevIndex >= 0){
        const colorItem = document.querySelectorAll('.color-item')[prevIndex]
        colorItem.classList.remove('highlight')
    }
}
function highlightColorItem(){
    if(index >= 0){
        const colorItem = document.querySelectorAll('.color-item')[index]
        colorItem.classList.add('highlight')
    }
}

function selectColor(e){
    if(e.keyCode){
        console.log(e.keyCode)
        changeHighLightItem(e.keyCode)
        unsetHighLightColorItem()
        highlightColorItem()
    }
}

function pickRandomColor(){
    return Math.floor(Math.random()*256)
}
function seColor(e){
    colorBox.style.background = `rgb{${pickRandomColor()},${pickRandomColor()},${pickRandomColor()}}`
}

addColors(colors)
colorInput.addEventListener('input', typeColor)
colorInput.addEventListener('keydown', selectColor)
colorList.addEventListener('click', setColor)
colorInput.addEventListener('input', seColor)

