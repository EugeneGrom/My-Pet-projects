let toNextPage = function() {
  document.location = './round1/round1.html';
}

let form = document.querySelector('.js-form'),
formInputs = document.querySelectorAll('.js-input'),
inputName = document.querySelector('.js-input-name'),
inputEmail = document.querySelector('.js-input-email'),
inputCheckbox = document.querySelector(".js-input-checkbox");

function validateEmail(email) {
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateName(name) {
  let re_name = /[a-zA-Z0-9+-._]{3,}/
  return re_name.test(String(name).toLowerCase());
}

form.onsubmit = function() {
  let nameVal = inputName.value,
    emailVal = inputEmail.value,
    emptyInputs = Array.from(formInputs).filter((input) => input.value === "");

  formInputs.forEach(function (input) {
    if (input.value === "") {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });

    if (emptyInputs.length !== 0) {
      alert('Inputs are not filled on');
      return false;
    };

    if (!validateName(nameVal)) {
      alert('Please enter correct name');
      inputName.classList.add('error');
      return false;
    } else {
      inputName.classList.remove('error');
    };

    if (!validateEmail(emailVal)) {
      alert('Email is not correct, please try again');
      inputEmail.classList.add('error');
      return false;
    } else {
      inputEmail.classList.remove('error');
    }

    if (!inputCheckbox.checked) {
      alert("Please, read and accept Terms and Conditions");
      inputCheckbox.classList.add('error');
      return false;
    } else {
      inputCheckbox.classList.remove('error');
    }
   
    toNextPage();
    return false;
 
};


 
