// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
            interface IUser {
                id: number,
                name: string
            }

            const getUsers = ():Promise<IUser[]> => fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());

            // @ts-ignore
            const getUser = (id) => fetch (`https://jsonplaceholder.typicode.com/users/${id}`).then(response => response.json());

            const main = async () => {
                const users = await getUsers();
                const wrapper = document.getElementById('wrapper');

                users.forEach(user => {
                    const userDiv = document.createElement('div');
                    userDiv.classList.add('user')
                    const info = document.createElement('h2');
                    info.classList.add('user-info')
                    info.innerText = `${user.id} user - ${user.name}`;

                    const button = document.createElement('button');
                    button.innerText = 'Show user details';
                    button.onclick = () => {
                        location.href = `./pages/user-details.html?id=${user.id}`
                    }

                    userDiv.append(info, button);
                    wrapper.appendChild(userDiv);
                })
            }

            // @ts-ignore
            const likedPostsList = JSON.parse(localStorage.getItem('likedPosts'));
            // @ts-ignore
            const wrapper = document.getElementById('likedPosts-wrapper');

            // @ts-ignore
            const likedPostsBtn = document.getElementById('likedPostsBtn');
            likedPostsBtn.onclick = () => {
                wrapper.classList.remove('hide');
                renderLikedPosts(likedPostsList).then();
            }

            // @ts-ignore
                const renderLikedPosts = async (posts: [object]) => {
                const closeBtn = document.createElement('button');
                const likedPosts = document.getElementById('likedPosts');
                likedPosts.innerText = '';

                closeBtn.innerText = 'Close window';
                closeBtn.classList.add('closeBtn');
                closeBtn.onclick = () => {
                    wrapper.classList.add('hide');
                }

                wrapper.appendChild(closeBtn);

                if (posts.length) {
                    for (const post of posts) {
                        const div = document.createElement('div');
                        div.classList.add('likedPost');
                        const currentPostId = post['id'];

                        const authorInfo = await getUser(post['userId']);
                        const postAuthor = document.createElement('h3');
                        postAuthor.innerText = authorInfo.name;

                        const postBody = document.createElement('p');
                        postBody.innerText = post['body'];

                        const deletePostBtn = document.createElement('button');
                        deletePostBtn.innerText = 'Unlike this post';
                        deletePostBtn.onclick = () => {
                            const neededPost = posts.indexOf(posts.find (post => post['id'] === currentPostId));
                            posts.splice(neededPost, 1);
                            localStorage.setItem('likedPosts', JSON.stringify(posts));
                            renderLikedPosts(posts);
                        }

                        div.append(postAuthor, postBody, deletePostBtn);
                        likedPosts.appendChild(div);
                    }
                } else {
                    const noPosts = document.createElement('h2');
                    noPosts.innerText = 'There is no liked posts';
                    likedPosts.appendChild(noPosts);
                }
            }

            main().then();

//
//

//
//
//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)