const API_KEY = "";

function success(position) {
  // 날씨 표현
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(`You live in ${lat} ${lon}`);
  const units = "metric";
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`;

  fetch(weatherUrl)
    .then((res) => res.json())
    .then((data) => {
      const weatherDiv = document.querySelector(".weather");
      const temperature = data.main["temp"];

      weatherDiv.innerText = `현재 온도는 ${temperature} ℃ 입니다.`;
    });
}

function fail(params) {
  weatherDiv.innerText =
    "위치 정보 사용이 불가능해 날씨 정보를 제공할 수 없습니다.";
}

navigator.geolocation.getCurrentPosition(success, fail);
