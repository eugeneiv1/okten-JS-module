// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

            let users = fetch('http://jsonplaceholder.typicode.com/users')
                                            .then( response => response.json())
                                            .then( users => buildUserList(users))

            const buildUserList = (users) => {
                let list = document.createElement('ul');

                for (const user of users) {
                    console.log(user)
                    let li = document.createElement('li');
                    let p = document.createElement('p');
                    p.innerText = `User ID: ${user.id}, user name - ${user.name}`;
                    let a = document.createElement('a');
                    a.innerText = `See user details`;
                    a.href = `./user-details.html?id=${user.id}`;

                    li.append(p, a)

                    list.appendChild(li);
                }

                document.body.appendChild(list);
            }