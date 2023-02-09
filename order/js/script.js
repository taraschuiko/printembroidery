jQuery(document).ready(function ($) {
  // Go back button
  var backButton = $('.message-button .btn-main');
  backButton.click(function (event) {
    event.preventDefault();
    window.history.go(-3);
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
    error.text("Формат файлу, який ви вибрали - ." + extension + ". Файл повинен бути у форматі .png, .jpg, .gif, .psd, .ai або .cdr. Виберіть файл у правильному форматі та спробуйте ще раз.")
  } else if (size) {
    error.text("Розмір файлу, який ви вибрали - " + size + " МБ. Максимально дозволений розмір файлу - 25 МБ. Зменшіть розмір файлу та спробуйте ще раз.");
  } else {
    error.text("Вибачте, з невідомих причин ваше замовлення не було надіслано.")
  }
});