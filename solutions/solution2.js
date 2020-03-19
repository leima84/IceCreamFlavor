//Use a forEach() loop:
const ul = document.getElementsByClassName('ice-cream-list')[0];
iceCreamFlavors.forEach(item => {
  // Create an item for each one   
  const li = document.createElement('li');
  li.className='ice-cream-flavor';
  // Add each item to the ul
  ul.appendChild(li);
  li.innerHTML += item;
});