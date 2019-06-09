window.onscroll = function() {
  let scrollPosY = window.pageYOffset | document.body.scrollTop;
  if (scrollPosY > 100) {
    document.querySelector('#navbar').classList.add('fixed');
  } else if (scrollPosY < 10) {
    document.querySelector('#navbar').classList.remove('fixed');
  }
};
