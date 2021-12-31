index =0

function photoOff(){
    const photo = document.querySelectorAll('.photo')[index]
    photo.classList.remove('photoon')
    setTimeout(photoOn, 1000)
}

function photoOn(){
    const photo = document.querySelectorAll('.photo')[index]
    photo.classList.add('photoon')

    setTimeout(photoOff, 3000)
}
function startEffect(){
    console.log('load')
    setTimeout(photoOn, 1000)
}

window.addEventListener('load', startEffect)
// index 없으면 remove, add 오류뜸