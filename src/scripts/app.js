const hello = 'World';
console.log(hello);

$(function () {
window.sr = ScrollReveal({ reset: true });
  sr.reveal('.me', {delay: 500});
  sr.reveal('.workTitle', { delay: 500 });
  sr.reveal('.skillsTitle', { delay: 500 });
  sr.reveal('.contactTitle', { delay: 500 });
  sr.reveal('.project', { scale: 0.85 });

$('.menu a').smoothScroll({
  offset: -10
});


  // Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  let menu = document.querySelector("nav");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    console.log('menu clicked');
  // Do something else, like open/close menu
    menu.classList.toggle("activeMenu");
    console.log('added the class')
    
  });
});