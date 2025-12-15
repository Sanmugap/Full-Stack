<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Creative Form Validation</title>

<style>
    body {
        font-family: Arial, sans-serif;
        background: linear-gradient(to bottom right, #eef2f3, #8e9eab);
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    .form-container {
        background: white;
        padding: 30px 40px;
        border-radius: 12px;
        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        width: 360px;
    }
    h2 {
        text-align: center;
        color: #4b5363;
    }
    .form-field {
        margin: 15px 0;
    }
    .form-field label {
        display: block;
        margin-bottom: 6px;
        color: #333;
    }
    .form-field input {
        width: 100%;
        padding: 10px;
        border-radius: 6px;
        border: 1px solid #bbb;
        outline: none;
    }
    .form-field input:focus {
        border-color: #5b9df9;
    }

    .error {
        color: #e74c3c;
        font-size: 0.9em;
        margin-top: 4px;
    }

    button {
        width: 100%;
        padding: 12px;
        background: #5b9df9;
        color: white;
        font-size: 16px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
    }
    button:hover {
        background: #4a8de0;
    }
</style>
</head>
<body>

<div class="form-container">
    <h2>Registration Form</h2>
    <form id="myForm" onsubmit="return validateForm()">

        <!-- Required & Regex -->
        <div class="form-field">
            <label for="fullname">Full Name *</label>
            <input type="text" id="fullname" name="fullname">
            <div class="error" id="nameError"></div>
        </div>

        <!-- Email (Regex) -->
        <div class="form-field">
            <label for="email">Email *</label>
            <input type="text" id="email" name="email">
            <div class="error" id="emailError"></div>
        </div>

        <!-- Range Validation -->
        <div class="form-field">
            <label for="age">Age (18–60) *</label>
            <input type="number" id="age" name="age">
            <div class="error" id="ageError"></div>
        </div>

        <!-- Compare Validation -->
        <div class="form-field">
            <label for="password">Password *</label>
            <input type="password" id="password">
            <div class="error" id="passError"></div>
        </div>
        <div class="form-field">
            <label for="confirmPass">Confirm Password *</label>
            <input type="password" id="confirmPass">
            <div class="error" id="confirmError"></div>
        </div>

        <button type="submit">Submit</button>
    </form>
</div>

<script>
    function validateForm() {
        let isValid = true;

        // Clear old errors
        document.querySelectorAll(".error").forEach(e => e.innerText = "");

        // Full name required, no numbers allowed
        let name = document.getElementById("fullname").value.trim();
        if (name === "" || /[^a-zA-Z\s]/.test(name)) {
            document.getElementById("nameError").innerText =
                "Please enter a valid name (only letters, required).";
            isValid = false;
        }

        // Email regex
        let email = document.getElementById("email").value.trim();
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if (!emailPattern.test(email)) {
            document.getElementById("emailError").innerText =
                "Please enter a correct email address.";
            isValid = false;
        }

        // Age range 18 to 60
        let age = parseInt(document.getElementById("age").value);
        if (isNaN(age) || age < 18 || age > 60) {
            document.getElementById("ageError").innerText =
                "Age must be between 18 and 60.";
            isValid = false;
        }

        // Password required
        let pass = document.getElementById("password").value;
        let confirmPass = document.getElementById("confirmPass").value;
        if (pass.length < 6) {
            document.getElementById("passError").innerText =
                "Password must be at least 6 characters.";
            isValid = false;
        }
        if (pass !== confirmPass) {
            document.getElementById("confirmError").innerText =
                "Passwords do not match.";
            isValid = false;
        }

        return isValid;
    }
</script>

</body>
</html>
