"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below
const navigation = document.querySelector('.navigation--js');
const navigationSwitcher = document.querySelector('.navigation__switcher--js');
const navigationLink = document.querySelector('.navigation--item--js');

navigationSwitcher.addEventListener('click', (e) => {
  navigation.classList.toggle('navigation--visible');
})

navigationLink.addEventListener('click', (e) => {
  navigation.classList.toggle("navigation--visible");
})










