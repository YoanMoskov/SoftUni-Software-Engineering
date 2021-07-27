const monkeysBox = document.querySelector('body > section > div');
const monkeysView = document.getElementById('monkey-template').innerHTML;

const monkeysTemplate = Handlebars.compile(monkeysView);
let monkeysHTML;
monkeysHTML = monkeysTemplate({monkeys});
monkeysBox.innerHTML = monkeysHTML;

monkeysBox.addEventListener('click', showInfo)
function showInfo(e) {
    if (e.target.nodeName === 'BUTTON'){
        let infoEl = e.target.parentElement.querySelector('p');
        if (infoEl.style.display === 'none'){
            infoEl.style.display = 'block';
        }
        else {
            infoEl.style.display = 'none'
        }

    }
}