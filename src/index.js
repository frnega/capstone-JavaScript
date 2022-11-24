/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import './style.css';
import displayfoodCards from './modules/displayfooditem.js';

const contactBtn = document.querySelector('#contactSection');
const recipesSection = document.querySelector('#recipesSection');
const tagline = document.querySelector('.headlinetext');

const recipes = document.querySelector('#recipe-section');
const contact = document.querySelector('#contact');

const mainMenu = document.querySelector('.nav-items');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menuItems = document.querySelectorAll('nav .nav-items li');

contactBtn.addEventListener('click', () => {
  recipes.classList.add('hidden');
  contact.classList.remove('hidden');
  tagline.classList.add('hidden');
});

recipesSection.addEventListener('click', () => {
  contact.classList.add('hidden');
  recipes.classList.remove('hidden');
  tagline.classList.remove('hidden');
});

openMenu.addEventListener('click', () => {
  mainMenu.style = 'display: flex; top:0;';
});

closeMenu.addEventListener('click', () => {
  mainMenu.style = 'display: none;';
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    mainMenu.style = 'display: ';
  });
});

window.addEventListener('DOMContentLoaded', () => {
  displayfoodCards();
  contact.classList.add('hidden');
  recipes.classList.remove('hidden');
});
