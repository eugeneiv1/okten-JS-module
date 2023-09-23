let users = fetch('http://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( users => {
        buildUserList(users);
        window.addEventListener('popstate',  (event) => {
            console.log(event.state);
            document.body.innerText = '';
            buildUserList(users);
        })
    });



const buildUserList = (users) => {
    let list = document.createElement('ul');

    for (const user of users) {
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.innerText = `User ID: ${user.id}, user name - ${user.name}`;
        let link = document.createElement('p');
        link.style.cursor = 'pointer';
        link.style.color = 'blue'
        link.innerText = `See user details`;

        link.onclick = () => {
            document.body.innerText = '';
            let ol = document.createElement('ol');
            ol.setAttribute('id', 'list');
            document.body.appendChild(ol);
            let currentUrl = location.href;
            let newUrl = currentUrl.slice(0, currentUrl.indexOf('?')) + '?id=' + user.id;
            history.pushState('page', 'caption', newUrl);
            // location.href = newUrl;
            showUserInfo(user);

            let goBack = document.createElement('button');
            goBack.innerText = "Go Back";
            goBack.onclick = () => history.back();
            document.body.appendChild(goBack);
        }

        li.append(p, link)

        list.appendChild(li);
    }

    document.body.appendChild(list);
}

function showUserInfo  (user) {
    for (const prop in user) {
        if (typeof user[prop] !== "object") {
            let li = document.createElement('li');
            li.innerText = `${prop} - ${user[prop]}`;
            let ol = document.getElementById('list')
            ol.appendChild(li);
        } else {
            showUserInfo(user[prop])
        }
    }
}

