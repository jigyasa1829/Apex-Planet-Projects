const allProducts = [
  // Mobile Products 
  { 
    id: 1, 
    category: "mobile", 
    type: "mobile", 
    name: "iPhone 15 Pro", 
    description: "Latest Apple flagship with A17 chip", 
    image: "https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg", 
    price: 129999, 
    offer: "10% Off" 
  },
  { 
    id: 2, 
    category: "mobile", 
    type: "mobile", 
    name: "Samsung Galaxy S23 Ultra", 
    description: "Premium Samsung with 200MP camera", 
    image: "61JvFLHZ6NL._AC_UL960_FMwebp_QL65_.webp", 
    price: 109999, 
    offer: "12% Off" 
  },
  { 
    id: 3, 
    category: "mobile", 
    type: "mobile", 
    name: "OnePlus 11R", 
    description: "Performance phone with Snapdragon 8+ Gen 1", 
    image: "71m5T0WM-aL._AC_UY327_FMwebp_QL65_.webp", 
    price: 44999, 
    offer: "8% Off" 
  },
  { 
    id: 4, 
    category: "mobile", 
    type: "mobile", 
    name: "Xiaomi Redmi Note 12 Pro", 
    description: "Affordable 5G phone with 120Hz AMOLED", 
    image: "613RKG4NCgL._AC_UY327_FMwebp_QL65_.webp", 
    price: 18999, 
    offer: "15% Off" 
  },
  { 
    id: 5, 
    category: "mobile", 
    type: "mobile", 
    name: "iPhone 15", 
    description: "Latest iPhone with amazing features and camera", 
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400", 
    price: 79999, 
    offer: "10% Off" 
  },
  { 
    id: 6, 
    category: "mobile", 
    type: "mobile", 
    name: "Samsung Galaxy S24", 
    description: "Premium Android phone with S Pen support", 
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400", 
    price: 64999, 
    offer: "15% Off" 
  },

  // TV & Appliances 
  { 
    id: 7, 
    category: "TV", 
    type: "Television", 
    name: "Sony Bravia 55-inch 4K OLED", 
    description: "Ultra HD Smart TV with Dolby Vision", 
    image: "81CxO98dMBL._AC_UL960_FMwebp_QL65_.webp", 
    price: 79999, 
    offer: "20% Off" 
  },
  { 
    id: 8, 
    category: "TV", 
    type: "Television", 
    name: "Samsung QLED 65-inch", 
    description: "Smart TV with Quantum Dot display", 
    image: "81x8FOwI+6L._AC_UY327_FMwebp_QL65_.webp", 
    price: 119999, 
    offer: "18% Off" 
  },
  { 
    id: 9, 
    category: "TV", 
    type: "Television", 
    name: "LG 43-inch 4K Smart TV", 
    description: "AI ThinQ with Netflix & Prime support", 
    image: "81YIFiyNPjL._AC_UY327_FMwebp_QL65_.webp", 
    price: 33999, 
    offer: "25% Off" 
  },
  { 
    id: 10, 
    category: "TV", 
    type: "Appliance", 
    name: "LG Double Door Refrigerator", 
    description: "Frost-free double door fridge with smart inverter", 
    image: "refrigerator2.jpg", 
    price: 38499, 
    offer: "25% Off" 
  },
  { 
    id: 11, 
    category: "TV", 
    type: "Appliance", 
    name: "Samsung Front Load Washing Machine", 
    description: "Front load with EcoBubble technology", 
    image: "ws.webp", 
    price: 29999, 
    offer: "28% Off" 
  },

  // Fashion
  { 
    id: 12, 
    category: "Fashion", 
    type: "Clothing", 
    name: "Men's Denim Jacket", 
    description: "Trendy blue denim for casual wear", 
    image: "denim.webp", 
    price: 1599, 
    offer: "35% Off" 
  },
  { 
    id: 13, 
    category: "Fashion", 
    type: "Clothing", 
    name: "Women's Party Dress", 
    description: "Elegant red evening gown", 
    image: "gown.webp", 
    price: 2499, 
    offer: "40% Off" 
  },
  { 
    id: 14, 
    category: "Fashion", 
    type: "Footwear", 
    name: "Sneakers for Men", 
    description: "Casual sports sneakers", 
    image: "sneakers.webp", 
    price: 2199, 
    offer: "28% Off" 
  },
  { 
    id: 15, 
    category: "Fashion", 
    type: "Accessories", 
    name: "Leather Handbag", 
    description: "Premium leather handbag for women", 
    image: "purse.webp", 
    price: 3299, 
    offer: "30% Off" 
  },
  { 
    id: 16, 
    category: "Fashion", 
    type: "Footwear", 
    name: "Casual Sneakers", 
    description: "Trendy white sneakers that match every outfit", 
    image: "sneakers2.webp", 
    price: 1999, 
    offer: "10% Off" 
  },

  // Beauty & Cosmetics 
  { 
    id: 17, 
    category: "Beauty", 
    type: "Skincare", 
    name: "Moisturizing Cream", 
    description: "Hydrating cream with aloe vera and vitamin E", 
    image: "cream.webp", 
    price: 599, 
    offer: "25% Off" 
  },
  { 
    id: 18, 
    category: "Beauty", 
    type: "Makeup", 
    name: "Matte Lipstick", 
    description: "Long-lasting matte finish lipstick", 
    image: "lipstick.webp", 
    price: 799, 
    offer: "20% Off" 
  },
  { 
    id: 19, 
    category: "Beauty", 
    type: "Haircare", 
    name: "Herbal Shampoo", 
    description: "Natural herbal shampoo for strong hair", 
    image: "haerbalshampoo.webp", 
    price: 349, 
    offer: "18% Off" 
  },
  { 
    id: 20, 
    category: "Beauty", 
    type: "Skincare", 
    name: "Aloe Face Wash", 
    description: "Gentle face wash with aloe extract", 
    image: "fc.webp", 
    price: 299, 
    offer: "30% Off" 
  },

  { 
    id: 21, 
    category: "Food", 
    type: "Snacks", 
    name: "Potato Chips Pack", 
    description: "Crispy salted potato chips perfect for snacking", 
    image: "chips.jpg", 
    price: 99, 
    offer: "15% Off" 
  },
  { 
    id: 22, 
    category: "Food", 
    type: "Chocolates", 
    name: "Dark Chocolate Bar", 
    description: "Rich dark chocolate with 70% cocoa", 
    image: "choco.webp", 
    price: 199, 
    offer: "25% Off" 
  },
  { 
    id: 23, 
    category: "Food", 
    type: "Beverages", 
    name: "Fresh Orange Juice", 
    description: "100% pure orange juice with no added sugar", 
    image: "bevrage.webp", 
    price: 149, 
    offer: "10% Off" 
  },

  // Electronics 
  { 
    id: 24, 
    category: "Electronics", 
    type: "Audio", 
    name: "Sony WH-1000XM5", 
    description: "Noise-canceling headphones with long battery", 
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500", 
    price: 29999, 
    offer: "20% Off" 
  },
  { 
    id: 25, 
    category: "Electronics", 
    type: "Camera", 
    name: "Canon EOS 90D", 
    description: "Professional DSLR camera for photography", 
    image: "camera.webp", 
    price: 115000, 
    offer: "22% Off" 
  },

  // Furniture
  { 
    id: 26, 
    category: "Furniture", 
    type: "Sofa", 
    name: "Modern 3-Seater Sofa", 
    description: "Premium fabric sofa with soft cushions", 
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7", 
    price: 25999, 
    offer: "20% Off" 
  },
  { 
    id: 27, 
    category: "Furniture", 
    type: "Dining Table", 
    name: "6-Seater Wooden Dining Table", 
    description: "Elegant solid wood dining table set", 
    image: "dinning.webp", 
    price: 18499, 
    offer: "15% Off" 
  },

  // Grocery
  { 
    id: 28, 
    category: "Grocery", 
    type: "Cleaning", 
    name: "Tide Washing Powder 500g", 
    description: "Organic fragrance washing powder", 
    image: "tide.webp", 
    price: 664, 
    offer: "10% Off" 
  },
  { 
    id: 29, 
    category: "Grocery", 
    type: "Oil", 
    name: "Fortune Sunflower Oil 500ml", 
    description: "Fortune sunlight refined oil", 
    image: "oil2.webp", 
    price: 139, 
    offer: "12% Off" 
  },
  { 
    id: 30, 
    category: "Grocery", 
    type: "Spices", 
    name: "Tata Salt 1kg", 
    description: "Free flowing and iodized salt", 
    image: "salt.webp", 
    price: 59, 
    offer: "15% Off" 
  }
];


function renderProducts(categoryOrList) {
  const container = document.querySelector(".product");
  const offer = document.querySelector(".third");

  if (!container) {
    console.error(`Container ".product" not found!`);
    return;
  }
  container.innerHTML = "";
  let filtered = allProducts; 
  if (typeof categoryOrList === "string") {
    filtered = allProducts.filter(
      p => p.category.toLowerCase() === categoryOrList.toLowerCase()
    );
    offer.style.display = "none";
  } 
  else if (Array.isArray(categoryOrList)) {
    filtered = categoryOrList;
    offer.style.display = "none";
  }  
  else {
    filtered = allProducts;
   if(offer){
     offer.style.display = "block";
   }
  } 
  if (filtered.length === 0) {
    container.innerHTML = `<h2 style="text-align:center">No products found 😢</h2>`;
    return;
  }


  filtered.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <div class="like">
          <h2>${item.offer}</h2>
          <i class="ri-heart-3-fill"></i>
        </div>
        <img src="${item.image}" alt="${item.name}">
        <h2>${item.name}</h2>
        <h3>₹${item.price}</h3>
        <div class="add">
          <button class="add-cart" data-name="${item.name}" data-price="${item.price}" data-image="${item.image}">Add to Cart <i class="ri-add-box-line"></i></button>
        </div>
      </div>
    `;
  });
}

renderProducts();


function searchProducts() {
  const input = document.querySelector(".searchInput input").value.toLowerCase();

  if (input.trim() === "") {
    renderProducts(); 
    return;
  }
  const results = allProducts.filter(p =>
    p.name.toLowerCase().includes(input) ||
    p.type.toLowerCase().includes(input) ||
    p.category.toLowerCase().includes(input)
  );

  renderProducts(results);
}

// Enter key press pe bhi search chalega
document.getElementById("searchInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    searchProducts();
  }
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Add to cart function
  function addToCart(item) {
    let existing = cart.find(cartItem => cartItem.name === item.name);

    if (existing) {
      existing.quantity += 1; 
    } else {
      item.quantity = 1;
      cart.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    showNotification(item.name + " added to cart!");
  }


  function updateCartCount() {
    document.getElementById("cartCount").innerText = cart.length;
  }
  updateCartCount();
  document.addEventListener("click", function(e) {
    if (e.target.classList.contains("add-cart")) {
      let item = {
        name: e.target.getAttribute("data-name"),
        price: parseInt(e.target.getAttribute("data-price")),
        image: e.target.getAttribute("data-image")
      };
      addToCart(item);
    }
  });

  function showNotification(message) {
    let notification = document.getElementById("notification");

    if (!notification) {
      notification = document.createElement("div");
      notification.id = "notification";
      notification.style.position = "fixed";
      notification.style.top = "20px";
      notification.style.right = "20px";
      notification.style.background = "#4CAF50";
      notification.style.color = "white";
      notification.style.padding = "10px 20px";
      notification.style.borderRadius = "5px";
      notification.style.display = "none";
      notification.style.zIndex = "1000";
      document.body.appendChild(notification);
    }

    notification.innerText = message;
    notification.style.display = "block";

    setTimeout(() => {
      notification.style.display = "none";
    }, 2000); 
  }


  let loginBtn = document.getElementById("loginBtn");
   let username = localStorage.getItem("user");
  if (localStorage.getItem("user")) {
      loginBtn.innerText = `${username} Logout`;
      loginBtn.addEventListener("click", function () {
          localStorage.clear();
          window.location.href = "login.html";
      });
  } else {
      loginBtn.innerText = "Login";
      loginBtn.addEventListener("click", function () {
          window.location.href = "login.html";
      });
  }