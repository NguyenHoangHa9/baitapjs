// Select the starting point and find its children.
var starItem = document.getElementsByTagName('ul')[0];
var firstItem = starItem.firstChild;
var lastItem = starItem.lastChild;

// Change the values of the children's class attributes.
firstItem.className = 'complete';
lastItem.clasName = 'cool';