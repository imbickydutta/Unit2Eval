function payment(e) {
    e.preventDefault();
    let form = document.getElementById("form")
    let name = form.name.value;
    let phone = form.number.value;
    let email = form.email.value;
    let address = form.address1.value;

    // if (name == null || phone == null || email == null || address == null) {

    // }

    if (name.length == 0 || phone.length == 0 || email.length == 0 || address.length == 0) {
        alert("Please fill all fields")
        return
    }

    window.location.href = "payment.html"
}