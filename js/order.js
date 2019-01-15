jQuery(document).ready(function ($) {
  var order = $("#order");
  var fade = $(".fade");

  // Open order window
  $(".js-order-open").click(function (event) {
    event.preventDefault();
    order.load("/reusable/order.html", function () {
      if (order.outerHeight() < $(window).height()) {
        order.css("overflow-y", "hidden");
      }
    });
    order.addClass("order-modal");
    fade.addClass("show");
  });

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

  // Change button text on submit

  $(document).on("submit", ".order-form", function (e) {
    var button = $(e.target).find("input[type=submit]")
    var val = button.val();
    if (val === "Замовити") {
      val = "Замовлення надсилається";
    } else if (val === "Надіслати") {
      val = "Повідомлення надсилається"
    }
    button.val(val);
  })
})