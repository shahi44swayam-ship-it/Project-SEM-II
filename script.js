const addButtons = document.querySelectorAll(".add-btn");
const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");
const cartCount = document.getElementById("cart-count");

let cart = [];

addButtons.forEach(button => {
    button.addEventListener("click", () => {

        const product = {
            name: button.dataset.name,
            price: Number(button.dataset.price)
        };

        cart.push(product);

        updateCart();
    });
});

function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        const div = document.createElement("div");

        div.classList.add("cart-item");

        div.innerHTML = `
            <span>${item.name} - ₹${item.price}</span>
            <button class="remove-btn" onclick="removeItem(${index})">
                Remove
            </button>
        `;

        cartItems.appendChild(div);
    });

    totalPrice.textContent = total;
    cartCount.textContent = cart.length;
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}