document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const cartSummary = document.getElementById("cart-summary");
  const cartTotalEl = document.getElementById("cart-total");

  if (!user) {
    alert("Please login to proceed to checkout.");
    window.location.href = "login.html";
    return;
  }

  // Show cart items
  let total = 0;
  cart.forEach(item => {
    const itemEl = document.createElement("p");
    itemEl.textContent = `${item.name} - $${item.price}`;
    cartSummary.appendChild(itemEl);
    total += parseFloat(item.price);
  });

  cartTotalEl.textContent = total.toFixed(2);

  // Form submission
  const checkoutForm = document.getElementById("checkout-form");
  checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("full-name").value;
    const address = document.getElementById("address").value;
    const shipping = document.getElementById("shipping-method").value;
    const card = document.getElementById("card-number").value;

    if (!name || !address || !shipping || !card) {
      alert("Please fill in all required fields.");
      return;
    }

    alert("✅ Purchase completed successfully!\n\nYour order will be shipped to:\n" + address);

    // Clear cart
    localStorage.removeItem("cart");
    window.location.href = "index.html";
  });
});

  // Clear cart button
  const clearCartBtn = document.getElementById("clear-cart");
  clearCartBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear the cart?")) {
      localStorage.removeItem("cart");
      window.location.reload();
    }
  });