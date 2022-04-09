function image1() {
  document.getElementById("image_1").style.backgroundImage =
    "url(images/image-product-1.jpg)";
}

function image2() {
  document.getElementById("image_1").style.backgroundImage =
    "url(images/image-product-2.jpg)";
}

function image3() {
  document.getElementById("image_1").style.backgroundImage =
    "url(images/image-product-3.jpg)";
}

function image4() {
  document.getElementById("image_1").style.backgroundImage =
    "url(images/image-product-4.jpg)";
}

var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var price = document.getElementById("price");
var counterInput = document.getElementById("counterInput");
var count = 1;
var iconCartNum = document.getElementById("iconCartNum");

function plusFunc() {
  if (plus) {
    count++;
    counterInput.innerHTML = count;
    price.innerHTML = "$" + count * 125 + ".00";
    console.log(count);
  }
}

function minusFunc() {
  if (minus && count !== 1) {
    count--;
    counterInput.innerHTML = count;
    price.innerHTML = "$" + count * 125 + ".00";
    console.log(count);
  }
}

function addCartFunc() {
  iconCartNum.innerHTML = count;
}
