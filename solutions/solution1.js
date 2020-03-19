//Use for loop 
function showFlavor() {
  const ul = document.getElementsByClassName('ice-cream-list')[0];
  // Set up a loop that goes through the items
  for (i = 0; i < iceCreamFlavors.length; i++) {  
    // Create an item for each one    
    item = document.createElement('li');
    item.className = 'ice-cream-flavor';
    // Add the item text
    item.innerHTML = iceCreamFlavors[i];
    // Add each item to the ul
    ul.appendChild(item);
  }
}

// Usage
showFlavor();