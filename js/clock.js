const clock = document.querySelector(".clock");

function realTimeCheck() {
    const now = new Date();
    const week = ['일', '월', '화', '수', '목', '금', '토'];

    year = now.getFullYear(); // 연도
    month = now.getMonth(); // 월
    date = now.getDate() // 일
    day = now.getDay(); // 요일
    hour = String(now.getHours()).padStart(2, "0"); // 시간
    minute = String(now.getMinutes()).padStart(2, "0"); // 분
    second = String(now.getSeconds()).padStart(2, "0"); // 초

    let time = `${year}.${month + 1}.${date} ${week[day]} ${hour}:${minute}:${second}`
    
    clock.innerText = time;

}

realTimeCheck();
setInterval(realTimeCheck, 1000);