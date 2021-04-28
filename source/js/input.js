const telInput = document.querySelector('.form__input[type="tel"]');
const emailInput = document.querySelector('.form__input[type="email"]');

telInput.addEventListener('input', () => {
  let telArray = telInput.value.toLowerCase().split(' ');
  let regex = /^#[0-9]+$/;

  for (let i = 0; i < telArray.length; i++) {
    if (telArray[i].search(regex) === -1) {
      telInput.setCustomValidity('Данные не верны');
    } else {
      telInput.setCustomValidity('');
    }

    telInput.reportValidity();
  }

  if (!telInput.validity.valid) {
    telInput.setAttribute('style', 'border-color: #fe7865; outline: none; border-width: 1px;');
    return;
  }
  telInput.removeAttribute('style');
})

emailInput.addEventListener('input', () => {
  if (!emailInput.validity.valid) {
    emailInput.setAttribute('style', 'border-color: #fe7865; outline: none; border-width: 1px;');
    emailInput.setCustomValidity('Данные не верны');
    return;
  } else {
    emailInput.setCustomValidity('');
  }

  emailInput.reportValidity();
  emailInput.removeAttribute('style');
})
