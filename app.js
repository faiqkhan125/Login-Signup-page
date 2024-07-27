const FirstName = document.querySelector(".firstname");
const lastName = document.querySelector(".lastname");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const phoneNumber = document.querySelector(".phone Number");

const form = document.querySelector("#form").addEventListener('submit' , (e)=>{
    e.preventDefault()
    console.log(FirstName.value);
    console.log(lastName.value);
    console.log(email.value);
    console.log(password.value);
    console.log(phoneNumber.value);
})
const username = document.querySelector("#username");
const age = document.querySelector("#age");
const idCardNo = document.querySelector("#CNIC");

const usernameRegex = /^[a-zA-Z0-9_]{4,15}$/;
const emailRegex =
  /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*._%+-]{8,}@[A-Za-z\d.-]+\.[A-Za-z]{2,}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
const ageRegex = /^(1[89]|[2-5][0-9]|60)$/;
const cnicRegex = /^42\d{11}$/;

const btn = document.querySelector("#form");

btn.addEventListener('submit' , (event)=>{

event.preventDefault()

    if (usernameRegex.test(username.value) ) {
      console.log(username.value);
    }else{
        console.log("Wrong username");
    }

    if(emailRegex.test(email.value)){
        console.log(email.value);
    }else{
        console.log("Wrong email");
    }

     if (passwordRegex.test(password.value)) {
       console.log(password.value);
     } else {
       console.log("Wrong password");
     }

     if (ageRegex.test(age.value)) {
       console.log(age.value);
     } else {
       console.log("Wrong age");
     }

     if (cnicRegex.test(idCardNo.value)) {
       console.log(idCardNo.value);
     } else {
       console.log("Wrong NIC Number");
     }









})