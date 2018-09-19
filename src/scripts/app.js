const hello = 'World';
console.log(hello);

// function smoothScroll(target, duration) {
//   let section = document.querySelector(target);
//   let sectionPosition = target.getBoundingClientRect().top;
//   let startPosition = window.pageYOffset();

//   console.log(sectionPosition);
// }

// smoothScroll('#about', 1000);

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
