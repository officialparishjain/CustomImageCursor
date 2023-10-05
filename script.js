// var elem1 = document.querySelector("#elem1");

// var elem1Image = document.querySelector("#elem1 img");

// elem1.addEventListener("mousemove", function (point) {
//   elem1Image.style.left = point.x + "px";
//   elem1Image.style.top = point.y + "px";
// });

// elem1.addEventListener("mouseenter", function (point) {
//   elem1Image.style.opacity = 1;
// });

// elem1.addEventListener("mouseleave", function (point) {
//   elem1Image.style.opacity = 0;
// });

var elem = document.querySelectorAll(".element");

elem.forEach(function (val) {
  console.log(val.childNodes[3]);
  val.addEventListener("mouseenter", function () {
    val.childNodes[3].style.opacity = 1;
  });
  val.addEventListener("mouseleave", function () {
    val.childNodes[3].style.opacity = 0;
  });

  val.addEventListener("mousemove", function (point) {
    val.childNodes[3].style.left = point.x + "px";
    val.childNodes[3].style.top = point.y + "px";
  });
});
