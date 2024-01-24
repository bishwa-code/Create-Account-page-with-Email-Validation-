// Email Logic
let emailId = document.getElementById("email");
let icon = document.getElementById("icon");
let warningMsg = document.getElementById("warning-msg");

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  // A common and widely accepted regex pattern for email validation in JavaScript ==>  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

emailId.addEventListener("input", () => {
    icon.style.display = "inline-block";

    if (emailId.value == "") {
        emailStyleReset();
    } else if (emailId.value.match(emailRegex)) {
        icon.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        icon.style.color = "#4ade80";
        emailId.style.borderColor = "#4ade80";
        warningMsg.style.visibility = "hidden";
    } else {
        icon.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`;
        icon.style.color = "#f87171";
        emailId.style.borderColor = "#f87171";
        warningMsg.style.visibility = "visible";
    }
});

// Password Logic
let password = document.getElementById("password");
let icon2 = document.getElementById("icon2");
let warningMsg2 = document.getElementById("warning-msg2");

password.addEventListener("input", () => {
    icon2.style.display = "inline-block";
    warningMsg2.style.visibility = "visible";

    if (password.value.length > 0 && password.value.length < 5) {
        icon2.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`;
        icon2.style.color = "#f87171";
        password.style.borderColor = "#f87171";
        warningMsg2.innerText = "Easy Password";
        warningMsg2.style.color = "#f87171";
    } else if (password.value.length >= 5 && password.value.length < 8) {
        icon2.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`;
        icon2.style.color = "#facc15";
        password.style.borderColor = "#facc15";
        warningMsg2.innerText = "Medium Password";
        warningMsg2.style.color = "#facc15";
    } else if (password.value.length >= 8) {
        icon2.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        icon2.style.color = "#4ade80";
        password.style.borderColor = "#4ade80";
        warningMsg2.innerText = "Strong Password";
        warningMsg2.style.color = "#4ade80";
    } else if (password.value == "") {
        passwordStyleRest();
    }
});

// Password HideShow Logic

let eyeIcon = document.getElementById("eye-icon");

eyeIcon.addEventListener("click", () => {
    if (password.type == "password") {
        password.type = "text";
        eyeIcon.innerHTML = `<i class="fa-solid fa-eye"></i>`;
        eyeIcon.style.color = "#22c55e";
    } else {
        password.type = "password";
        eyeIconReset();
    }
});

// popup on submit logic
    
function openPopup () {
    if (emailId.value.match(emailRegex) && password.value.length >= 8) {
        document.getElementById("pop-up").classList.add("animate-popup");
        document.querySelector("#email-container").style.filter = "blur(0.5px)";
    }
};

function closePopup() {
    document.getElementById("pop-up").classList.remove("animate-popup");
    document.querySelector("#email-container").style.filter = "blur(0)";

    emailId.value = "";
    password.value = "";
    emailStyleReset();
    passwordStyleRest();
    eyeIconReset();
};

function passwordStyleRest() {
    password.style.borderColor = "#dee2e6";
        icon2.style.display = "none";
        warningMsg2.style.visibility = "hidden";
}

function eyeIconReset() {
    eyeIcon.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
    eyeIcon.style.color = "#334155";
}

function emailStyleReset() {
    icon.style.display = "none";
    warningMsg.style.visibility = "hidden";
    emailId.style.borderColor = "#dee2e6";
}
