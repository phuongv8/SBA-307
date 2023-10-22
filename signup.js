let validBtn = document.getElementById('form-btn');
let email = document.getElementById('email');
let emailError = document.getElementById('email-error');

validBtn.addEventListener('click', event => {
    let error = document.getElementsByClassName('error');
    let input = document.querySelectorAll('input');
    
    for (let i = 0; i < input.length; i++) {
        if (input[i].value.trim().length === 0) {
            error[i].style.visibility = 'visible';
            event.preventDefault();
        } else {
            error[i].style.visibility = 'hidden';
        }
  }
})


function validateEmail(event) {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  
  if (email.value.length !== 0) {
    if (!re.test(email.value)) {
      emailError.style.visibility = 'visible';
      emailError.innerHTML = 'Looks like this is not a valid email';
      event.preventDefault();
    } else {
      emailError.style.visibility = 'hidden';
    }
  }
}

validBtn.addEventListener('click', validateEmail);

let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let password = document.getElementById('password');

function emptyLastName() {
  if (lastName.value.trim().length === 0) {
    lastNameError.style.visibility = 'visible';
    
  } else {
    lastNameError.style.visibility = 'hidden';
  }
}
lastName.onblur = emptyLastName;

function emptyEmail() {
  if (email.value.trim().length === 0) {
    emailError.style.visibility = 'visible';
    
  } else {
    emailError.style.visibility = 'hidden';
  }
}
email.onblur = emptyEmail;

function emptyPassword() {
  if (password.value.trim().length === 0) {
    passwordError.style.visibility = 'visible';
    
  } else {
    passwordError.style.visibility = 'hidden';
  }
}
password.onblur = emptyPassword;

