

var msg = '<p><b>page title: </b>' + document.title + '<br />';

msg += '<b>page address: </b>' + document.URL + '<br />';

msg += '<b>last modified: </b>' + document.lastModified + '</p>';

// Create a variable called el to hold the element whose id attribute has a value of footer
var el = document.getElementById('footer');
// Write the message into that element
el.innerHTML = msg;