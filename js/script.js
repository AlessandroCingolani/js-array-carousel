const itemsCarousel = document.querySelector('.items-carousel');
const btnUp = document.querySelector('.up');
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


// prendi indice 0 del nuovo array
newItem[0].classList.remove('hide')

btnDown.addEventListener('click',function(){
  console.log('down');
  newItem[counter].classList.add('hide');

  counter++;

  newItem[counter].classList.remove('hide');
})

// bottone in su
btnUp.addEventListener('click',function(){
  console.log('down');
  newItem[counter].classList.add('hide');

  counter--;

  newItem[counter].classList.remove('hide');
})