const token = window.localStorage.getItem('token');

if(!token){
    window.location.replace('login.html')
}

const elPostList = findElement('.post__list');
const elPostTemplate = findElement('.template__post').content;
const elPostButton = findElement('.comments__button');


fetch('https://jsonplaceholder.typicode.com/posts/')
.then(response => response.json())
.then(posts => { 
    let dataLocal = window.localStorage.getItem('id');

    let filteredUser = posts.filter(element => element.userId == dataLocal)    
    
    
    filteredUser.forEach(post => {
        const postTemplate = elPostTemplate.cloneNode(true);

        const headerPost = postTemplate.querySelector('.post__header');
        const bodyPost = postTemplate.querySelector('.post__body');
        const commentsPostBtn = postTemplate.querySelector('.comments__button');

        headerPost.textContent = post.title;
        bodyPost.textContent = post.body;
        commentsPostBtn.dataset.uuid = post.id;

        elPostList.appendChild(postTemplate);

        commentsPostBtn.addEventListener('click', (evt) => {
        window.localStorage.setItem('userId' , evt.target.dataset.uuid)
            window.location.replace('comment.html')
        })
    })
})
    