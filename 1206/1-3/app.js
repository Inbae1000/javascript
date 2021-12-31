const menuContainer = document.getElementById('menu-container')

function openMenu(e){
    console.log(e.target)
    const target = e.target
    if(target.className === 'title'){
        console.log(target.nextElementSibling) 
        const infoDiv= target.nextElementSibling
        infoDiv.classList.toggle('open')
    }
}

menuContainer.addEventListener('click', openMenu)