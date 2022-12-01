const form = document.querySelector('.tophead__form'),
      formInput = form.querySelector('.tophead__input'),
      formBtn = form.querySelector('.tophead__search');

formBtn.addEventListener('click', () => {
    formInput.classList.toggle('input-active')
})