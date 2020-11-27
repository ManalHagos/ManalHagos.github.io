function register() {
    clearFields();

    var firstName = document.getElementById("first-name");
    var lastName = document.getElementById("last-name");
    var address = document.getElementById("address");
    var city = document.getElementById("city");
    var postalCode = document.getElementById("postal-code");
    var province = document.getElementById("province");
    var age = document.getElementById("age");
    var password = document.getElementById("password");
    var confirm = document.getElementById("confirm");
    var email = document.getElementById("email");
    var blankMessage = "cannot be blank.";
    var provinces = ['QC', 'ON', 'MN', 'SK', 'AB', 'BC'];
    var emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    var passwordValidation = /^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{6,}$/i;
    var count = 0;

    if (firstName.value.trim() == "") {
        document.getElementById("first-name-error").innerHTML = "First name " + blankMessage;
        count++;
    }

    if (lastName.value.trim() == "") {
        document.getElementById("last-name-error").innerHTML = "Last name " + blankMessage;
        count++;
    }

    if (address.value.trim() == "") {
        document.getElementById("address-error").innerHTML = "Address " + blankMessage;
        count++;
    }

    if (city.value.trim() == "") {
        document.getElementById("city-error").innerHTML = "City " + blankMessage;
        count++;
    }

    if (postalCode.value.trim() == "") {
        document.getElementById("postal-code-error").innerHTML = "Postal Code " + blankMessage;
        count++;
    }
    else if (postalCode.value.search(/\b([a-zA-Z][0-9]){3}\b/i)) {
        document.getElementById("postal-code-error").innerHTML = "The postal code has to be in the A0A0A0 format.";
        count++;
    }

    if (province.value.trim() == "") {
        document.getElementById("province-error").innerHTML = "Province " + blankMessage;
        count++;
    }
    else if (!(provinces.includes(province.value))) {
        document.getElementById("province-error").innerHTML = "Province is QC, ON, MN, SK, AB, BC.";
        count++;
    }

    if (age.value.trim() == "") {
        document.getElementById("age-error").innerHTML = "Age " + blankMessage;
        count++;
    }
    else if (isNaN(age.value) || age.value < 18) {
        document.getElementById("age-error").innerHTML = "Age can't be less than 18.";
        count++;
    }

    if (password.value.trim() == "") {
        document.getElementById("password-error").innerHTML = "Password " + blankMessage;
        count++;
   
    }

    if (confirm.value.trim() == "") {
        document.getElementById("confirm-error").innerHTML = "Confirm " + blankMessage;
        count++;
    }
    else if (confirm.value != password.value) {
        document.getElementById("confirm-error").innerHTML = "The Confirm Password and Password fields should have identical input.";
        count++;
    }

    if (email.value.trim() == "") {
        document.getElementById("email-error").innerHTML = "Email " + blankMessage;
        count++;
    }
    else if (email.value.search(emailValidation)) {
        document.getElementById("email-error").innerHTML = "Email is invalid. ";
        count++;
    }

    if (count == 0) {
        alert("Thanks for registering with our website!!!!!!");
    }
}

function clearFields() {

    document.getElementById("first-name-error").innerHTML = "";

    document.getElementById("last-name-error").innerHTML = "";

    document.getElementById("address-error").innerHTML = "";

    document.getElementById("city-error").innerHTML = "";

    document.getElementById("postal-code-error").innerHTML = "";

    document.getElementById("province-error").innerHTML = "";

    document.getElementById("age-error").innerHTML = "";

    document.getElementById("password-error").innerHTML = "";

    document.getElementById("confirm-error").innerHTML = "";

    document.getElementById("email-error").innerHTML = "";
}

document.getElementById("register").addEventListener("click", register);
document.getElementById("clear form").addEventLis
