jQuery(document).ready(function ($) {
  // Go back button
  var backButton = $('.message-button .btn-main');
  backButton.click(function (event) {
    event.preventDefault();
    window.history.go(-3);
  })
});