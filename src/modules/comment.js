import { postComment, fetchComments } from './commentApi.js';

const CommentModal = document.querySelector('.popup-container');
const modalImage = document.querySelector('.popup-image img');
const mealName = document.querySelector('.dish-name');
const recipe = document.querySelector('.recipe');
const close = document.querySelector('#close');
const formContainer = document.querySelector('.add-comment');

const baseURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const createForm = (id) => {
  formContainer.innerHTML = '<h4 class="add"> Add a comment</h4>';
  const form = document.createElement('form');
  form.classList.add('form');
  form.id = id;
  form.innerHTML = `
         <div class="input-con">
         <input class='name' name='name' type="text" placeholder="Your Name" pattern="[a-zA-Z ]{1,30}" required>
          <input class='new-comment' name='comment' type="text" placeholder="Write your insight" pattern="[a-zA-Z9-0 ]{1,150}" required>
          <input class="btn" name='comment-button' type="submit" value="Comment">
          </div>
          `;
  formContainer.appendChild(form);
  const name = document.querySelector('.name');
  const comment = document.querySelector('.new-comment');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (name.value && comment.value) {
      postComment(name.value, comment.value, form.id);
      form.reset();
    }
  });
};

const modalComment = () => {
  const commentBtn = document.querySelectorAll('.comment-btn');

  commentBtn.forEach((button) => {
    button.addEventListener('click', () => {
      createForm(button.id);
      fetchComments(button.id);
      fetch(`${baseURL}${button.id}`)
        .then((response) => response.json())
        .then((elem) => {
          CommentModal.classList.remove('hidden');
          modalImage.setAttribute('src', elem.meals[0].strMealThumb);
          mealName.innerHTML = elem.meals[0].strMeal;
          recipe.innerHTML = elem.meals[0].strInstructions;
        });
    });
  });

  close.addEventListener('click', () => {
    CommentModal.classList.add('hidden');
  });
};

export default modalComment;

//           const deleteBtn = comments.querySelector('button#delete-btn');
//           deleteBtn.addEventListener('click', () => {
//             comments.remove();
//           })
//           document.body.appendChild(comments);
//         }
//       })
//     })
// }