$('.menu-link').each(function() {
  $(this).click(function(e) {
    e.preventDefault();
    let scrollTo = e.target.href.split('#')[1];
    $('html, body').animate(
      {
        scrollTop: $(`[scroll="${scrollTo}"]`).offset().top - 90
      },
      800
    );
  });
});
