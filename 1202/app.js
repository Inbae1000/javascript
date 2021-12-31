// const popup = document.getElementById('popup')
// console.dir(popup)

// // 프로퍼티 방식으로 클릭 이벤트가 등록이 된다
// popup.onclick = function(){
//     alert('팝업창')
// }

// 버튼 색상을 변경하는 이벤트 핸들러 함수
// const popupBtn = document.getElementById('popup')
// function popup(){
//     alert('팝업창')
// }

// function setBtnColor(){
//     popupBtn.style.background = 'skyblue'
// }
// function unsetBtnColor(){
//     popupBtn.style.background = ''
// }

// popupBtn.addEventListener('click',popup)
// popupBtn.addEventListener('mouseover',setBtnColor)
// popupBtn.addEventListener('mouseleave',unsetBtnColor)

// function popup(){
//     alert('팝업창')
//     popupBtn.removeEventListener('click', popup)
// }

// const popupBtn = document.getElementById('popup')
// popupBtn.addEventListener('click', popup)

// 이벤트
// function popup(e){
//     console.log(e)
//     console.log(e.target)
//     e.target.classList.add('circle')
// }

// const popupBtn = document.getElementById('popup')
// popupBtn.addEventListener('click', popup)

// 로그인
// const form= document.querySelector('form')
// const id = document.querySelector('#user-id')
// const password = document.querySelector('#user-password')
// const p = document.querySelector('p')

// function login(e){
//     if(id.value === ''|| password.value === ''){
//         e.preventDefault()
//         p.innerText = '아이디나 비밀번호가 입력되지 않았습니다.'
//     }
//     alert('login is processing...')
// }

// form.addEventListener('submit',login)
// 로그인 index
/*
<h1>로그인 화면</h1>
<form action="/home">
<input type="text" id ='user-id'>
<input type="password" id ='user-password'>
<input type="submit">
</form>
<p></p>
<script src = 'app.js'></script>
*/
