$(window).scroll(function () {
  var $height = $(window).scrollTop();
  if ($height > 40) {
    $('#nav').addClass('nav-sticky');
    $('#nav .nav-logo img').attr("src", "./data/img/logo-dark.svg");
  } else {
    $('#nav').removeClass('nav-sticky');
    $('#nav .nav-logo img').attr("src", "./data/img/logo-light.svg");
  }
});