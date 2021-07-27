function toggle() {
    let buttonEl = document.querySelector('#accordion > div.head > span');
    let extraEl = document.querySelector('#extra');
    if (buttonEl.textContent == 'Less') {
        extraEl.style['display'] = 'none';
        buttonEl.textContent = 'More';
    }
    else{
        extraEl.setAttribute('style', 'display: block');
        buttonEl.textContent = 'Less';
    }
}