count = 0
titleEl = document.getElementsByClassName("hero-title")[0]
titleEl.onclick = () => {
    count += 1
    if(count == 100) {
        titleEl.innerHTML = "이 화면을 스크린샷을 이용해서<br>지원 서류에 첨부해주세요!"
        // 코드 스크린 샷은 절반만 인정합니다. 웹 상에서 메세지를 띄워보세요!
        document.getElementsByClassName("hero-content")[0].style = "background: linear-gradient(135deg, rgba(255,177,0,1) 70%, rgba(23,190,187,1) 100%);"
    }
}
