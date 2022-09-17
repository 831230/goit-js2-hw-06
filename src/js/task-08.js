const $loginForm=document.querySelector(".login-form");
const $emailInput=document.querySelector('[name="email"]');
const $passwordInput=document.querySelector('[name="password"]');
const $submitBtn=document.querySelector('button[type="submit"]');

class User {
  constructor(email,password) {
    this.email=email;
    this.password=password;
  }
};

function createAndShowUserObject(email,password){
  const userObject=new User(email,password);
  console.log(userObject);
};

function handlingForm(evt){
  evt.preventDefault();
  if (!$emailInput.value||!$passwordInput.value) {
    alert("all items should be completed!!");
    return
  };
  createAndShowUserObject($emailInput.value,$passwordInput.value);
  $loginForm.reset()
};

$loginForm.addEventListener("submit",handlingForm);