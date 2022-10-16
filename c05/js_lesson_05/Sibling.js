// Select the starting point adn find its siblings.
var starItem = document.getElementById('two');
var prevItem = starItem.previousSibling;
var nextItem = starItem.nextSibling;

// Change the values of the siblings' class attribute.
prevItem.className = 'complete';
nextItem.className = 'cool';