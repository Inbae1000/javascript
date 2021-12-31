const pageContents = [
    'page1', 'page2', 'page3', 'page4', 'page5',
    'page6', 'page7', 'page8', 'page9', 'page10'
]

const contents = document.getElementById('contents')
const pageBtns = document.getElementById('page-btns')

for(let i=0; i<pageContents.length; i++){
    const btn = document.createElement('button')
    btn.className = 'page-btn'
    btn.innerText = i + 1 //버튼에 숫자 입력

    pageBtns.appendChild(btn)
}

contents.innerHTML = pageContents[0]  // 처음화면에 page1을 보여줌

function changePage(e){
    console.log(e.target)
    const target = e.target
    // 페이지네이션 버튼을 클릭한 경우
    if(target.className === 'page-btn'){
        console.log(target.innerText)
        const indexSelected = parseInt(target.innerText) -1
        contents.innerHTML = pageContents[indexSelected]
    }
}

pageBtns.addEventListener('click', changePage)