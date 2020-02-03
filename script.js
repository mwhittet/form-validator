// Get our form and inputs
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

// Show input error message
const showError = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  formControl.className = 'form-control error';
  small.innerText = message;
};

// Show success outline
const showSuccess = (input, message) => {
  const formControl = input.parentElement;

  formControl.className = 'form-control success';
};

// Tidy up error message string
const getFieldName = input => {
  return (
    input.id.charAt(0).toUpperCase() + input.id.slice(1).replace(/-/g, ' ')
  );
};

// Check required fields
const checkRequired = inputArr => {
  inputArr.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
};

// Check input length
const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters!`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} can't be more then ${max} characters!`
    );
  } else {
    showSuccess(input);
  }
};

// Check email is valid
const checkEmail = input => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
};

// Check passwords match
const checkPasswordsMatch = (pw1, pw2) => {
  if (pw1.value !== pw2.value) {
    showError(pw2, 'Passwords do not match!');
  }
};

// Event listener
form.addEventListener('submit', e => {
  e.preventDefault();

  checkRequired([username, email, password, confirmPassword]);
  checkLength(username, 3, 15);
  checkEmail(email);
  checkLength(password, 6, 25);
  checkPasswordsMatch(password, confirmPassword);
});
