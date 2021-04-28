const modalPopup = document.querySelector('.modal-wrapper');
const countriesButton = document.querySelector('.countries__item-button');
const pricesButtons = document.querySelectorAll('.prices__tariffs-button');
const closeModalButton = modalPopup.querySelector('.modal__close-button');
const modalForm = modalPopup.querySelector('.modal__form');
const userTelephone = modalPopup.querySelector('[name=tel]');
const userEmail = modalPopup.querySelector('[name=email]');
const messagePopup = document.querySelector('.message-wrapper');
const closeMessageButton = messagePopup.querySelector('.message__close-button');
const feedbackForm = document.querySelector('.feedback__form');

let isStorageSupport = true;
let storageName = '';

/* try/catch */

try {
  storageTelephone = localStorage.getItem('tel');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

/* modal show/close */

const openModal = (button) => {
  button.preventDefault();
  modalPopup.classList.add('modal__wrapper-show');
  userTelephone.focus();
  if (storageName) {
    userTelephone.value = storageTelephone;
    userEmail.value = storageEmail;
  }
}

countriesButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  openModal(evt);
})

for (let i = 0; i < pricesButtons.length; i++) {
  pricesButtons[i].addEventListener('click', (evt) => {
    openModal(evt);
  })
}

closeModalButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalPopup.classList.remove('modal__wrapper-show');
})

window.addEventListener('keydown', function(evt) {
  if (evt.key === 'Escape') {
    if (modalPopup.classList.contains('modal__wrapper-show')) {
      evt.preventDefault();
      modalPopup.classList.remove('modal__wrapper-show');
    }
  }
})

modalPopup.addEventListener('click', function(evt) {
  if (evt.target !== modalPopup) {
    evt.stopPropagation();
  } else {
    modalPopup.classList.remove('modal__wrapper-show');
  }
})

/* form submit */

modalForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  modalPopup.classList.remove('modal__wrapper-show');
  messagePopup.classList.add('message__wrapper-show');
  if (isStorageSupport) {
    localStorage.setItem('tel', userTelephone.value);
    localStorage.setItem('email', userEmail.value);
  }
});

feedbackForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  messagePopup.classList.add('message__wrapper-show');
  if (isStorageSupport) {
    localStorage.setItem('tel', userTelephone.value);
    localStorage.setItem('email', userEmail.value);
  }
});

/* message show/close */

closeMessageButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  messagePopup.classList.remove('message__wrapper-show');
})

window.addEventListener('keydown', function(evt) {
  if (evt.key === 'Escape') {
    if (messagePopup.classList.contains('message__wrapper-show')) {
      evt.preventDefault();
      messagePopup.classList.remove('message__wrapper-show');
    }
  }
})

messagePopup.addEventListener('click', function(evt) {
  if (evt.target !== messagePopup) {
    evt.stopPropagation();
  } else {
    messagePopup.classList.remove('message__wrapper-show');
  }
})
