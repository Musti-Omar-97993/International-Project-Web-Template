document.addEventListener("DOMContentLoaded", function () {
    // Handle login submission
    document.getElementById("login-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Login successful!");
        window.location.href = "index.html";
    });

    // Handle sign-up submission
    document.getElementById("signup-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Sign-up successful! Welcome!");
        window.location.href = "index.html";
    });

    // Handle guest entry
    document.getElementById("guest-button").addEventListener("click", function () {
        alert("Entering as Guest...");
        window.location.href = "index.html"; 
    });
});