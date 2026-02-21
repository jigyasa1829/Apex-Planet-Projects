const products = [
            {
                id: 1,
                title: "iPhone 15 Pro Max",
                category: "Electronics",
                price: 134900,
                rating: 4.8,
                image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=300&fit=crop",
                sale: true,
                salePercent: 15
            },
            {
                id: 2,
                title: "Nike Air Jordan",
                category: "Clothing",
                price: 12999,
                rating: 4.6,
                image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
                sale: false
            },
            {
                id: 3,
                title: "MacBook Pro M3",
                category: "Electronics",
                price: 199900,
                rating: 4.9,
                image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
                sale: true,
                salePercent: 20
            },
            {
                id: 4,
                title: "The Psychology of Money",
                category: "Books",
                price: 299,
                rating: 4.7,
                image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
                sale: false
            },
            {
                id: 5,
                title: "Samsung 4K Smart TV",
                category: "Electronics",
                price: 45999,
                rating: 4.5,
                image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop",
                sale: true,
                salePercent: 25
            },
            {
                id: 6,
                title: "Adidas Hoodie",
                category: "Clothing",
                price: 3999,
                rating: 4.4,
                image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop",
                sale: false
            },
            {
                id: 7,
                title: "Coffee Table Set",
                category: "Home",
                price: 8999,
                rating: 4.3,
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
                sale: true,
                salePercent: 30
            },
            {
                id: 8,
                title: "Yoga Mat Premium",
                category: "Sports",
                price: 1299,
                rating: 4.6,
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
                sale: false
            }
        ];

        let filteredProducts = [...products];
        let cart = [];
        function init() {
            displayProducts(products);
            setupEventListeners();
        }
        function setupEventListeners() {
            document.getElementById('categoryFilter').addEventListener('change', filterProducts);
            document.getElementById('priceFilter').addEventListener('change', filterProducts);
            document.getElementById('sortOption').addEventListener('change', sortProducts);
            document.getElementById('searchInput').addEventListener('input', searchProducts);
        }
        function displayProducts(productsToShow) {
            const grid = document.getElementById('productsGrid');
            
            if (productsToShow.length === 0) {
                grid.innerHTML = '<div class="no-products">No products found matching your criteria.</div>';
                return;
            }
            grid.innerHTML = productsToShow.map(product => `
                <div class="product-card">
                    ${product.sale ? `<div class="sale-badge">${product.salePercent}% OFF</div>` : ''}
                    <img src="${product.image}" alt="${product.title}" class="product-image">
                    <div class="product-info">
                        <div class="product-category">${product.category}</div>
                        <div class="product-title">${product.title}</div>
                        <div class="product-price">₹${product.price.toLocaleString()}</div>
                        <div class="product-rating">
                            <div class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</div>
                            <div class="rating-text">(${product.rating})</div>
                        </div>
                        <div class="product-actions">
                            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                            <button class="wishlist-btn" onclick="addToWishlist(${product.id})">♡</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
        function filterProducts() {
            const categoryFilter = document.getElementById('categoryFilter').value;
            const priceFilter = document.getElementById('priceFilter').value;
            
            filteredProducts = products.filter(product => {
                const categoryMatch = categoryFilter === 'all' || product.category === categoryFilter;
                
                let priceMatch = true;
                if (priceFilter === 'low') priceMatch = product.price < 1000;
                else if (priceFilter === 'mid') priceMatch = product.price >= 1000 && product.price <= 10000;
                else if (priceFilter === 'high') priceMatch = product.price > 10000;
                
                return categoryMatch && priceMatch;
            });

            displayProducts(filteredProducts);
        }
        function sortProducts() {
            const sortOption = document.getElementById('sortOption').value;
            
            switch (sortOption) {
                case 'priceLowHigh':
                    filteredProducts.sort((a, b) => a.price - b.price);
                    break;
                case 'priceHighLow':
                    filteredProducts.sort((a, b) => b.price - a.price);
                    break;
                case 'ratingHighLow':
                    filteredProducts.sort((a, b) => b.rating - a.rating);
                    break;
                case 'newest':
                    filteredProducts.sort((a, b) => b.id - a.id);
                    break;
                case 'popular':
                    filteredProducts.sort((a, b) => b.rating - a.rating);
                    break;
                default:
                    filteredProducts = [...products];
            }

            displayProducts(filteredProducts);
        }
        function searchProducts() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            
            if (searchTerm === '') {
                filteredProducts = [...products];
            } else {
                filteredProducts = products.filter(product => 
                    product.title.toLowerCase().includes(searchTerm) ||
                    product.category.toLowerCase().includes(searchTerm)
                );
            }

            displayProducts(filteredProducts);
        }
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({...product, quantity: 1});
            }

            updateCartCount();
            showNotification(`${product.title} added to cart!`);
        }
        function addToWishlist(productId) {
            const product = products.find(p => p.id === productId);
            showNotification(`${product.title} added to wishlist!`);
        }
        function updateCartCount() {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            document.getElementById('cartCount').textContent = totalItems;
        }
        function toggleCart() {
            if (cart.length === 0) {
                showNotification('Your cart is empty!');
                return;
            }
            
            let cartItems = cart.map(item => 
                `${item.title} x${item.quantity} - ₹${(item.price * item.quantity).toLocaleString()}`
            ).join('\n');
            
            let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            alert(`Cart Items:\n${cartItems}\n\nTotal: ₹${total.toLocaleString()}`);
        }
        function toggleAuth() {
            showNotification('Authentication feature coming soon!');
        }
        function showNotification(message) {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(45deg, #4ecdc4, #44a08d);
                color: white;
                padding: 15px 25px;
                border-radius: 10px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                z-index: 1000;
                animation: slideIn 0.3s ease;
            `;
            notification.textContent = message;
            const style = document.createElement('style');
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            `;
            document.head.appendChild(style);

            document.body.appendChild(notification);
            setTimeout(() => {
                notification.remove();
                style.remove();
            }, 3000);
        }
        init();