
//password should be valid 
//     lenght 8 Character
//     Should have one uppercase 
//     Should have one lowercase
//     Should have one number
//     Should have one special character

const getForm = document.querySelector(".form");
const getMail = document.querySelector(".mail");
const getPassword = document.querySelector(".password");
const getErrorMailMeassage = document.querySelector(".errorMailMeassage");
const getValidPassword=document.querySelector(".validPassword")

getMail.addEventListener("input", () => {
    //creat new element
    const mailInput = getMail.value;
    if (mailInput.includes("@")) {
        getErrorMailMeassage.textContent = "Valid"
        getErrorMailMeassage.style.color = "green";
    }
    else {
        getErrorMailMeassage.textContent = "inValid"
        getErrorMailMeassage.style.color = "red";

    }
});
getPassword.addEventListener("input", ()=>{
    //creat new element
    const passwordInput=getPassword.value;
   if (/[A-Z]/.test(passwordInput) && /[a-z]/.test(passwordInput) && /[0-9]/.test(passwordInput) && /[!@#$%^&*(),.?":{}|<>]/.test(passwordInput) && passwordInput.length >= 8){
    getValidPassword.textContent="validPassword"
   }
   else{
    getValidPassword.textContent="PassWord Must Have 1 UpperCase, 1 Lowercase, 1 Number and 1 Special Character"
   }
});