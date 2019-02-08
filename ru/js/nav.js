jQuery(document).ready(function ($) {

  // Mobile scroll

  var $prevImage = $('#nav .nav-logo img').attr("src");
  $(window).scroll(function () {
    var $height = $(window).scrollTop();

    if ($height > 40) {
      $('#nav').addClass('nav-sticky');
      if ($('#nav .nav-logo img').attr("src") != "/data/img/logo-dark.svg") {
        $('#nav .nav-logo img').attr("src", "/data/img/logo-dark.svg");
      }
    } else {
      $('#nav').removeClass('nav-sticky');
      if ($('#nav .nav-logo img').attr("src") != $prevImage) {
        $('#nav .nav-logo img').attr("src", $prevImage);
      }
    }
  });

  // Mobile menu

  $(".mobile-menu-icon p, .mobile-menu-close").on("click", function (t) {
    t.preventDefault();
    $(".mobile-menu").toggleClass("mobile-menu--closed");
  })

  $(".mobile-menu-main").height($(".mobile-menu").outerHeight() - $(".mobile-menu-top").outerHeight() * 2);

  // Dropdown

  $(".nav-menu-dropdown").on("mouseover", function () {
    $(".nav-menu-dropdown-items", this).css("display", "block");
  })

  $(".nav-menu-dropdown").on("mouseout", function () {
    $(".nav-menu-dropdown-items", this).css("display", "none");
  })

});