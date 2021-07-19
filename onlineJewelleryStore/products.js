let products = [{
    name: "Gold Chain",
    price: 20000,
    img1: "https://images-na.ssl-images-amazon.com/images/I/81xXTN6CONL._UY500_.jpg",
    img2: "https://images-na.ssl-images-amazon.com/images/I/71TKm9wLReL._UY500_.jpg",
    type: "gold"
}, {
    name: "Silver Chain",
    price: 5000,
    img1: "https://5.imimg.com/data5/ANDROID/Default/2021/4/WC/BB/ZL/8659970/7fefa55bb1e2ef72fe8fbfc833863444-jpg-500x500.jpg",
    img2: "https://images-na.ssl-images-amazon.com/images/I/715Lud6MTIL._UY500_.jpg",
    type: "silver"

}, {
    name: "Diamind Necklace",
    price: 50000,
    img1: "https://www.orra.co.in/pub/media/catalog/product/o/s/osn18064-a.jpg",
    img2: "https://www.orra.co.in/pub/media/catalog/product/o/s/osn19120-a.jpg",
    type: "diamond"

}, {
    name: "Platinum Bracelet",
    price: 30000,
    img1: "https://cdn.shopify.com/s/files/1/0259/0713/products/Heavy_Platinum_Bracelet_for_Men_JL_PTB_641._Made_in_Platinum_950_certified_by_PGI._PTBN_MB_2_Medium_Resolution.jpeg?v=1569113125",
    img2: "https://cdn.shopify.com/s/files/1/0259/0713/products/platinum-bangles-bracelets-platinum-bracelet-for-men-jl-ptb-621-1.jpg?v=1477749925",
    type: "platinum"

}, {
    name: "Diamond Ring",
    price: 25000,
    img1: "https://cfcdn20.candere.com/media/catalog/product/cache/1/image/1020x1020/9df78eab33525d08d6e5fb8d27136e95/c/0/c005493_1.jpg?v=1536153707",
    img2: "https://www.hollowaydiamonds.com.au/wp-content/uploads/2019/12/180703-Classical-Platinum-Solitaire-Diamond-Ring-hero.jpg",
    type: "diamond"

}, {
    name: "Gold Pendant",
    price: 10000,
    img1: "https://www.candere.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/r/gr00777_1.jpeg",
    img2: "http://image.reliancejewels.com/Jewels/images/productImages/597/two-tone-plated-leaf-design-22kt-gold-pendant-set-medium_39613cf1416d9a631b4011aa9be83bdc.jpg",
    type: "gold"
},
{
    name: "Silver Ring",
    price: 1000,
    img1: "https://images-na.ssl-images-amazon.com/images/I/51cUxCBDi%2BL._UX569_.jpg",
    img2: "http://image.reliancejewels.com/Jewels/images/productImages/597/two-tone-plated-leaf-design-22kt-gold-pendant-set-medium_39613cf1416d9a631b4011aa9be83bdc.jpg",
    type: "silver"
},
{
    name: "Platinum Ring",
    price: 25000,
    img1: "https://images-na.ssl-images-amazon.com/images/I/61y4inDI%2BWL._UL1500_.jpg",
    img2: "http://image.reliancejewels.com/Jewels/images/productImages/597/two-tone-plated-leaf-design-22kt-gold-pendant-set-medium_39613cf1416d9a631b4011aa9be83bdc.jpg",
    type: "platinum"
},


]

if (JSON.parse(localStorage.getItem("products")) == null) {
    localStorage.setItem("products", JSON.stringify(products))
}

function showProducts(d) {
    let products = d;

    products.forEach(function (el) {
        appendProduct(el);
    })
}

function appendProduct(el) {
    let catalogue = document.getElementById('catalogue');

    let image = document.createElement('img');
    image.src = el.img1

    let img_div = document.createElement('div');
    img_div.append(image)

    let name = document.createElement('div');
    name.innerHTML = el.name;

    let price = document.createElement('div');
    price.innerHTML = `Price : ₹ ${el.price}`

    let button = document.createElement('button');
    button.textContent = "Add to Cart"
    button.addEventListener("click", function () {
        addToCart(el)
    })

    let product = document.createElement("div")

    product.append(img_div, name, price, button)

    catalogue.append(product)
}

showProducts(JSON.parse(localStorage.getItem("products")))

function addToCart(obj) {
    let cart = JSON.parse(localStorage.getItem("cart"))

    if (cart == null) {
        cart = []
    }

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name == obj.name && cart[i].price == obj.price) {
            alert("Item Already Added");
            return
        }
    }
    cart.push(obj);

    localStorage.setItem("cart", JSON.stringify(cart))
}

function HtoL() {
    let products = JSON.parse(localStorage.getItem("products"))
    let catalogue = document.getElementById('catalogue');
    catalogue.innerHTML = null;

    products = products.sort(function (a, b) {
        return b.price - a.price
    });

    showProducts(products);
}

function LtoH() {
    let products = JSON.parse(localStorage.getItem("products"))
    let catalogue = document.getElementById('catalogue');
    catalogue.innerHTML = null;

    products = products.sort(function (a, b) {
        return a.price - b.price;
    });

    showProducts(products);
}

function byType() {
    let products = JSON.parse(localStorage.getItem("products"))
    let catalogue = document.getElementById('catalogue');
    catalogue.innerHTML = null;

    let value = document.getElementById("type").value;

    console.log(value);

    products = products.filter(function (el) {
        return el.type == value;
    })

    showProducts(products);
}