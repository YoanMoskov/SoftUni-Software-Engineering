function solve() {
    const nameEl = document.querySelector('#container > input[type=text]:nth-child(1)');
    const ageEl = document.querySelector('#container > input[type=text]:nth-child(2)');
    const kindEl = document.querySelector('#container > input[type=text]:nth-child(3)');
    const currOwnerEl = document.querySelector('#container > input[type=text]:nth-child(4)');
    const addButton = document.querySelector('#container > button');
    const findBoxEl = document.querySelector('#adoption > ul');
    const buddiesBoxEl = document.querySelector('#adopted > ul');

    addButton.addEventListener('click', addAnimalToFindBox);

    function addAnimalToFindBox(e) {
        e.preventDefault();
        if (nameEl.value == '' || ageEl.value == '' || kindEl.value == '' || currOwnerEl.value == '') {
            return;
        }
        if (!Number(ageEl.value)) {
            return;
        }
        let liEl = document.createElement('li');

        let pEl = document.createElement('p');
        let strongNameEl = document.createElement('strong');
        let nameText = document.createTextNode(' is a ');
        let strongYearEl = document.createElement('strong');
        let yearText = document.createTextNode(' year old ');
        let strongKindEl = document.createElement('strong');
        
        strongNameEl.textContent = nameEl.value;
        strongYearEl.textContent = ageEl.value;
        strongKindEl.textContent = kindEl.value;
        pEl.appendChild(strongNameEl);
        pEl.appendChild(nameText);
        pEl.appendChild(strongYearEl);
        pEl.appendChild(yearText);
        pEl.appendChild(strongKindEl);

        let spanEl = document.createElement('span');
        spanEl.textContent = `Owner: ${currOwnerEl.value}`;
        let buttonEl = document.createElement('button');
        buttonEl.textContent = 'Contact with owner';

        liEl.appendChild(pEl);
        liEl.appendChild(spanEl);
        liEl.appendChild(buttonEl);

        findBoxEl.appendChild(liEl);

        buttonEl.addEventListener('click', changeButton)
    }
    function changeButton(e) {
        let divEl = document.createElement('div');
        let inputEl = document.createElement('input');
        inputEl.setAttribute('placeholder', 'Enter your names');
        let replacemetButtonEl = document.createElement('button');
        replacemetButtonEl.textContent = 'Yes! I take it!';

        divEl.appendChild(inputEl);
        divEl.appendChild(replacemetButtonEl)

        e.currentTarget.parentElement.appendChild(divEl);
        replacemetButtonEl.addEventListener('click', moveToBuddies);
        e.currentTarget.remove();
    }
    function moveToBuddies(e) {
        let namesBoxEl = e.currentTarget.previousSibling;
        if (namesBoxEl.value == '') {
            return;
        }
        e.currentTarget.parentElement.previousSibling.textContent = `New Owner: ${e.currentTarget.previousSibling.value}`;
        let replacemetButtonEl = document.createElement('button');
        replacemetButtonEl.textContent = 'Checked';
        e.currentTarget.parentElement.parentElement.appendChild(replacemetButtonEl);
        
        buddiesBoxEl.appendChild(e.currentTarget.parentElement.parentElement);
        e.currentTarget.parentElement.remove();
        replacemetButtonEl.addEventListener('click', remove)
    }
    function remove(e) {
        e.currentTarget.parentElement.remove();
    }
}

