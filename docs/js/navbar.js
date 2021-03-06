window.onscroll = function() {
  let scrollPosY = window.pageYOffset | document.body.scrollTop;
  if (scrollPosY > 100) {
    document.querySelector('#navbar').classList.add('fixed');
  } else if (scrollPosY < 10) {
    document.querySelector('#navbar').classList.remove('fixed');
  }
};

document.querySelectorAll('.menu-item').forEach(x => {
  let link = x.cloneNode(true);
  document.querySelector('.mobile-menu-list').append(link);
});

document.querySelector('#menu-trigger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.mobile-menu').classList.toggle('show');
  // document.querySelector('body').classList.toggle('block');
  // document.querySelector('#navbar').classList.toggle('transparent');
});

document.querySelectorAll('.mobile-menu-list .menu-link').forEach(function(x) {
  x.addEventListener('click', function() {
    document.querySelector('#menu-trigger').classList.toggle('active');
    document.querySelector('.mobile-menu').classList.toggle('show');
  });
});
