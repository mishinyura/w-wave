const burgerBtn = document.querySelector('.burger'),
      navBar = document.querySelector('.nav'),
      menuBar = document.querySelector('.bottomhead__menu'),
      play = document.querySelector('.bottomhead__content');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger-active');
    navBar.classList.toggle('nav-active');

    if(document.body.offsetWidth <= 456){
        menuBar.classList.toggle('menu-active');
        play.classList.toggle('player-overflow');
    }
})