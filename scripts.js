// LOL! I don't think i'd ever do this on a page...
// But if you just need to know if we can target elements
// with JS, I thought you should at least be entertained.

// create var for the hamburger menu
const hammy = document.querySelector('.fas');
console.log(hammy);

//create var for the nav menu
navDisplay = document.querySelector('ul');

// add an event listener to watch for a click on the icon
hammy.addEventListener('click', function() {
  navDisplay.classList.toggle('no-show');
});
