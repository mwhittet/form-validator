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

// Check email is valid
const isValidEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
};

// Event listener
form.addEventListener('submit', e => {
  e.preventDefault();

  checkRequired([username, email, password, confirmPassword]);
});
