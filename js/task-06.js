const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', onValidationColorChange);



function onValidationColorChange(event) {
    if (event.currentTarget.value.length < validationInput.getAttribute('data-length')
        || event.currentTarget.value.length > validationInput.getAttribute('data-length'))
    {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    } else {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    }

   
     console.log(validationInput.classList)
}
   
