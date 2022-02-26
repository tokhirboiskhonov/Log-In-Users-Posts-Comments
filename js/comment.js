const token = window.localStorage.getItem('token');

if(!token){
    window.location.replace('login.html')
}

const elCommentList = findElement('.comment__list');

const elCommentTemplate = findElement('.comment__template').content;

const dataId = window.localStorage.getItem('userId');


fetch('https://jsonplaceholder.typicode.com/comments/')
.then(response => response.json())
.then(comments => {

    const datas = comments.filter(evt => evt.postId == dataId);

    datas.map((j,elem) => {
        const commentTemplate = elCommentTemplate.cloneNode(true);

        const commentTitle = commentTemplate.querySelector('.comment__title');

        const commentEmail = commentTemplate.querySelector('.comment__email');

        const commentBody = commentTemplate.querySelector('.comment__body');

        commentTitle.textContent = j.name;
        commentEmail.textContent = j.email;
        commentBody.textContent = j.body;

        elCommentList.appendChild(commentTemplate);
    }) 
});