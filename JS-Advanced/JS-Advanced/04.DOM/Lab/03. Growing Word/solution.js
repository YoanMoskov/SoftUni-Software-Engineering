function growingWord() {
  let wordEl = document.querySelector('#exercise > p');
  if (wordEl.hasAttribute('style')) {
    let currColor = wordEl.style['color'];
    let currFontSize = wordEl.style['font-size'];
    let numberFontSize = Number(currFontSize.substring(0, currFontSize.length - 2));
    let nextColor;
    if (currColor == 'blue') {
      nextColor = 'green';
    }
    else if (currColor == 'green') {
      nextColor = 'red';
    }
    else if (currColor == 'red') {
      nextColor = 'blue';
    }
    wordEl.removeAttribute('style');
    wordEl.setAttribute('style', `color: ${nextColor}; font-size: ${numberFontSize * 2}px;`)
  }
  else{
    wordEl.setAttribute('style', `color: blue; font-size: 2px;`);
  }
}