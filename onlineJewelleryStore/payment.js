function payment(e) {
    e.preventDefault();
    let form = document.getElementById("form")
    let name = form.name.value;
    let number = form.number.value;

    // if (name == null || phone == null || email == null || address == null) {

    // }

    if (name.length == 0 || number.length == 0) {
        alert("Please fill all fields")
        return
    }

    let main = document.getElementById("main")
    main.innerHTML = "Please Wait While we Initiate Order";

    setTimeout(function () {
        main.innerHTML = null;

        let div = document.createElement("div");
        div.innerHTML = "Order Placed"

        let img = document.createElement("img")

        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3_vsVL7OGr6De1j8XcJmMGPZYdVxB5zEewNkNYW3RWPsj-GtNMFAdUwiyz9aWMs6ElI&usqp=CAU"

        let a = document.createElement("a")
        a.textContent = "Continue Shopping"
        a.href = "products.html"

        let a_div = document.createElement("div")

        a_div.append(a)
        main.append(div, img, a_div)
    }, 3000)
}