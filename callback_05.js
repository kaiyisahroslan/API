const posts = [
    { title : 'post one', body : 'This is post one'},
    { title : 'post two', body : 'This is post two'}
];

// Sync way

// function createPost(post) {
//     setTimeout(function() {
//         posts.push(post);
//     }, 3000); // 3000 = 3 seconds
// };

// function getPost() {
//     setTimeout(function() {
//         let output = '';
//         posts.forEach(function(post) {
//             output += `
//             <li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// };

// createPost({title : 'post three', body : 'This is post three'});
// getPost();

// Async with callback

function createPost(post, callback) {
    setTimeout(function() {
        posts.push(post);
        callback();
    }, 3000);
};

function getPost() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `
            <li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
};

createPost({title : 'post three', body : 'This is post three'}, getPost);