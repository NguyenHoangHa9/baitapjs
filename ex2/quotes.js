var title;
var message;

title = "Molly's Special Offers";

message = '<a href=\"sale.html\">25% off!</a>';

var elTile = document.getElementById('title');

elTile.textContent = title;

var elNote = document.getElementById('note');

elNote.innerHTML = message;