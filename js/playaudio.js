const minPlayer = document.querySelectorAll('.player-min'),
      minPlayerBtn = document.querySelectorAll('.player-min__control'),
      audio = document.querySelectorAll('.audio');


let isPlay = false;

minPlayerBtn.forEach(btn => {
    
    btn.addEventListener('click', () => {
        if (isPlay){
            btn.previousElementSibling.pause()
            btn.firstElementChild.classList.add('svg-active')
            btn.lastElementChild.classList.remove('svg-active')
            isPlay = false
        } else{
            btn.previousElementSibling.play()
            btn.firstElementChild.classList.remove('svg-active')
            btn.lastElementChild.classList.add('svg-active')
            isPlay = true
        }
    })
})

const podcastBtnPlay = document.querySelectorAll('.podcasts__btn');

for (let i = 0; i < podcastBtnPlay.length; i++) {
    podcastBtnPlay[i].addEventListener('click', () => {
        for (let e = 0; e < podcastBtnPlay.length; e++) {
            podcastBtnPlay[e].classList.remove('play')
        }
        podcastBtnPlay[i].classList.add('play');
    })
    
}