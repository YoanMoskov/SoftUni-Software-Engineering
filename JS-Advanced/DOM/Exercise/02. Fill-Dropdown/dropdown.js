function addItem() {
    let itemNameEl = document.querySelector('#newItemText');
    let itemValueEl = document.querySelector('#newItemValue');
    let dropDownEl = document.querySelector('#menu');

    let option = document.createElement('option');
    let textContent = document.createElement('textContent');
    let value = document.createElement('value'); 
    if (itemNameEl.value !== '' && itemValueEl.value !== '') {
        textContent.innerHTML = itemNameEl.value;
        value.innerHTML = itemValueEl.value;
        option.appendChild(textContent);
        option.appendChild(value);
        dropDownEl.appendChild(option);
        itemNameEl.value = '';
        itemValueEl.value = '';
    }
}