//Use JQuery and a map() loop:
$('.ice-cream-list').append(iceCreamFlavors.map(item => 
  $('<li class="ice-cream-flavor" />').text(item)
));

