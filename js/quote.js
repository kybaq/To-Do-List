const quotesDiv = document.querySelector(".quotes");

const quotes = [
  "허물이 있다면, 버리기를 두려워 말라. - 공자",
  "나이가 성숙을 보장하지는 않는다. - 라와나 블랙웰",
  "인생에서 많은 패배에 직면하겠지만 결코 패배하지 말라. - 마야 안젤루",
  "주사위는 던져졌다. - 줄리어스 시저",
  "인생은 불공평 합니다. 익숙해지세요. - 빌 게이츠",
  "일기예보에도 불구하고, 봄처럼 살아라. - 릴리 퓰리처",
  "두려움 때문에 갖는 존경심만큼 비열한 것은 없다. - 알베르 카뮈",
  "자기자신에게 먼저 온화해져라. - 익명",
  "로마는 하루아침에 만들어지는 것이 아니다. - 익명",
];

const rndIndex = Math.floor(Math.random() * quotes.length);

quotesDiv.innerText = quotes[rndIndex];
