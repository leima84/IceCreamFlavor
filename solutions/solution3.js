//Use join() method and a map() loop:
const showIceCream = document.querySelector('.ice-cream-list');

showIceCream.innerHTML = iceCreamFlavors.map(item => {
  //Create a single string from the array
  return '<li class="ice-cream-flavor">' + item + '</li>';
}).join('');