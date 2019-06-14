'use strict';

// document.addEventListener('scroll', function() {
//   document.querySelectorAll('[scroll]').forEach(function(x, index) {
//     if (window.pageYOffset + 100 > x.offsetTop) {
//       let number = index;
//       document.querySelectorAll('.menu-link').forEach(function(x) {
//         x.classList.remove('active');
//       });
//       document.querySelectorAll('.menu-link')[number].classList.add('active');
//     }
//   });
// });

// console.log(window.pageYOffset);
// console.log(window.outerHeight);
// console.log(window.pageYOffset + 0.5 * window.outerHeight);
// console.log(document.body.clientHeight);
// console.log(document.querySelector('[scroll="app"]').getBoundingClientRect());
console.log(
  document.querySelector('[scroll="app"]').getBoundingClientRect().top
);
console.log(
  document.querySelector('[scroll="app"]').getBoundingClientRect().bottom
);

let middleScreen = 0.4 * window.outerHeight;
console.log(middleScreen);
document.addEventListener('scroll', function() {
  document.querySelectorAll('[scroll]').forEach(function(x, index) {
    if (x.getBoundingClientRect().top < middleScreen) {
      let number = index;
      document.querySelectorAll('.menu-link').forEach(function(x) {
        x.classList.remove('active');
      });
      document.querySelectorAll('.menu-link')[number].classList.add('active');
    }
  });
});
