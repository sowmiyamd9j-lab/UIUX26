function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const phoneError = document.getElementById("phone-error");

    let isValid = true;
    if (name === "") {
        nameError.classList.add("show-error");
        isValid = false;
    } else {
        nameError.classList.remove("show-error");
    }
    if (email === "") {
        emailError.classList.add("show-error");
        isValid = false;
    } else {
        emailError.classList.remove("show-error");
    }

   
    if (phone === "") {
        phoneError.classList.add("show-error");
        isValid = false;
    } else {
        phoneError.classList.remove("show-error");
    }

    
    if (isValid) {
        document.getElementById("portfolio-form").style.display = "none";
        document.getElementById("success-message").style.display = "block";
    }
}

