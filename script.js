const passwordInput = document.getElementById("password");
const strengthFill = document.getElementById("strength-fill");
const feedback = document.getElementById("feedback");

passwordInput.addEventListener("input", checkStrength);

function checkStrength() {
    const password = passwordInput.value;
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    let strength = "";
    let width = 0;
    let color = "";

    switch(score) {
        case 0:
        case 1:
            strength = "Very Weak";
            width = 20;
            color = "red";
            break;
        case 2:
            strength = "Weak";
            width = 40;
            color = "orange";
            break;
        case 3:
            strength = "Medium";
            width = 60;
            color = "yellow";
            break;
        case 4:
            strength = "Strong";
            width = 80;
            color = "lightgreen";
            break;
        case 5:
            strength = "Very Strong";
            width = 100;
            color = "green";
            break;
    }

    strengthFill.style.width = width + "%";
    strengthFill.style.background = color;
    feedback.textContent = strength;
}
