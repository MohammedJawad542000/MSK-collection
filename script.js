function shopNow() {
  alert("Redirecting to Shop section...");
  // You could also scroll to products
  document.querySelector(".products").scrollIntoView({ behavior: "smooth" });
}

function addToCart(productName) {
  alert(productName + " has been added to your cart!");
}
