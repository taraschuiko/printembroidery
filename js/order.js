jQuery(document).ready(function ($) {
  $(".js-btn-order").click(function (event) {
    event.preventDefault();
    $("#order").load("/reusable/order.html");
    $("#order").addClass("order");
  })
})