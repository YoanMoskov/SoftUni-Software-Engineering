function solve() {
    let inputElement = document.querySelector('#exercise > article > input[type=text]');
    let buttonEl = document.querySelector('#exercise > article > button');
    let listABC = document.querySelectorAll('#exercise > div > ol > li');

    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let counter = 0;
    for (const li of listABC) {
        li.setAttribute('name', `${alphabet[counter]}`)
        counter++;
    }

    function formatName(name) {
        name = name.substring(0, 1).toUpperCase() +
        name.substring(1).toLowerCase();
        return name;
    }

    buttonEl.addEventListener('click', addOnClick)
    function addOnClick(e) {
        for (const li of listABC) {
            let char = String(li.getAttribute('name'));
            if (char == inputElement.value[0].toUpperCase()) {
                if (li.textContent.length == 0) {
                    li.textContent += formatName(inputElement.value);
                }
                else {
                    li.textContent += `, ${formatName(inputElement.value)}`;
                }
            }
        }
    }
}