// var inputs = document.querySelectorAll('.input-file');

// Array.prototype.forEach.call(inputs, function (input) {
//   var label = input.nextElementSibling,
//     labelVal = label.innerText;

//   input.addEventListener('change', function (e) {
//     var fileName = '';
//     if (this.files && this.files.length > 1)
//       fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
//     else
//       fileName = e.target.value.split('\\').pop();

//     if (fileName)
//       label.innerText = fileName;
//     else
//       label.innerHTML = labelVal;
//   });
// });

// function onFileUpload(input) {
//   var label = input.parentNode.childNodes[3],
//     labelVal = label.innerText;

//   var fileName = '';
//   if (input.files && input.files.length > 1) {
//     fileName = (input.getAttribute('data-multiple-caption') || '').replace('{count}', input.files.length);
//   } else {
//     fileName = input.value.split('\\').pop();
//   }

//   if (fileName) {
//     label.innerText = fileName;
//   } else {
//     label.innerHTML = labelVal;
//   }
// }