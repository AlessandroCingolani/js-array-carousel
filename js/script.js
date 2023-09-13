const itemsCarousel = document.querySelector('.items-carousel');
const btnUP = document.querySelector('.up');
const btnDown = document.querySelector('.down');

let counter = 0;

// svuoto elementi nell html
itemsCarousel.innerHTML = '';


const images = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp'
]

for(let i = 0; i < images.length;i++){
  const image = images[i];
  console.log(image);
  itemsCarousel.innerHTML += `<img src="${image}" class= "newItem hide">`;
}

const newItem = document.getElementsByClassName('newItem');

console.log(newItem);