var elements = document.getElementsByTagName('li'); // Find <li> elementsif (elements.length > 0) {  // If 1 or more are found for (i in elements) {  var el = elements[i];     // Select each element using array syntax  el.className = 'cool';    // Change the value of the class attribute }}