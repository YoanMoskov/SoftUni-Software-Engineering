function addItem() {
    let itemsEl = document.querySelector('#items');
    let inputEl = document.querySelector('#newItemText');
    let buttonEl = document.querySelector('body > main > input[type=button]:nth-child(3)');

    let newItemEl = document.createElement('li');
    newItemEl.innerHTML = inputEl.value;
    itemsEl.appendChild(newItemEl);
    inputEl.value = '';

}