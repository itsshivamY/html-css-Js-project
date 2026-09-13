const title = document.getElementById("title");
const namefield = document.getElementById("namefield");
const signinBtn = document.getElementById("signinBtn");
const signupBtn = document.getElementById("signupBtn");

let signupMode = false;

signupBtn.addEventListener("click", function(e){
    e.preventDefault();

    signupMode = !signupMode;

    if(signupMode){
        title.innerHTML = "Sign Up";
        namefield.style.display = "block";
        signinBtn.value = "Sign Up";
        signupBtn.innerHTML = "Login";
    }
    else{
        title.innerHTML = "Login";
        namefield.style.display = "none";
        signinBtn.value = "Login";
        signupBtn.innerHTML = "Sign Up";
    }
});