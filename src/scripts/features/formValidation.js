const formSubmitBtn = document.querySelector('.form__submit-btn');
const firstName = document.querySelector('#firstName').value;
const familyName = document.querySelector('#familyName').value;
const email = document.querySelector('#email').value;
const phoneNumber = document.querySelector('#phoneNumber').value;
const message = document.querySelector('#message').value;

formSubmitBtn.addEventListener('click', (e) => formSubmitHandler(e));

const formValues = [firstName, familyName, email, phoneNumber, message];

const formSubmitHandler = (e) => {
  e.preventDefault();

  alert(formValues.join(' ------ '));
};
