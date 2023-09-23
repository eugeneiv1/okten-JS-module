let url = new URL(location.href);
let id = url.searchParams.get('id');
let ol = document.createElement('ol');
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then( response => response.json())
    .then( user => showUserInfo(user))
function showUserInfo  (user) {
    for (const prop in user) {
        if (typeof user[prop] !== "object") {
            let li = document.createElement('li');
            li.innerText = `${prop} - ${user[prop]}`;
            ol.appendChild(li);
        } else {
            showUserInfo(user[prop])
        }
    }

    document.body.appendChild(ol);
}


