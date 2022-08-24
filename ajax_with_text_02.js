// Select the element
document.getElementById('btn').addEventListener('click', loadData);

function loadData() {
    // Create xhr object
    const xhr = new XMLHttpRequest();

    // Open method (type of the request, url(where to get the data from), async)
    xhr.open('Get','text_02.txt', true); // true - async , false - sync

    // Load response
    xhr.onload = function() {
        // console.log('readystate', xhr.readyState);

        if(this.status === 200) {
            document.getElementById('output').innerHTML =
            `<h1>${this.responseText}</h1>`;
            // innerHtmL to make it appear on the DOM (white browser) instead

            // console.log(this.responseText);
        }
    }

    xhr.send();
}

// Ready state values
// 0 : request is not initialized
// 1 : server request established
// 2 : request received
// 3 : processing the request
// 4 : request finished and response is ready

// HTTP status
// 200 : ok
// 400 : forbidden
// 404 : not found