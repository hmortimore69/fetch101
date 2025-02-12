/*
 * This is index.js
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

/*
 * Input: elem: Element, url: String
 * Return: None
 * Create a function `showMessage` that takes two parameters: an element and a string that is a URL. 
 * The function will fetch the URL and put the response text into the text content of the provided element. 
*/
async function showMessage(elem, url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response Status: ${response.status}`);
        }

        elem.textContent = await response.text();
    
    } catch(error) {
        console.error(error.message);
    }
}

/*
 * Input: elem: Element, url: String
 * Return: None
 * Create a function `showList` that takes two parameters: an element and a string that is a URL. 
 * The function will fetch the URL, parse the retrieved data as JSON; 
 * the data is guaranteed to be an array of strings. 
 * The function will then, like the `filler` function in `dom101`, 
 * put the contents of the array as list items into the provided element.
 */
async function showList(elem, url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response Status: ${response.status}`);
        }

        const arr = await response.json();

        arr.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;

            elem.appendChild(li);
        });
    } catch(error) {
        console.error(error.message);
    }
}

/*
 * Input: elem: Element, url: String
 * Return: None
 * Create a function `startShowingMessage` that takes two parameters: 
 * an element and a string that is a URL. The function will use `setInterval` to make 
 * the following task every 1s: fetch the URL and put the response text into the 
 * text content of the provided element.
 */
function startShowingMessage(elem, url) {
    setInterval(async () => {
        try {
            const response = await fetch(url);
    
            if (!response.ok) {
                throw new Error(`Response Status: ${response.status}`);
            }
    
            elem.textContent = await response.text();
        } catch(error) {
            console.error(error.message);
        }
    }, 1000);
}

/*
 * Input: elem: Element, url: String
 * Return: None
 * Create a function 'handleError' that accepts an element and a url as a parameter, 
 * and shows the fetched text from the server in the element. 
 * If there is an error, the function should set the textContent of the element to 'OH DEAR'.
 */
async function handleError(elem, url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response Status: ${response.status}`)
        }

        elem.textContent = await response.text();
    } catch(error) {
        elem.textContent = "OH DEAR";
    }
}

/*
 * Input: canvas: Element, url: String
 * Return: None
 * Create a function `drawBox', which accepts two parameters: 
 * a canvas element, and a URL which refers to a simple object with coordinates 
 * that you should fetch from a server. The function draws a 10x10 filled 
 * black box at the given coordinates. Your drawBox function should update the 
 * coordinates and redraw the box every 1 second.
 */
function drawBox(canvas, url) {
    const ctx = canvas.getContext("2d");

    setInterval(async () => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Response Status: ${response.status}`);
            }

            const data = await response.json();

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "black";
            ctx.fillRect(data.x, data.y, 10, 10,);
        } catch(error) {
            console.error(error.message);
        }
    }, 1000);
}
