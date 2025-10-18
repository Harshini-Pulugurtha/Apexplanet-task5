let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ✅ Function to show toast message
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// ✅ Add to Cart
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  showToast(`${name} added to cart!`);
}

// ✅ Display Cart
function displayCart() {
  const table = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");
  let total = 0;

  table.innerHTML = ""; // clear previous rows

  cart.forEach(item => {
    const row = table.insertRow();
    row.insertCell(0).textContent = item.name;
    row.insertCell(1).textContent = "₹" + item.price;
    total += item.price;
  });

  totalElement.textContent = "Total: ₹" + total;
}

if (window.location.pathname.includes("cart.html")) {
  displayCart();
}
