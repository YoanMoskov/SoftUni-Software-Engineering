function deleteByEmail() {
    let tableColsEl = document.querySelectorAll('#customers > tbody > tr > td');
    let inputTextEl = document.querySelector('body > label > input[type=text]');
    let textOutputEl = document.querySelector('#result');

    let isFound = false;
    for (const col of tableColsEl) {
        if (col.textContent == inputTextEl.value) {
            col.parentElement.remove();
            isFound = true;
            textOutputEl.textContent = 'Deleted.'
            break;
        }
    }
    if (isFound == false) {
        textOutputEl.textContent = 'Not found.'
    }
}