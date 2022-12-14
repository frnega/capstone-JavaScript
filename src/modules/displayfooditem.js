import { getnumberofLikes, Interactlikebutton } from './likeitems.js';
import itemsCounter from './itemCounter.js';
import modalComment from './comment.js';

const recipeCount = document.querySelector('.item-count');
const recipeCards = document.querySelector('.recipe-cards');

const displayfoodCards = async () => {
  await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then((response) => response.json())
    .then((data) => {
      let html = '';
      data.meals.forEach((meal) => {
        html += `<div class="card" id="${meal.idMeal}">
               <div class="card-img">
                   <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
               </div>
               <div class="card-info">
                   <h2>${meal.strMeal}</h2>
                   <ul>
                       <li><button id=${meal.idMeal} class="comment-btn" type="button">Comments</button></li>
                       <li><button class="like-btn"><i class="fa-regular fa-heart"></i><span class="like-count">0</span></button></li>
                   </ul>
               </div>
             </div>`;
        recipeCards.innerHTML = html;
      });
      modalComment();
      getnumberofLikes();
      Interactlikebutton();
      itemsCounter(data.meals, recipeCount);
    });
};

export default displayfoodCards;
