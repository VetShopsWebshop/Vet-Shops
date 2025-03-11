// Sample products with image property
const products = [
    { id: 1, name: { en: "5L Water Can", nl: "5L Waterkan", fr: "Bidon d'eau 5L" }, price: 10.99, image: null },
    { id: 2, name: { en: "T-Shirt", nl: "T-Shirt", fr: "T-Shirt" }, price: 15.99, image: null },
    { id: 3, name: { en: "Coffee Mug", nl: "Koffiemok", fr: "Tasse à café" }, price: 7.99, image: null }
];

let cart = [];
let currentLanguage = 'en'; // Default language

// Language texts, including email template and upload button
const translations = {
    en: { 
        title: "VET SHOPS", 
        cart: "Shopping Cart", 
        total: "Total", 
        checkout: "Send Mail", 
        add: "Add to Cart", 
        remove: "Remove", 
        search: "Search", 
        placeholder: "Search products...",
        upload: "Upload Picture",
        emailHeader: "Order Confirmation - VET SHOPS",
        emailItemHeader: "Item | Price | Quantity | Subtotal",
        emailFooter: "Thank you for shopping with VET SHOPS!"
    },
    nl: { 
        title: "VET SHOPS", 
        cart: "Winkelwagen", 
        total: "Totaal", 
        checkout: "Mail Versturen", 
        add: "Toevoegen aan winkelwagen", 
        remove: "Verwijderen", 
        search: "Zoeken", 
        placeholder: "Zoek producten...",
        upload: "Foto Uploaden",
        emailHeader: "Orderbevestiging - VET SHOPS",
        emailItemHeader: "Artikel | Prijs | Aantal | Subtotaal",
        emailFooter: "Bedankt voor het winkelen bij VET SHOPS!"
    },
    fr: { 
        title: "VET SHOPS", 
        cart: "Panier", 
        total: "Total", 
        checkout: "Envoyer un Mail", 
        add: "Ajouter au panier", 
        remove: "Supprimer", 
        search: "Rechercher", 
        placeholder: "Rechercher des produits...",
        upload: "Télécharger une Image",
        emailHeader: "Confirmation de commande - VET SHOPS",
        emailItemHeader: "Article | Prix | Quantité | Sous-total",
        emailFooter: "Merci d'avoir fait vos achats chez VET SHOPS!"
    }
};

// Set language and refresh content
function setLanguage(lang) {
    currentLanguage = lang;
    displayProducts();
    updateCart();
    document.getElementById("title").textContent = translations[lang].title;
    document.getElementById("cart-title").textContent = translations[lang].cart;
    document.getElementById("total-text").innerHTML = `${translations[lang].total}: €<span id="total">${document.getElementById("total").textContent}</span>`;
    document.getElementById("checkout-btn").textContent = translations[lang].checkout;
    document.getElementById("search-btn").textContent = translations[lang].search;
    document.getElementById("search-input").placeholder = translations[lang].placeholder;
}

// Display products
function displayProducts(filteredProducts = products) {
    const productList = document.getElementById("products");
    productList.innerHTML = "";
    filteredProducts.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <img id="image-${product.id}" class="product-image" ${product.image ? `src="${product.image}" style="display:block;"` : ''} alt="${product.name[currentLanguage]}">
            <h3>${product.name[currentLanguage]}</h3>
            <p>€${product.price.toFixed(2)}</p>
            <input type="file" id="upload-${product.id}" accept="image/*" onchange="uploadImage(${product.id})" style="display:none;">
            <button onclick="document.getElementById('upload-${product.id}').click()">${translations[currentLanguage].upload}</button>
            <input type="number" id="quantity-${product.id}" class="quantity-input" min="1" value="1">
            <button onclick="addToCart(${product.id})">${translations[currentLanguage].add}</button>
        `;
        productList.appendChild(div);
    });
}

// Upload image
function uploadImage(productId) {
    const fileInput = document.getElementById(`upload-${productId}`);
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const product = products.find(p => p.id === productId);
            product.image = e.target.result; // Store base64 image data
            const imgElement = document.getElementById(`image-${productId}`);
            imgElement.src = product.image;
            imgElement.style.display = "block"; // Show the image
        };
        reader.readAsDataURL(file);
    }
}

// Search products
function searchProducts() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name[currentLanguage].toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const quantity = parseInt(document.getElementById(`quantity-${productId}`).value) || 1;
    if (quantity > 0) {
        const cartItem = { ...product, quantity };
        cart.push(cartItem);
        updateCart();
    } else {
        alert("Please enter a valid quantity (1 or more).");
    }
}

// Remove from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Update cart display
function updateCart() {
    const cartList = document.getElementById("cart");
    cartList.innerHTML = "";
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "cart-item";
        li.innerHTML = `
            <span>${item.name[currentLanguage]} - €${item.price.toFixed(2)} x ${item.quantity} = €${(item.price * item.quantity).toFixed(2)}</span>
            <button class="remove-btn" onclick="removeFromCart(${index})">${translations[currentLanguage].remove}</button>
        `;
        cartList.appendChild(li);
    });
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById("total").textContent = total.toFixed(2);
}

// Send mail with email template
function sendMail() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const subject = encodeURIComponent(translations[currentLanguage].emailHeader);
    let body = `${translations[currentLanguage].emailHeader}\n\n`;
    body += `${translations[currentLanguage].emailItemHeader}\n`;
    body += "---------------------------------------\n";
    cart.forEach(item => {
        body += `${item.name[currentLanguage]} | €${item.price.toFixed(2)} | ${item.quantity} | €${(item.price * item.quantity).toFixed(2)}\n`;
    });
    body += "---------------------------------------\n";
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    body += `${translations[currentLanguage].total}: €${total.toFixed(2)}\n\n`;
    body += `${translations[currentLanguage].emailFooter}`;
    body = encodeURIComponent(body);

    const mailtoLink = `mailto:kvanhoye@skynet.be?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    // Optional: Clear cart after sending (uncomment if desired)
    // cart = [];
    // updateCart();
}

// Initialize with default language
setLanguage('en');