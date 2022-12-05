const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');

const error = document.querySelector('.error');
const create = document.querySelector('.create');

create.addEventListener('click', (e) => {
  e.preventDefault();
  if (firstName.value === '') {
    firstName.setCustomValidity('Please fill in the input field.');
    firstName.reportValidity();
  } else if (lastName.value === '') {
    lastName.setCustomValidity('Please fill in the input field.');
    lastName.reportValidity();
  } else if (email.value === '') {
    email.setCustomValidity('Please fill in the input field.');
    email.reportValidity();
  } else if (phone.value === '') {
    phone.setCustomValidity('Please fill in the input field.');
    phone.reportValidity();
  } else if (password.value === '') {
    password.setCustomValidity('Please fill in the input field.');
    password.reportValidity();
  } else if (confirm.value === '') {
    confirm.setCustomValidity('Please fill in the input field.');
    confirm.reportValidity();
  } else if (password.value !== confirm.value) {
    error.style.display = 'block';
    setTimeout(() => {
      document.location.reload();
    }, 1500);
  }
});

confirm.addEventListener('input', () => {
  if (password.value !== confirm.value) {
    password.style.border = '1px solid #c13838';
    confirm.style.border = '1px solid #c13838';
    error.style.display = 'block';
  }
  setTimeout(() => {
    document.location.reload();
  }, 1500);
});

firstName.addEventListener('input', () => {
  localStorage.setItem('firstName', firstName.value);
});

lastName.addEventListener('input', () => {
  localStorage.setItem('lastName', lastName.value);
});

email.addEventListener('input', () => {
  localStorage.setItem('email', email.value);
});

phone.addEventListener('input', () => {
  localStorage.setItem('phone', phone.value);
});

window.onload = () => {
  firstName.value = localStorage.getItem('firstName');
  lastName.value = localStorage.getItem('lastName');
  email.value = localStorage.getItem('email');
  phone.value = localStorage.getItem('phone');
};