const getUsers = () => fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
const getUser = (id) => fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => response.json());
const main = async () => {
    const users = await getUsers();
    const wrapper = document.getElementById('wrapper');
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        const info = document.createElement('h2');
        info.classList.add('user-info');
        info.innerText = `${user.id} user - ${user.name}`;
        const button = document.createElement('button');
        button.innerText = 'Show user details';
        button.onclick = () => {
            location.href = `./pages/user-details.html?id=${user.id}`;
        };
        userDiv.append(info, button);
        wrapper.appendChild(userDiv);
    });
};
const likedPostsList = JSON.parse(localStorage.getItem('likedPosts'));
const wrapper = document.getElementById('likedPosts-wrapper');
const likedPostsBtn = document.getElementById('likedPostsBtn');
likedPostsBtn.onclick = () => {
    wrapper.classList.remove('hide');
    renderLikedPosts(likedPostsList).then();
};
const renderLikedPosts = async (posts) => {
    const closeBtn = document.createElement('button');
    const likedPosts = document.getElementById('likedPosts');
    likedPosts.innerText = '';
    closeBtn.innerText = 'Close window';
    closeBtn.classList.add('closeBtn');
    closeBtn.onclick = () => {
        wrapper.classList.add('hide');
    };
    wrapper.appendChild(closeBtn);
    if (posts) {
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
                const neededPost = posts.indexOf(posts.find(post => post['id'] === currentPostId));
                posts.splice(neededPost, 1);
                localStorage.setItem('likedPosts', JSON.stringify(posts));
                renderLikedPosts(posts);
            };
            div.append(postAuthor, postBody, deletePostBtn);
            likedPosts.appendChild(div);
        }
    }
    else {
        const noPosts = document.createElement('h2');
        noPosts.innerText = 'There is no liked posts';
        likedPosts.appendChild(noPosts);
    }
};
main().then();
//# sourceMappingURL=main.js.map