jQuery(document).ready(function ($) {
  // Go back button
  var backButton = $('.message-button .btn-main');
  backButton.click(function (event) {
    event.preventDefault();
    window.history.go(-1);
  })

  // Get error message
  var error = $('.message-text .message-text-error');

  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
    }
  };

  var extension = getUrlParameter('extension');
  var size = getUrlParameter('size') / 1000000;

  if (extension) {
    error.text("The extension of your file is ." + extension + ". Your file must have the following extensions: .png, .jpg, .gif, .psd, .ai or .cdr. Select the file in the correct extension and try again.")
  } else if (size) {
    error.text("The size of your file is " + size + " MB. Maximum allowed file size - 25 MB. Reduce the file size and try again.");
  } else {
    error.text("Sorry, for unknown reasons, your order was not sent.")
  }
});