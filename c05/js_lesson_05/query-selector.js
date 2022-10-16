// querySelector only return the first match
var el = document.querySelector('li.hot');
el.className = 'cool';

// querySelectorAll returns a NodeList
// The third li elements is then selector and changed.
var els = document.querySelector('li.hot');
els[1].className = 'cool';