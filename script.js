'use strict';
const currentUser = document.querySelector('header');
const userButton = document.querySelector('.user');

userButton.addEventListener('click', () => {
    let newUser = prompt('Username')
    currentUser.textContent = newUser
})