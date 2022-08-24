// json : javascript object notation
// Structured format for representing data,
// so that all the computers can understand it
// json is a way of communicating data with specific rules
// json is using key values
// json is portable with other languages

// Select the element
document.getElementById('btn1').addEventListener('click', loadUser);
document.getElementById('btn2').addEventListener('click', loadUsers);

// loadUser
function loadUser(e) {

    // Create the xhr object
    const xhr = new XMLHttpRequest();

    // Open method
    xhr.open('Get', 'user_03.json', true);

    // Onload
    xhr.onload = function() {
        if(this.status === 200) {
            // console.log(this.response); - to show on console

            const user = JSON.parse(this.responseText); // convert to js normal object
            // console.log(user); - check on console

            const output = `
            <ul>
            <li>Id : ${user.id}</li>
            <li>Name : ${user.name}</li>
            <li>Phone : ${user.phone}</li>
            </ul>`;

            document.getElementById('user').innerHTML = output; // to show on DOM
        }
    }

    // Send
    xhr.send();
};

// loadUsers
function loadUsers(e) {

    // Create the xhr object
    const xhr = new XMLHttpRequest();

    // Open method
    xhr.open('Get', 'users_03.json', true);

    // Onload
    xhr.onload = function() {
        if(this.status === 200) {
            // console.log(this.responseText);
            const users = JSON.parse(this.responseText);

            let output = '';

            users.forEach(function(i) {
                output += `
                <ul>
                <li>Id : ${i.id}</li>
                <li>Name : ${i.name}</li>
                <li>Phone : ${i.phone}</li>
                </ul>`; // supposed to be user instead of i because of the singular form of the callback function
            }) 

            document.getElementById('users').innerHTML = output;
        }
    }

    // Send
    xhr.send();
}