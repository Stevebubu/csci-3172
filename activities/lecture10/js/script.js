document.getElementById('registrationForm').addEventListener('submit', function(event) {

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var firstNameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
    var lastNameRegex = /^[a-zA-Z'-]+$/;
    var emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    var passwordRegex = /^(?=.*[\W])[A-Za-z0-9\W]{12,}$/;

    if (!firstNameRegex.test(firstName)) {
        alert("First name is invalid. Need to only contain letters and an optional middle name.");
        return;
    }

    if (!lastNameRegex.test(lastName)) {
        alert("Last name is invalid. Need to only contain letters, apostrophes, or hyphens.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Email is invalid. Please follow a valid email format.");
        return;
    }

    if (!passwordRegex.test(password)) {
        alert("Password is invalid. Password has to contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 12 characters long.");
        return;
    }

    alert("Form submitted successfully!");
});