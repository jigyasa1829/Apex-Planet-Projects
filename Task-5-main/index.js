const products = [
  // 📱 Mobiles
  { 
    id: 1, 
    type: "Mobile", 
    name: "iPhone 15 Pro", 
    description: "Latest Apple flagship with A17 chip", 
    image: "https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg", 
    price: 129999, 
    offer: "10% Off" 
},
  { 
    id: 2, 
    type: "Mobile", 
    name: "Samsung Galaxy S23 Ultra", 
    description: "Premium IPhone with 200MP camera", 
    image: "61JvFLHZ6NL._AC_UL960_FMwebp_QL65_.webp", 
    price: 109999, 
    offer: "12% Off" 
},
  { 
    id: 3, 
    type: "Mobile", 
    name: "OnePlus 11R", 
    description: "Performance phone with Snapdragon 8+ Gen 1", 
    image: "71m5T0WM-aL._AC_UY327_FMwebp_QL65_.webp", 
    price: 44999, 
    offer: "8% Off" 
},
  { 
    id: 4, 
    type: "Mobile", 
    name: "Xiaomi Redmi Note 12 Pro", 
    description: "Affordable 5G phone with 120Hz AMOLED", 
    image: "613RKG4NCgL._AC_UY327_FMwebp_QL65_.webp", 
    price: 18999, 
    offer: "15% Off" 
},

  // 📺 TV
  { 
    id: 5, 
    type: "TV", 
    name: "Sony Bravia 55-inch 4K OLED", 
    description: "Ultra HD Smart TV with Dolby Vision", 
    image: "81CxO98dMBL._AC_UL960_FMwebp_QL65_.webp", 
    price: 79999, 
    offer: "20% Off" 
},
  { 
    id: 6, 
    type: "TV", 
    name: "Samsung QLED 65-inch", 
    description: "Smart TV with Quantum Dot display", 
    image: "81x8FOwI+6L._AC_UY327_FMwebp_QL65_.webp", 
    price: 119999, 
    offer: "18% Off" 
},
  { 
    id: 7, 
    type: "TV", 
    name: "LG 43-inch 4K Smart TV", 
    description: "AI ThinQ with Netflix & Prime support", 
    image: "81YIFiyNPjL._AC_UY327_FMwebp_QL65_.webp", 
    price: 33999, 
    offer: "25% Off" 
},
  { 
    id: 8, 
    type: "TV", 
    name: "Mi TV 5X 50-inch", 
    description: "4K HDR Android TV with Dolby Atmos", 
    image: "81JPHbfsLlL._AC_UY327_FMwebp_QL65_.webp", 
    price: 32999, 
    offer: "22% Off" 
},

  // 💄 Cosmetics / Beauty
  { 
    id: 9, 
    type: "Cosmetics", 
    name: "Maybelline Lipstick", 
    description: "Matte lipstick with long lasting color", 
    image: "lipstick.webp", 
    price: 499, 
    offer: "30% Off" 
},
  {
     id: 10, 
     type: "Beauty", 
     name: "L’Oreal Paris Face Cream", 
     description: "Hydrating moisturizer for glowing skin", 
     image: "most.webp", 
     price: 799, 
     offer: "15% Off" 
    },
  { 
    id: 11, 
    type: "Cosmetics", 
    name: "Lakme Eyeliner", 
    description: "Waterproof black eyeliner", 
    image: "eyelinear.jpg", 
    price: 299, 
    offer: "20% Off" 
},
  { 
    id: 12, 
    type: "Beauty", 
    name: "Nivea Body Lotion", 
    description: "Smoothening lotion for dry skin", 
    image: "nivya.webp", 
    price: 349, 
    offer: "18% Off" 
},

  // 👗 Fashion
  { 
    id: 13, 
    type: "Fashion", 
    name: "Men's Denim Jacket", 
    description: "Trendy blue denim for casual wear", 
    image: "denim.webp", 
    price: 1599, 
    offer: "35% Off" 
},
  { 
    id: 14, 
    type: "Fashion", 
    name: "Women's Party Dress", 
    description: "Elegant red evening gown", 
    image: "gown.webp", 
    price: 2499, 
    offer: "40% Off" 
},
  { 
    id: 15, 
    type: "Fashion", 
    name: "Sneakers for Men", 
    description: "Casual sports sneakers", 
    image: "sneakers.webp", 
    price: 2199, 
    offer: "28% Off" 
},
  { 
    id: 16, 
    type: "Fashion", 
    name: "Handbag", 
    description: "Leather handbag for women", 
    image: "purse.webp", 
    price: 3299, 
    offer: "30% Off" 
},

  // 🔌 Gadgets
  { 
    id: 17, 
    type: "Gadget", 
    name: "Apple AirPods Pro", 
    description: "Wireless earbuds with noise cancellation", 
    image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._SX679_.jpg", 
    price: 22999, 
    offer: "12% Off" 
},
  { 
    id: 18,
    type: "Gadget", 
    name: "Fitbit Smartwatch", 
    description: "Fitness tracking smartwatch", 
    image: "watch.webp", 
    price: 8999, 
    offer: "22% Off" 
},
  { 
    id: 19, 
    type: "Gadget", 
    name: "GoPro Hero 11", 
    description: "4K action camera", 
    image: "two.jpg", 
    price: 39999, 
    offer: "10% Off" 
},
  {
     id: 20, 
     type: "Gadget", 
     name: "Kindle Paperwhite", 
     description: "E-book reader with backlight", 
     image: "three.webp", 
     price: 13999, 
     offer: "15% Off" 
    },

  // 🛋 Furniture
  { 
    id: 21, 
    type: "Furniture", 
    name: "Wooden Dining Table", 
    description: "4-seater dining set", 
    image: "four.webp", 
    price: 8999, 
    offer: "25% Off"
 },
  { 
    id: 22, 
    type: "Furniture", 
    name: "Recliner Sofa", 
    description: "Comfortable sofa for living room", 
    image: "five.webp", 
    price: 25999, 
    offer: "20% Off"
 },
  { 
    id: 23, 
    type: "Furniture", 
    name: "Office Chair", 
    description: "Ergonomic mesh chair", 
    image: "six.webp", 
    price: 5999, 
    offer: "18% Off" 
},
  { 
    id: 24, 
    type: "Furniture", 
    name: "Queen Size Bed", 
    description: "Solid wood bed with storage", 
    image: "seven.webp", 
    price: 18999, 
    offer: "30% Off"
 },

  // 🍫 Food
  { 
    id: 25, 
    type: "Food", 
    name: "Cadbury Silk Chocolate", 
    description: "Smooth creamy chocolate", 
    image: "eight.webp", 
    price: 149, 
    offer: "10% Off" 
},
  { 
    id: 26, 
    type: "Food", 
    name: "Kellogg’s Corn Flakes", 
    description: "Healthy breakfast cereal", 
    image: "nine.webp", 
    price: 349, 
    offer: "18% Off"
 },
  { 
    id: 27, 
    type: "Food", 
    name: "Domino’s Pizza Pack", 
    description: "Frozen pizza ready to bake", 
    image: "ten.webp", 
    price: 299, 
    offer: "20% Off"
 },
  { 
    id: 28, 
    type: "Food", 
    name: "Pepsi 2L Bottle", 
    description: "Refreshing cold drink", 
    image: "https://images-cdn.ubuy.co.in/66352d095a1dba5a220b640b-pepsi-cola-soda-2-l-bottle.jpg", 
    price: 99, 
    offer: "15% Off"
 },

  // 🧸 Toys
  { 
    id: 29,
     type: "Toy", 
     name: "Lego Classic Set", 
     description: "Creative building blocks", 
     image: "eleven.webp",
      price: 4499, 
      offer: "22% Off"
     },
  { 
    id: 30,
     type: "Toy", 
     name: "Remote Control Car", 
     description: "High-speed racing toy", 
     image: "twelve.webp", 
     price: 1499, 
     offer: "28% Off" 
    },
  { 
    id: 31, 
    type: "Toy", 
    name: "Barbie Doll", 
    description: "Fashion doll with accessories", 
    image: "thirteen.webp", 
    price: 999, 
    offer: "25% Off" 
},
  { 
    id: 32,
     type: "Toy", 
     name: "Hot Wheels Track Set", 
     description: "Racing track for cars", 
     image: "fourteen.webp", 
     price: 1999, 
     offer: "30% Off"
     },

  // 🛒 Grocery
  { 
    id: 33, 
    type: "Grocery", 
    name: "Aashirvaad Atta 5kg", 
    description: "Whole wheat flour", 
    image: "fiveteen.webp", 
    price: 289, 
    offer: "15% Off" 
},
  { 
    id: 34, 
    type: "Grocery", 
    name: "Tata Salt 1kg", 
    description: "Iodized salt", 
    image: "salt.webp", 
    price: 25, 
    offer: "5% Off" 
},
  { 
    id: 35, 
    type: "Grocery", 
    name: "Fortune Sunflower Oil 1L", 
    description: "Refined cooking oil", 
    image: "oil2.webp", 
    price: 145, 
    offer: "12% Off" 
},
  { 
    id: 36, 
    type: "Grocery", 
    name: "Amul Butter 500g", 
    description: "Fresh dairy butter", 
    image: "sixteen.jpg", 
    price: 265, 
    offer: "8% Off" 
},
];
let product=document.querySelector(".product");
var sum=" ";
products.forEach(function (ele){
    sum+=`<div class="card">
                <div class="like">
                <h2>${ele.offer}</h2>
                <i class="ri-heart-3-fill"></i>
                </div>
                <img src="${ele.image}">
                <h2>${ele.type}</h2>
                <p>${ele.description}</p>
                <h3>Price:${ele.price}</h3>
                <div class="add">
                <button>Add to Cart</button>
                <i class="ri-add-box-line"></i>
                </div>
            </div>`
})
product.innerHTML=sum;
let cart = JSON.parse(localStorage.getItem("cart")) || [];
  function addToCart(item){
    let existing = cart.find(cartItem => cartItem.name === item.name);
    if (existing) {
      existing.quantity += 1; 
    } else {
      item.quantity = 1;
      cart.push(item);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  }

  function updateCartCount() {
    document.getElementById("cartCount").innerText = cart.length;
  }
  updateCartCount();
  
  document.addEventListener("click", function(e) {
    if (e.target.classList.contains("add-cart")) {
      let card = e.target.closest(".card");
      let item = {
        name: card.querySelector("h2").innerText,
        price: parseInt(card.querySelector("h3").innerText.replace("₹","")),
        image: card.querySelector("img").src
      };
      addToCart(item);
    }
  });