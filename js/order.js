jQuery(document).ready(function ($) {
  var order = $("#order");
  var fade = $(".fade");

  // Open order window
  $(".js-order-open").on('click', openOrder);

  function openOrder() {
    event.preventDefault();
    order.load("/reusable/order.html");
    order.addClass("order-modal");
    fade.addClass("show");
  }

  // Close order window
  order.on('click', '.js-order-close', closeOrder);
  fade.on('click', closeOrder);
  order.on('click', function (e) {
    if (e.target == this)
      closeOrder();
  });

  function closeOrder() {
    order.removeClass("order-modal");
    order.html("");
    fade.removeClass("show");
  }
})