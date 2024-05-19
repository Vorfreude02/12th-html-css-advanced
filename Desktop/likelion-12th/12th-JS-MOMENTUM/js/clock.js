const clock=document.querySelector("h2#clock");
//id가 "clcok"인 h2 태그를 찾아 이를 변수 clock에 할당

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    // padStart: 2를 02와 같은 두자리 형식으로 나타나게 함

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

clock.className='clock-font';

getClock();  // 페이지가 로드될 때 한 번 getClock 함수를 호출하여 초기 시간 표시
setInterval(getClock,1000); // 1초마다 getClock 함수 호출하여 시간 업데이트
// ex) 3000으로 바꾸면 3초마다 update
// getClock 빼면 새로고침 할 때마다 00:00:00이 뜨게 됨.

