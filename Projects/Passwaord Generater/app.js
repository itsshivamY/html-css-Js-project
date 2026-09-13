let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbol = document.getElementById("symbol");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener("click", () => {
    passBox.value = generatePassword();
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*()_+-=[]{}|;:,.<>?";

function generatePassword() {
    let getPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbol.checked ? allSymbols : "";

    if (allChars.length === 0) {
        alert("Please select at least one option!");
        return "";
    }

    for (let i = 0; i < inputSlider.value; i++) {
        getPassword += allChars.charAt(
            Math.floor(Math.random() * allChars.length)
        );
    }

    return getPassword;
}

copyIcon.addEventListener("click", () => {
    if (passBox.value.length > 0) {
        navigator.clipboard.writeText(passBox.value);
        copyIcon.title = "Password Copied";
        alert("Password Copied!");
    }
});