const emailInput = document.querySelector("input[type='email']");
const passwordInput = document.querySelector("input[type='password']");
const btnSubmit = document.querySelector("button[type='submit']");

emailInput.addEventListener("blur", () => {
    if(emailInput.value.trim() === "") {
        alert("Khong duoc bo trong !")
    }
}); 

passwordInput.addEventListener("blur", () => {
    if(passwordInput.value.trim() === "") {
        alert("Khong duoc bo trong !")
    }
}); 

btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();

    if(emailInput.value.trim() === "") {
        alert("Khong duoc bo trong !");
        return;
    }

    if(passwordInput.value.trim() === "") {
        alert("Khong duoc bo trong !")
        return;
    }

    alert("Login successful !")

});