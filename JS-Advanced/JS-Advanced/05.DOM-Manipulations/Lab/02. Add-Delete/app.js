function addItem() {
        let itemsEl = document.querySelector('#items');
        let inputEl = document.querySelector('#newText');

        
        let remove = document.createElement('a');
        remove.textContent = '[Delete]';
        remove.addEventListener('click', removeElement);
        function removeElement() {
            newItemEl.remove();
        }

        let newItemEl = document.createElement('li');
        newItemEl.innerHTML = inputEl.value;
        newItemEl.appendChild(remove);
        itemsEl.appendChild(newItemEl);
        inputEl.value = '';

}