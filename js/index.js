jQuery(document).ready(function ($) {
  var video = document.querySelectorAll(".header-video")[0];
  var source = document.querySelectorAll(".header-video source")[0];

  if ($(window).width() > 768) {
    var src = source.getAttribute("data-src");
    source.setAttribute("src", src);
    $(".header-video").css("display", "block");
    video.load();
  }
});