// Toggle the navbar for mobile view
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Toggle menu on button clicK
    mobileMenu.addEventListener('click',()=>{
        navLinks.classList.toggle('active');
        console.log('Menu toggled');
    });

    // Smooth scrolling for links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }

            // Close the menu after clicking
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                console.log('Menu closed');
            }
        });
    });
});


// Pizza data with original prices and discounts 
const pizzas = [
    { name: "Chicken Pizza", originalPrice: 12.99, discount: 20 },
    { name: "Veg Pizza", originalPrice: 10.99, discount: 15 },
    { name: "Cheese Pizza", originalPrice: 11.99, discount: 15 },
  ];
  
  // Calculate and display discounted prices
  document.addEventListener("DOMContentLoaded", () => {
    const pizzaItems = document.querySelectorAll(".pizza-item");
    pizzaItems.forEach((item, index) => {
      const discountedPrice = pizzas[index].originalPrice * (1 - pizzas[index].discount / 100);
      item.querySelector(".discounted-price").textContent = `$${discountedPrice.toFixed(2)}`;
      item.querySelector(".offer").textContent = `Limited Time Offer: ${pizzas[index].discount}% Off!`;
    });
  });
// Sample offer data
const pizzaOffers = {
    1: "20% OFF",
    2: "15% OFF",
    3: "10% OFF"
};

// Add offers dynamically
document.querySelectorAll('.pizza-item').forEach((item, index) => {
    const offerBadge = item.querySelector('.offer-badge');
    const offerText = pizzaOffers[index + 1]; // Assuming IDs start from 1
    if (offerText) {
        offerBadge.textContent = offerText;
    }
});
// Add event listener to all "View Details" buttons
document.querySelectorAll('.details-button').forEach(button => {
    button.addEventListener('click', function () {
        const url = this.getAttribute('data-url'); // Get URL from data attribute
        window.location.href = url; // Redirect to the specified page
    });
});

let cart = [];

function addToCart(itemName, itemPrice) {
  const quantityInput = document.getElementById(`${itemName.toLowerCase()}-quantity`);
  const quantity = parseInt(quantityInput.value);

  if (quantity <= 0) {
    alert('Quantity must be at least 1.');
    return;
  }}
//search bar
