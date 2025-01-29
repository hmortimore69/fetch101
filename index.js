/*
 * This is index.js
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

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


