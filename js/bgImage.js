// 배경 이미지 무작위
let imgUrlStr = '';
let n = 4;

let imgList = [];

for (let i = 0; i < n; i++) {
    imgUrlStr += `../img/${i}.jpg`;
    imgList = imgUrlStr.split("../").filter(Boolean);
    // Boolean 을 조건으로 사용하면 null, undefined, "" 등 falsy 한 값을 제거할 수 있음.
}

function bgImage() {
    let rndIndex = Math.floor((Math.random() * 4));
    document.body.style.backgroundImage = `url("../${imgList[rndIndex]}")`;
}

window.addEventListener("load", bgImage);

