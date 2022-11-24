import { commentsCounter } from './commentCounter.js';


const appKey = 'kMoYqkIjxGGhhy0t9Ado';
const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const header = document.querySelector('.comments-container h4')
const fetchComments = async (id) => {
  header.innerHTML = 'Comments (0)';
  await fetch(`${baseURL}${appKey}/comments?item_id=${id}`)
  .then((response) => response.json())
  .then((json) => {
    commentsCounter(json, header);
    const commentList = document.querySelector('.comments-generator');
    commentList.innerHTML = '';
     json.map((comment, index) => { // eslint-disable-line
       const userReview = document.createElement('li');
       if (index % 2 !== 0) {
        userReview.classList.add('commentrow-bg');
      }
       userReview.innerHTML = `
       <span class="date">${comment.creation_date}</span><span class="date">${comment.username}:</span> <span
       class="date">${comment.comment}</span>
       `;
       commentList.appendChild(userReview)
     }).join('');
  });
};

const postComment = async (username, comment, id) => {
  await fetch(`${baseURL}${appKey}/comments/`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((r) => {
    
  });
};

export { postComment, fetchComments };
