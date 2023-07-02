function responseFunction() {
   var x = window.matchMedia("(max-width: 1024px)");
   if (x.matches) { // If media query matches
      document.getElementById('image').src = './assets/images/illustration-sign-up-mobile.svg';
   } else {
      document.getElementById('image').src = './assets/images/illustration-sign-up-desktop.svg'
   }
}
responseFunction();
window.onresize = responseFunction; // Call listener function at run time
/* --------------------------------- */
const mainContainer = document.getElementsByClassName('main-container')[0];
const subscribeForm = document.getElementById('subscribeForm');
const errorLabel = document.getElementsByClassName('error-label')[0];
const emailInput = document.getElementById('email');
const subEmail=document.querySelector('.success-container p span');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

subscribeForm.addEventListener("submit", (event) => {
   event.preventDefault();
   if (emailRegex.test(emailInput.value)) {
      mainContainer.style.display="none";
      successContainer.style.display="flex";
      subEmail.textContent=emailInput.value;
   }
   else {
      emailInput.classList.add('email-input');
      errorLabel.style.display = 'block';
   }
});
const successContainer = document.getElementsByClassName('success-container')[0];
const dismissBtn=document.querySelector('.success-container .form-button');
dismissBtn.addEventListener("click",(event)=>{
   successContainer.style.display="none";
   mainContainer.style.display="grid";
})