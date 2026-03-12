let contact = document.getElementById("contact");
let email = document.getElementById("email");

contact.addEventListener("click", sayHello);

function sayHello() {
    if (email.hidden) {
        contact.textContent = "Hide!"
    } else {
        contact.textContent = "Say Hello!"
    }
    email.hidden = !email.hidden;
}
