const loginModal = document.querySelector('.modal__login'),
  closeBtnModal = loginModal.querySelector('.modal__close'),
  loginBtn = document.querySelector('.tophead__login'),
  clickZoneBtn = loginModal.querySelector('.modal__click-zone');

let classActiveModal = 'modal-active';

const openModal = () => {
  loginModal.classList.add(classActiveModal)
}

const closeModal = () => {
  loginModal.classList.remove(classActiveModal)
}

loginBtn.addEventListener('click', openModal);
closeBtnModal.addEventListener('click', closeModal);
clickZoneBtn.addEventListener('click', closeModal);