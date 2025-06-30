document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    
    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
        overlay.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-bars');
    });
    
    // Close mobile menu when clicking on overlay or link
    overlay.addEventListener('click', closeMobileMenu);
    
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    function closeMobileMenu() {
        navbar.classList.remove('active');
        overlay.classList.remove('active');
        menuToggle.querySelector('i').classList.remove('fa-times');
        menuToggle.querySelector('i').classList.add('fa-bars');
    }
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Product data
    const products = [
        {
            id: 1,
            title: "USB-C to USB-C Cable (3.1 Gen 2)",
            category: "usb",
            description: "Our premium USB-C cable supports 10Gbps data transfer and 100W power delivery. Features durable braided nylon exterior and gold-plated connectors for maximum conductivity.",
            price: 7824.69,
            image: "img/img1.jpeg",
            features: [
                "10Gbps data transfer speed",
                "100W power delivery",
                "Braided nylon exterior",
                "Gold-plated connectors",
                "Reinforced stress points",
                "1.8m length"
            ],
            badge: "Bestseller"
        },
        {
            id: 2,
            title: "HDMI 2.1 Ultra High Speed Cable",
            category: "hdmi",
            description: "Certified HDMI 2.1 cable supporting 8K@60Hz and 4K@120Hz with dynamic HDR. Perfect for next-gen gaming consoles and home theater systems.",
            price: 139.59,
            image: "img/img2.jpeg",
            features: [
                "8K@60Hz / 4K@120Hz",
                "48Gbps bandwidth",
                "Dynamic HDR support",
                "eARC compatible",
                "3m length",
                "Braided cable"
            ],
            badge: "Premium"
        },
        {
            id: 3,
            title: "Cat 8 Ethernet Cable (40Gbps)",
            category: "network",
            description: "Shielded Cat8 cable with 40Gbps speed and 2000MHz bandwidth. Ideal for data centers, gaming, and 4K streaming.",
            price: 49999.49,
            image: "img/img3.jpeg",
            features: [
                "40Gbps speed",
                "2000MHz bandwidth",
                "Double shielded",
                "Gold-plated connectors",
                "3m length",
                "CMR rated"
            ],
            badge: "Professional"
        },
        {
            id: 4,
            title: "3.5mm Audio Cable (Gold Plated)",
            category: "audio",
            description: "High-fidelity audio cable with gold-plated connectors for superior sound quality. Oxygen-free copper conductors minimize signal loss.",
            price: 19050.89,
            image: "img/img4.jpeg",
            features: [
                "Gold-plated connectors",
                "Oxygen-free copper",
                "24K gold plating",
                "Durable PVC jacket",
                "1.2m length",
                "Noise shielded"
            ],
            badge: "Studio Grade"
        },
        {
            id: 5,
            title: "USB-C to Lightning Cable (MFi Certified)",
            category: "usb",
            description: "Apple MFi certified USB-C to Lightning cable for fast charging and data transfer. Reinforced connectors for extended durability.",
            price: 20050.01,
            image: "img/img5.jpeg",
            features: [
                "MFi certified",
                "Fast charging",
                "480Mbps data transfer",
                "Reinforced connectors",
                "1m length",
                "Tangle-free"
            ],
            badge: "Apple Certified"
        },
        {
            id: 6,
            title: "Optical Audio Cable (Toslink)",
            category: "audio",
            description: "Premium digital optical audio cable with precision polished connectors for crystal clear audio transmission without interference.",
            price: 20750.19,
            image: "img/img1.jpeg",
            features: [
                "Toslink compatible",
                "Precision polished connectors",
                "Low-jitter design",
                "Flexible PVC jacket",
                "2m length",
                "Gold-plated"
            ],
            badge: "Premium"
        },
        {
            id: 7,
            title: "USB-C to HDMI Adapter (4K@60Hz)",
            category: "usb",
            description: "Compact USB-C to HDMI adapter supporting 4K@60Hz video output. Perfect for laptops, tablets, and smartphones with USB-C ports.",
            price: 34050.99,
            image: "img/img2.jpeg",
            features: [
                "4K@60Hz output",
                "Plug-and-play",
                "Compact design",
                "Supports HDR",
                "USB-C powered",
                "2-year warranty"
            ],
            badge: "New"
        },
        {
            id: 8,
            title: "DisplayPort Cable (8K Certified)",
            category: "hdmi",
            description: "High-performance DisplayPort 1.4 cable certified for 8K resolution and HDR. Ideal for gaming and professional video editing.",
            price: 44000.99,
            image: "img/img3.jpeg",
            features: [
                "8K@60Hz support",
                "DisplayPort 1.4",
                "32.4Gbps bandwidth",
                "HDR10 compatible",
                "2m length",
                "Braided cable"
            ],
            badge: "Pro"
        }
    ];
    
    // Display products
    const productsGrid = document.querySelector('.products-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    function displayProducts(category = 'all') {
        productsGrid.innerHTML = '';
        
        const filteredProducts = category === 'all' 
            ? products 
            : products.filter(product => product.category === category);
        
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.dataset.category = product.category;
            
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
                    ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">₦${product.price.toFixed(2)}</div>
                    <div class="product-actions">
                        <button class="view-details" data-id="${product.id}">Details</button>
                        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    </div>
                </div>
            `;
            
            productsGrid.appendChild(productCard);
        });
        
        // Add event listeners to new buttons
        addViewDetailsEventListeners();
        addToCartEventListeners();
    }
    
    // Filter products
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const category = this.dataset.category;
            displayProducts(category);
            
            // Scroll to products section
            document.querySelector('#products').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // View product details
    function addViewDetailsEventListeners() {
        const viewDetailsButtons = document.querySelectorAll('.view-details');
        
        viewDetailsButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.dataset.id);
                showProductModal(productId);
            });
        });
    }
    
    function showProductModal(productId) {
        const product = products.find(p => p.id === productId);
        const modal = document.querySelector('#productModal');
        const modalProduct = document.querySelector('.modal-product');
        
        modalProduct.innerHTML = `
            <div class="modal-product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="modal-product-info">
                <h2 class="modal-product-title">${product.title}</h2>
                <div class="modal-product-price">N${product.price.toFixed(2)}</div>
                <p class="modal-product-description">${product.description}</p>
                <div class="modal-product-features">
                    <h4>Key Features:</h4>
                    <ul>
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="modal-product-actions">
                    <button class="modal-add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Add event listener to modal add to cart button
        document.querySelector('.modal-add-to-cart').addEventListener('click', function() {
            addToCart(productId);
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Close modal
    document.querySelector('.modal-close').addEventListener('click', function() {
        document.querySelector('#productModal').classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Cart functionality
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartSidebar = document.querySelector('.cart-sidebar');
    const cartBtn = document.querySelector('.cart-btn');
    
    function addToCartEventListeners() {
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.dataset.id);
                addToCart(productId);
            });
        });
    }
    
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        
        // Check if product is already in cart
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        updateCart();
        showNotification(`${product.title} added to cart`);
    }
    
    function updateCart() {
        // Save to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Update cart count
        const cartCount = document.querySelector('.cart-count');
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
        
        // Update cart sidebar
        updateCartSidebar();
    }
    
    function updateCartSidebar() {
        const cartItems = document.querySelector('.cart-items');
        const cartTotal = document.querySelector('.total-amount');
        
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
            cartTotal.textContent = '₦0.00';
            return;
        }
        
        let total = 0;
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <div class="cart-item-price">₦${(item.price * item.quantity).toFixed(2)}</div>
                    <div class="cart-item-actions">
                        <div class="cart-item-quantity">
                            <button class="decrease-quantity" data-id="${item.id}">-</button>
                            <span>${item.quantity}</span>
                            <button class="increase-quantity" data-id="${item.id}">+</button>
                        </div>
                        <button class="cart-item-remove" data-id="${item.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            
            cartItems.appendChild(cartItem);
            total += item.price * item.quantity;
        });
        
        cartTotal.textContent = `$${total.toFixed(2)}`;
        
        // Add event listeners to quantity buttons
        addCartItemEventListeners();
    }
    
    function addCartItemEventListeners() {
        // Increase quantity
        document.querySelectorAll('.increase-quantity').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.dataset.id);
                const item = cart.find(item => item.id === productId);
                item.quantity += 1;
                updateCart();
            });
        });
        
        // Decrease quantity
        document.querySelectorAll('.decrease-quantity').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.dataset.id);
                const item = cart.find(item => item.id === productId);
                
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    cart = cart.filter(item => item.id !== productId);
                }
                
                updateCart();
            });
        });
        
        // Remove item
        document.querySelectorAll('.cart-item-remove').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.dataset.id);
                cart = cart.filter(item => item.id !== productId);
                updateCart();
            });
        });
    }
    
    // Toggle cart sidebar
    cartBtn.addEventListener('click', function() {
        cartSidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    document.querySelector('.cart-close').addEventListener('click', function() {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    overlay.addEventListener('click', function() {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentTestimonial = 0;
    let autoSlideInterval;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentTestimonial = index;
    }
    
    function nextTestimonial() {
        let newIndex = currentTestimonial + 1;
        if (newIndex >= testimonials.length) newIndex = 0;
        showTestimonial(newIndex);
    }
    
    function prevTestimonial() {
        let newIndex = currentTestimonial - 1;
        if (newIndex < 0) newIndex = testimonials.length - 1;
        showTestimonial(newIndex);
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            resetAutoSlide();
            showTestimonial(index);
        });
    });
    
    nextBtn.addEventListener('click', () => {
        resetAutoSlide();
        nextTestimonial();
    });
    
    prevBtn.addEventListener('click', () => {
        resetAutoSlide();
        prevTestimonial();
    });
    
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            nextTestimonial();
        }, 5000);
    }
    
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    
    // Form submissions
    document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input').value;
        showNotification(`Thanks for subscribing with ${email}!`);
        this.reset();
    });
    
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
    
    // Notification function
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // Initialize
    displayProducts();
    updateCart();
    startAutoSlide();
    
    // Add notification styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--primary-color);
            color: white;
            padding: 15px 25px;
            border-radius: 6px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 2000;
            max-width: 90%;
            text-align: center;
        }
        
        .notification.show {
            opacity: 1;
        }
        
        .empty-cart {
            text-align: center;
            padding: 40px 0;
            color: var(--gray-color);
        }
    `;
    document.head.appendChild(style);
});