const images = ["img01.jpeg","img02.jpeg","img03.jpeg","img04.jpeg","img05.jpeg"]; //img 파일을 추가하거나 수정할 일 X -->const
const BG = 'background';

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.className = BG; //상수 지정

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); 