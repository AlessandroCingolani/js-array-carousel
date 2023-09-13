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

// bottone down
btnDown.addEventListener('click',function(){
  if (counter < newItem.length -1){

    newItem[counter].classList.add('hide');
  
    counter++;
  
    newItem[counter].classList.remove('hide');
  
    btnUp.classList.remove('hide')
  }else if(counter < newItem.length){
    newItem[counter].classList.add('hide');
    counter = 0;
    newItem[counter].classList.remove('hide');
  }
  
})

// bottone  su
btnUp.addEventListener('click',function(){
  if(counter > 0){
    newItem[counter].classList.add('hide');
  
    counter--;
  
    newItem[counter].classList.remove('hide');
  
    btnDown.classList.remove('hide');

  }else if(counter === 0){
    newItem[counter].classList.add('hide');
    counter = newItem.length -1;
    newItem[counter].classList.remove('hide');
  }
})

