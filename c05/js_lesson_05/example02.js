var newItemLast = document.createElement('li');     // Create element
var newTextLast = document.createTextNode('cream');     // Create text node
newItemLast.appendChild(newTextLast);                       // Add text node to element
list.appendChild(newItemLast);                              // add element end of list

// ADD NEW ITEM START OF LIST
var newItemFirst = document.createElement('li');    // Create element
var newTextFirst = document.createTextNode('kale');     // Create text node
newItemFirst.appendChild(newTextFirst);                      // Add text node to element
list.insertBefore(newTextFirst, list.firstChild);            // Add element to list


var listItems = document.querySelectorAll('li');     // All <li> elements
// ADD A CLASS OF COOL TO ALL LIST ITEMS
var i;
for (i = 0; i < listItems.length; i++) {
    listItems[i].className = 'cool';
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + '<span>' + totalItems + '</span>';
heading.innerHTML = newHeading;