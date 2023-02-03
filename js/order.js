jQuery(document).ready(function ($) {
  var modal = $("#modal");
  var fade = $(".fade");

  // Open order window
  $(".js-order-open").click(function (event) {
    event.preventDefault();
    gtag('event', 'open_order_form');
    window.location.href = "/order/";
    // const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdRiRK98eUSyvesuW34pmtkWFOBjpUubBxW1BQ3-r3FEfDALw/viewform?usp=sf_link";
    // window.open(formUrl, '_blank').focus();

    // modal.load("/reusable/order.html", function () {
    //   if (modal.outerHeight() < $(window).height()) {
    //     modal.css("overflow-y", "hidden");
    //   }
    // });
    // modal.addClass("order-modal");
    // fade.addClass("show");
  });

  // Close order window
  // modal.on('click', '.js-order-close', closeOrder);
  // fade.on('click', closeOrder);
  // modal.on('click', function (e) {
  //   if (e.target == this)
  //     closeOrder();
  // });

  // function closeOrder() {
  //   modal.removeClass("order-modal");
  //   modal.html("");
  //   fade.removeClass("show");
  // }

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

function onFileUpload(input) {
  var label = input.parentNode.childNodes[3],
    labelVal = label.innerText;

  var fileName = '';
  if (input.files && input.files.length > 1) {
    fileName = (input.getAttribute('data-multiple-caption') || '').replace('{count}', input.files.length);
  } else {
    fileName = input.value.split('\\').pop();
  }

  if (fileName) {
    label.innerText = fileName;
  } else {
    label.innerHTML = labelVal;
  }
}