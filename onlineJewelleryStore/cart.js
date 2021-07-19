function showProducts() {
    let catalogue = document.getElementById('catalogue');
    catalogue.innerHTML = null;
    let products = JSON.parse(localStorage.getItem("cart"));

    if (products !== null) {
        products.forEach(function (el) {
            appendProduct(el);
        })
    } else {
        catalogue.innerHTML = `<div class="mid">
    <h1>Your Cart is Empty</h1>
    <div><a href="products.html">Continue Shopping</a></div>
  </div>`
    }
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


    let product = document.createElement("div")

    product.append(img_div, name, price)

    catalogue.append(product)
}

showProducts()



function checkPromo() {

    let promo = document.getElementById("promo").value;

    console.log(promo);

    let data = JSON.parse(localStorage.getItem("cart"));

    let totalPrice = data.reduce(function (acc, el) {
        return acc + Number(el.price);
    }, 0)

    if (promo == "masai30") {
        let newPrice = Math.ceil(totalPrice * 70 / 100);

        let promoAdded = document.getElementById("promoAdded");
        promoAdded.innerHTML = `Total Price : ₹ ${totalPrice}`

        let newPricediv = document.getElementById("newPrice");
        newPricediv.innerHTML = `New Price : ₹ ${newPrice}`
        newPricediv.setAttribute("class", "green")
    } else {

        let newPricediv = document.getElementById("newPrice");
        newPricediv.innerHTML = `Promo Not Valid`;

        let promoAdded = document.getElementById("promoAdded");
        promoAdded.innerHTML = null;
        newPricediv.setAttribute("class", "red")
    }
}

function checkOut() {
    window.location.href = 'checkOut.html'
}