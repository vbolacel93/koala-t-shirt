🛒 Authentication & Checkout Features
✅ Login & Registration
Users can register and log in through the following pages:

register.html — Allows users to create an account (stored in localStorage).

login.html — Allows users to log in with previously registered credentials.

After logging in, users are redirected to the homepage (index.html). Authentication data is stored locally and checked on protected pages like the checkout.

Authentication logic is handled in js/auth.js.

✅ Checkout Page
The checkout.html page is only accessible to logged-in users. It includes:

Cart Summary: Displays current items stored in localStorage["cart"].

Shipping Form: Collects shipping and payment details.

Complete Purchase Button: Finalizes the purchase and clears the cart.

Clear Cart Button: Allows users to manually remove all items from the cart before checkout.

Logic handled in js/checkout.js.

💡 How Cart Works
The cart is stored as JSON in localStorage["cart"].

Items can be added from the shop/product pages.

The cart is automatically emptied after completing a purchase or clicking "🗑️ Clear Cart" on the checkout page.