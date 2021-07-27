function solve() {
  let inputText = document.querySelector('#input');
  let outputText = document.querySelector('#output');
  let textArr = inputText.innerHTML.split('.');
  textArr.pop();

  for (let i = 0; i < textArr.length; i+=3) {
    let text = textArr.slice(i, i + 3).join('.');
    let paragraph = document.createElement('p');
    paragraph.innerHTML = text + '.';
    outputText.appendChild(paragraph);
  }
}