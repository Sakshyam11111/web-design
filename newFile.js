document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".form.login_form");
    const signupForm = document.querySelector(".form.signup_form");
    const loginButton = document.querySelector("#login");
    const signupButton = document.querySelector("#signup");

    function showLoginForm() {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    }


    function showSignupForm() {
        loginForm.style.display = "none";
        signupForm.style.display = "block"; 
    }


    showLoginForm();

    loginButton.addEventListener("click", showLoginForm);
    signupButton.addEventListener("click", showSignupForm);
});
