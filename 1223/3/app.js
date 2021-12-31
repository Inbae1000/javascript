const fileInput = document.getElementById('file-input')
const imgBox = document.getElementById('img-box')

function isValid(type){
    return type.split('/')[0] === 'image'
}

function displayImg(file){
    const img = document.createElement('img')


    // 로컬 스토리지로 저장한 파일을 읽어온 경우 이쪽으로 들어옴
    if(typeof file === 'string'){
        img.src = file

    }
    // 사용자가 맨처음에 업로드한 파일은 객체이므로 이쪽으로 들어옴
    else{
        img.src = URL.createObjectURL(file)
    }
    imgBox.appendChild(img)
}

function rememberImg(e){
    console.log(e.target.result) // reader 객체로 읽어온 데이터(이미지)
    localStorage.setItem('file',JSON.stringify(e.target.result))
}

//로컬스토리지에 이미지 경로 저장하기
function uploadImg(e){
    const file = e.target.files[0]
    const reader = new FileReader() // 사용자가 업로드한 파일 데이터를 읽어오기 위한 파일객체

    if(!isValid(file.type)){
        imgBox.innerHTML = 'File type is not valid!'
        return;
    }

    displayImg(file)//화면에 이미지를 보여주기

    reader.onload = rememberImg  // 파일 읽기가 끝나면 remeberImg를 실행함
    reader.readAsDataURL(file) // reader 객체가 파일을 읽어오기
}

// 저장된 이미지를 다시 디스플레이해줌
function renderImg(){
    const fileStored = JSON.parse(localStorage.getItem('file'))
    console.log(fileStored)

    if(fileStored){
        displayImg(fileStored)
    }
}


fileInput.addEventListener('change', uploadImg)
window.addEventListener('load', renderImg)