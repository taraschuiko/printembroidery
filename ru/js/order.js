jQuery(document).ready(function ($) {
  var modal = $("#modal");
  var fade = $(".fade");

  // Open order window
  $(".js-order-open").click(function (event) {
    event.preventDefault();
    modal.load("/ru/reusable/order.html", function () {
      if (modal.outerHeight() < $(window).height()) {
        modal.css("overflow-y", "hidden");
      }
    });
    modal.addClass("order-modal");
    fade.addClass("show");
  });

  // Close order window
  modal.on('click', '.js-order-close', closeOrder);
  fade.on('click', closeOrder);
  modal.on('click', function (e) {
    if (e.target == this)
      closeOrder();
  });

  function closeOrder() {
    modal.removeClass("order-modal");
    modal.html("");
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
    button.attr("disabled", "disabled");
  })
})