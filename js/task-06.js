const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', onValidationColorChange);
validationInput.addEventListener('focus', onValidStyleReset);


function onValidationColorChange(event) {
    if (event.currentTarget.value.length < validationInput.getAttribute('data-length')) {
        validationInput.classList.add('invalid')
    }
      validationInput.classList.add('valid')
    }

function onValidStyleReset() {
    validationInput.classList.remove('invalid');
    validationInput.classList.remove('valid');
    validationInput.value = '';
   }