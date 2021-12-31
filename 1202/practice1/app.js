const tiles = document.querySelectorAll('.tile')
console.log(tiles)

function getRandomColor(){
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)

    // return 'rgb(' + red + ',' + green + ',' + blue + ')'

    return `rgb(${red},${green},${blue})`
}

function changeBackground(e){
    console.log(e.target)
    e.target.style.background = getRandomColor()
}

for(let tile of tiles){
    tile.addEventListener('click', changeBackground)
}