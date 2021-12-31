const openBtn = document.getElementById('open-btn')
const sidebar = document.querySelector('.sidebar')

let timerID = null

function hideSidebar(){
    sidebar.classList.remove('show')
    clearTimeout(timerID)
}

function openSidebar(){
    sidebar.classList.add('show')

    timerID = setTimeout(hideSidebar,3000);
}

openBtn.addEventListener('click', openSidebar)