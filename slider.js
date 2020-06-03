var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


// Форма обратной связи

let emailInput = document.querySelector('input[type="email"]'),
  nameInput = document.querySelector('input[name="Имя"]'),
  submitButton = document.querySelector('input[type="submit"]'),
  radioInput = document.querySelectorAll('input[name="type-of-service"]'),
  fieldEmail = document.querySelector('.email'),
  fieldName = document.querySelector('.fio'),
  fieldRadio = document.querySelector('.radio-buttons'),
  form = document.querySelector('.myForm'),
  shower = document.getElementById('shower');

function unfilledField(a) {
  a.classList.add('unFilledField');
}

function filledField(b) {
  b.classList.remove('unFilledField');
}

function submitButtonLock() {
  submitButton.setAttribute('disabled', 'disabled');
}

function submitButtonUnblock() {
  submitButton.removeAttribute('disabled', 'disabled');
}

function checkEmail() {
  if (emailInput.value.indexOf('@') == -1 || emailInput.value.length <= 5) {
    unfilledField(fieldEmail);
    emailInput.placeholder = "Необходимо заполнить поле корректно!";
  } else {
    filledField(fieldEmail);
    emailInput.placeholder = "";
  }
}

function checkName() {
  if (nameInput.value.length <= 6) {
    unfilledField(fieldName);

    nameInput.placeholder = "Необходимо заполнить поле корректно!";
  } else {
    filledField(fieldName);

    nameInput.placeholder = "";
  }
}

function checkRadioButtons() {
  unfilledField(fieldRadio);
  for (let i = 0; i < radioInput.length; i++) {
    if (radioInput[i].checked == true) {
      filledField(fieldRadio);
    }
  }
}

setInterval(function () {

    if (emailInput.value.indexOf('@') == -1 || emailInput.value.length <= 5 || nameInput.value.length <= 6 || fieldRadio.classList.contains('unFilledField')) {
      submitButtonLock();
    } else {
      submitButtonUnblock();
    }
}, 100);

function hideshow() {
  form.style.cssText = "animation:hierrr 1s 1 linear;display:none;";
  shower.style.cssText = "display:block;animation:showwww 1s 1 linear;";
}