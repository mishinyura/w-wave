const ethirBtn = document.querySelector('.ethirbtn'),
      ethirPlayer = document.querySelector('.bottomhead__content'),
      player = document.querySelector('.bottomhead__players');

ethirBtn.addEventListener('click', () => {
    ethirBtn.classList.toggle('ethir-btn-active');
    ethirPlayer.classList.toggle('ethir-text-active');
    player.classList.toggle('player-active');
})