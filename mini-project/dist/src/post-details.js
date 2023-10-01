const getPost = (postId) => fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(response => response.json());
const getPostComments = (postId) => fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(response => response.json());
const showPostInfo = async () => {
    const url = new URL(location.href);
    const postId = url.searchParams.get('postId');
    const post = await getPost(+postId);
    const postWrapper = document.getElementById('post-wrapper');
    const comments = await getPostComments(+postId);
    const postComments = document.getElementById('post-comments');
    const commentsTitle = document.createElement('h2');
    commentsTitle.innerText = 'Comments to post';
    postComments.appendChild(commentsTitle);
    const goBackBtn = document.getElementById('goback-btn');
    goBackBtn.onclick = () => {
        location.href = `./user-details.html?id=${post['userId']}`;
    };
    renderPostInfo(post, postWrapper);
    renderComments(comments, postComments);
};
const renderPostInfo = (post, tag) => {
    const ul = document.createElement('ul');
    for (const prop in post) {
        const li = document.createElement('li');
        li.innerText = `${prop.charAt(0).toUpperCase() + prop.slice(1)} -- ${post[prop]}`;
        ul.appendChild(li);
    }
    tag.appendChild(ul);
    const likedPostsList = JSON.parse(localStorage.getItem('likedPosts')) || [];
    const isAlreadyLiked = !!likedPostsList.find(likedPost => likedPost['id'] === post['id']);
    console.log(isAlreadyLiked);
    if (isAlreadyLiked) {
        const liked = document.createElement('h3');
        liked.innerText = 'Already liked';
        liked.classList.add('liked');
        tag.appendChild(liked);
    }
    else {
        const likeBtn = document.createElement('button');
        likeBtn.classList.add('like-button');
        likeBtn.innerText = 'Like this post';
        likeBtn.onclick = () => {
            saveLikedPostInfo(post);
            likeBtn.innerText = 'Liked!!!';
        };
        tag.appendChild(likeBtn);
    }
};
const renderComments = (comments, tag) => {
    const ul = document.createElement('ul');
    for (const comment of comments) {
        const li = document.createElement('li');
        const commentAuthor = document.createElement('h4');
        commentAuthor.innerText = `comment by ${comment['email']}:`;
        const commentBody = document.createElement('p');
        commentBody.innerText = comment['body'];
        li.append(commentAuthor, commentBody);
        ul.appendChild(li);
    }
    tag.appendChild(ul);
};
const saveLikedPostInfo = (post) => {
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts')) || [];
    const likedPost = { userId: post['userId'], id: post['id'], body: post['body'] };
    likedPosts.push(likedPost);
    console.log(likedPosts);
    localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
};
showPostInfo().then();
//# sourceMappingURL=post-details.js.map