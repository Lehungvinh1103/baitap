var emailInput = document.querySelector("input[type='email']");
var passwordInput = document.querySelector("input[type='password']");
var btnSubmit = document.querySelector("button[type='submit']");

emailInput.addEventListener("blur", () => {
    if(emailInput.value.trim() === "") {
        alert("Email không được bỏ trống !")
    }
}); 

passwordInput.addEventListener("blur", () => {
    if(passwordInput.value.trim() === "") {
        alert("Password không được bỏ trống !")
    }
}); 

btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();

    if(emailInput.value.trim() === "") {
        alert("Email không được bỏ trống !")
        return;
    }

    if(passwordInput.value.trim() === "") {
        alert("Password không được bỏ trống !")
        return;
    }

    alert("Đăng nhập thành công !")

});