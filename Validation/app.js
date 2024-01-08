let form = document.querySelector(".js-form"),
formInputs = document.querySelectorAll(".js-input"),
inputEmail = document.querySelector(".js-input-email"),
inputPhone = document.querySelector(".js-input-phone"),
inputCheckbox = document.querySelector(".js-input-checkbox");

function validateEmail(email) {
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateCountry(country) {
  let re = new RegExp('ru$')
  return re.test(String(country).toLowerCase());
}

function validatePhone(phone) {
  // let re_tel = /(([1-9]{1,}))+([0-9]{11,})$/;
  let re_tel = /^\d{12}$/;
  return re_tel.test(Number(phone));
}

form.onsubmit = function () {
  let emailVal = inputEmail.value,
    phoneVal = inputPhone.value,
    emptyInputs = Array.from(formInputs).filter((input) => input.value === "");

  formInputs.forEach(function (input) {
    if (input.value === "") {
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });

    if (emptyInputs.length !== 0) {
      alert("Inputs are not filled on");

      return false;
    }

    if (!validateEmail(emailVal)) {
      alert("Email is not correct, please try again");
      inputEmail.classList.add("error");
      return false;
    } else {
      inputEmail.classList.remove("error");
    }

    if (!validatePhone(phoneVal)) {
      alert("Number is not correct, please try again");
      inputPhone.classList.add("error");
      return false;
    } else {
      inputPhone.classList.remove("error");
    }

    if (validateCountry(emailVal)) {
      alert("RUSSIA IS A TERRORIST STATE!!!");
      inputEmail.classList.add("error");
      return false;
    } else {
      inputEmail.classList.remove("error");
    }

    if (!inputCheckbox.checked) {
      alert("Please, read and accept the Privacy Policy");
      inputCheckbox.classList.add('error');
      return false;
    } else {
      inputCheckbox.classList.remove('error');
    }



  };
