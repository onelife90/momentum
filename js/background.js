const imageSrc = [
  "https://bit.ly/3qqOlR3",
  "https://bit.ly/3s7M6mk",
  "https://url.kr/k67w4x",
  "https://url.kr/txmd1g",
];
const chosenImage = imageSrc[Math.floor(Math.random() * imageSrc.length)];
const bgImage = document.createElement("img");

bgImage.src = `${chosenImage}`;
document.body.appendChild(bgImage);
