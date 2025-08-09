
document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {
            name: "حذاء رياضي رجالي أنيق",
            price: "5000",
            currency: "ريال",
            image: "images/shoe1.jpg",
            category: "shoes",
            type: "men"
            
        },
        
        {
            name: "حذاء رياضي رجالي أنيق",
            price: "5000",
            currency: "ريال",
            image: "images/shoe1.jpg",
            category: "shoes",
            type: "men"
            
        },
        {
            name: "حذاء كاجوال نسائي مريح",
            price: "4000",
            currency: "ريال",
            image: "images/shoe2.jpg",
            category: "shoes",
            type: "women"
        },
        {
            name: "حذاء رياضي ولادي عصري",
            price: "3500",
            currency: "ريال",
            image: "images/shoe3.webp",
            category: "shoes",
            type: "kids"
        },
        {
            name: "حقيبة يد نسائية أنيقة",
            price: "7000",
            currency: "ريال",
            image: "images/bag1.webp",
            category: "bags",
            type: "women"
        },
        {
            name: "حقيبة سفر عملية",
            price: "7000",
            currency: "ريال",
            image: "images/bag2.jpg",
            category: "bags",
            type: "travel"
        },
        {
            name: "حقيبة جلدية فاخرة",
            price: "8000",
            currency: "ريال",
            image: "images/bag3.jpg",
            category: "bags",
            type: "luxury"
        }
    ];

    const productGrid = document.getElementById("products");
    const categoryButtons = document.querySelectorAll(".category-button");
    const shoesSubCategories = document.getElementById("shoes-sub-categories");
    const bagsSubCategories = document.getElementById("bags-sub-categories");

    function displayProducts(filterCategory = "all") {
        productGrid.innerHTML = ""; // Clear current products
        const filteredProducts = products.filter(product => {
            if (filterCategory === "all") {
                return true;
            } else if (filterCategory === "shoes") {
                return product.category === "shoes";
            } else if (filterCategory === "bags") {
                return product.category === "bags";
            } else if (filterCategory === "men-shoes") {
                return product.category === "shoes" && product.type === "men";
            } else if (filterCategory === "women-shoes") {
                return product.category === "shoes" && product.type === "women";
            } else if (filterCategory === "kids-shoes") {
                return product.category === "shoes" && product.type === "kids";
            } else if (filterCategory === "women-bags") {
                return product.category === "bags" && product.type === "women";
            } else if (filterCategory === "travel-bags") {
                return product.category === "bags" && product.type === "travel";
            }
            return false;
        });

        filteredProducts.forEach(product => {
            const productItem = document.createElement("div");
            productItem.className = "product-item";

            const productImage = document.createElement("img");
            productImage.src = product.image;
            productImage.alt = product.name;
            productImage.loading = "lazy";

            const productName = document.createElement("h3");
            productName.textContent = product.name;

            const productPrice = document.createElement("p");
            productPrice.className = "price";
            productPrice.textContent = `${product.price} ${product.currency}`;

            const buyButton = document.createElement("button");
            buyButton.className = "buy-button";
            buyButton.textContent = "🛒 شراء الآن";
            
            buyButton.addEventListener("click", () => {
                const message = `أرغب في شراء ${product.name} بسعر ${product.price} ${product.currency}`;
                const whatsappUrl = `https://wa.me/967774276330?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, "_blank");
            });

            productItem.appendChild(productImage);
            productItem.appendChild(productName);
            productItem.appendChild(productPrice);
            productItem.appendChild(buyButton);

            productGrid.appendChild(productItem);
        });

        // إضافة تأثير التحميل
        const images = document.querySelectorAll("img");
        images.forEach(img => {
            img.addEventListener("load", () => {
                img.style.opacity = "1";
            });
        });
    }

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            categoryButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            const category = button.dataset.category;
            displayProducts(category);

            // Show/hide sub-categories
            if (category === "shoes") {
                shoesSubCategories.style.display = "flex";
                bagsSubCategories.style.display = "none";
            } else if (category === "bags") {
                bagsSubCategories.style.display = "flex";
                shoesSubCategories.style.display = "none";
            } else {
                shoesSubCategories.style.display = "none";
                bagsSubCategories.style.display = "none";
            }
        });
    });

    // Initial display of all products
    displayProducts();
});

