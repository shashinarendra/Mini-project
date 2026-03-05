document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registrationForm");
    const messageBox = document.getElementById("messageBox");

    // 🔥 Correct Mapping Between Branch Code and Address
    const branchMapping = {
        "MS101": "UPPAL-IDA",
        "MS102": "MEDCHAL-IDA",
        "MS103": "BOLLARUM-IDA",
        "MS201": "ADIBATLA",
        "MS202": "TURKAPALLY"
    };

    function showMessage(text, color) {
        messageBox.innerHTML = text;
        messageBox.style.color = color;
    }

    function validateName(name) {
        return /^[A-Za-z]{3,}$/.test(name);
    }

    function validateEmail(branchCode, email) {
        return email === branchCode + "mico@gmail.com";
    }

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        let firstName = document.getElementById("firstName").value.trim();
        let lastName = document.getElementById("lastName").value.trim();
        let dob = document.getElementById("dob").value;
        let branchCode = document.getElementById("branchCode").value.trim().toUpperCase();
        let branchAddress = document.getElementById("branchAddress").value.trim().toUpperCase();
        let email = document.getElementById("email").value.trim();

        let errors = "";

        // Name Validation
        if (!validateName(firstName))
            errors += "Invalid First Name.<br>";

        if (!validateName(lastName))
            errors += "Invalid Last Name.<br>";

        // DOB Validation
        if (!dob)
            errors += "Date of Birth required.<br>";

        // Branch Code Validation
        if (!branchMapping.hasOwnProperty(branchCode))
            errors += "Invalid Branch Code.<br>";

        // 🔥 Branch Code and Address Matching Validation
        if (branchMapping[branchCode] !== branchAddress)
            errors += "Branch Code and Branch Address do not match.<br>";

        // Email Validation
        if (!validateEmail(branchCode, email))
            errors += "Email must be BranchCode + mico@gmail.com.<br>";

        // Final Result
        if (errors !== "") {
            showMessage(errors, "red");
        } else {
            showMessage("Registration Successful!<br>Registration Completed", "green");

            form.reset();

            // Redirect to Login Page after 1.5 seconds
            setTimeout(function(){
                window.location.href = "login.html";
            }, 1500);
        }

    });

});