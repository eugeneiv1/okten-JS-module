const getUserInfo = (id) => fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => response.json());
const getUser = (id) => fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => response.json());
const url = new URL(location.href);
const id = url.searchParams.get('id');
const goBackBtn = document.getElementById('goback-btn');
goBackBtn.onclick = () => {
    location.href = '../index.html';
};
const showUserInfo = async () => {
    const userInfo = await getUserInfo(+id);
    const userWrapper = document.getElementById('user-wrapper');
    const list = document.createElement('ul');
    renderUserInfo(userInfo, list);
    const button = document.createElement('button');
    button.innerText = 'Posts of current user';
    button.onclick = () => {
        document.getElementById('posts-wrapper').classList.toggle('hidden');
    };
    userWrapper.append(list, button);
};
const renderUserInfo = (user, tag) => {
    for (const prop in user) {
        if (typeof user[prop] !== 'object') {
            const li = document.createElement('li');
            li.innerText = `${prop.charAt(0).toUpperCase() + prop.slice(1)} -- ${user[prop]}`;
            tag.appendChild(li);
        }
        else {
            const li = document.createElement('li');
            li.innerText = `${prop.charAt(0).toUpperCase() + prop.slice(1)}:`;
            const ul = document.createElement('ul');
            tag.appendChild(li);
            li.appendChild(ul);
            renderUserInfo(user[prop], ul);
        }
    }
};
const getPostsInfo = (id) => fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then(response => response.json());
const showPosts = async () => {
    const posts = await getPostsInfo(+id);
    const wrapper = document.getElementById('posts-wrapper');
    showPostDetails(posts, wrapper);
};
const showPostDetails = (posts, tag) => {
    posts.forEach((post) => {
        const currentPost = document.createElement('div');
        currentPost.classList.add('posts-wrapper-post');
        const postTitle = document.createElement('p');
        const modifiedPostTitle = post['title'].charAt(0).toUpperCase() + post['title'].slice(1);
        postTitle.innerText = `${post['id']}: ${modifiedPostTitle}`;
        const button = document.createElement('button');
        button.innerText = 'Show post details';
        button.onclick = () => {
            location.href = `./post-details.html?postId=${post["id"]}`;
        };
        currentPost.append(postTitle, button);
        tag.appendChild(currentPost);
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
showUserInfo().then();
showPosts().then();
//# sourceMappingURL=user-details.js.map