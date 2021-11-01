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
    error.text("Формат файла, который вы выбрали - ." + extension + ". Файл должен быть в формате .png, .jpg, .gif, .psd, .ai або .cdr. Выберите файл в правильном формате и попробуйте еще раз.")
  } else if (size) {
    error.text("Размер файла, который вы выбрали - " + size + " МБ. Максимально допустимый размер файла - 25 МБ. Уменьшите размер файла и попробуйте еще раз.");
  } else {
    error.text("Простите, по неизвестным причинам ваш заказ не было отправлено.")
  }
});