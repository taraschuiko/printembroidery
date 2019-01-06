jQuery(document).ready(function ($) {
  var order = $("#order");
  var fade = $(".fade");

  $(".js-btn-order").click(function (event) {
    event.preventDefault();
    order.load("/reusable/order.html");
    order.addClass("order");
    fade.addClass("show");
  }, addCloseButtonListener)

  var addCloseButtonListener = function () {
    console.log($(".js-btn-order-close"));

    $(".js-btn-order-close").click(function (event) {
      order.removeClass("order");
      fade.removeClass("show");
      console.log("works");
    })
  }

  // $("#order").load("/reusable/order.html");
  // $("#order").addClass("order");
  // $(".fade").addClass("show");
})