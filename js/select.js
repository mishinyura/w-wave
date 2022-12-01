const select = document.querySelector('.select'),
      selectTitle = select.querySelector('.select__title'),
      selectList = select.querySelector('.select__list'),
      selectItem = select.querySelectorAll('.select__name');

let newSelectTitle;

selectTitle.addEventListener('click', () => {
    selectList.classList.toggle('select-active')
})

selectTitle.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        selectList.classList.toggle('select-active')
    }
    if (e.keyCode == 27 ){
		selectList.classList.remove('select-active')
	}
})

for (let i = 0; i < selectItem.length; i++) {
    selectItem[i].addEventListener('click', () => {
        newSelectTitle = selectItem[i].innerHTML;
        selectItem[i].innerHTML = selectItem[i].parentElement.previousElementSibling.innerHTML
        selectItem[i].parentElement.previousElementSibling.innerHTML = newSelectTitle
        selectList.classList.toggle('select-active')
    })
}

document.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(selectTitle);
 
	if (!withinBoundaries) {
		selectList.classList.remove('select-active')
	}
})