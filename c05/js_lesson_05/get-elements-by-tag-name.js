var elements = document.getElementsByTagName('li'); // Find <li> elements

if (elements.length > 0) {  // If 1 or more and found

    var el = elements[0];   // Select the first one using array syntax
    el.className = 'cool';  // Change the value of the class attribute

}