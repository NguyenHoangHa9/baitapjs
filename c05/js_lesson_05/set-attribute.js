var firstItem = document.getElementById('one');
firstItem.className = 'complete';

var fourthItem = document.getElementsByTagName('li').item(3);
// NOTE: The following line should say fourthItem (not el2)
fourthItem.setAttribute('class', 'cool');