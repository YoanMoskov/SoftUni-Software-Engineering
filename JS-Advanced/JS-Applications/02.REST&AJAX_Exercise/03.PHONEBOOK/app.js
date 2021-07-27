function attachEvents() {
    const phonebookEl = document.querySelector('#phonebook');
    const loadBtnEl = document.querySelector('#btnLoad');
    const createBtnEl = document.querySelector('#btnCreate');
    const nameInput = document.querySelector('#person');
    const numberInput = document.querySelector('#phone');
    
    createBtnEl.addEventListener('click', postUser)
    loadBtnEl.addEventListener('click', getRequest)
    function getRequest() {
        while(phonebookEl.firstChild){
            phonebookEl.firstChild.remove();
        }
        fetch(`https://phonebook-nakov.firebaseio.com/phonebook.json`)
            .then(response => response.json())
            .then(data => useData(data));
        function useData(data) {
            Object.entries(data).forEach(user => {
                let deleteBtnEl = document.createElement('button');
                let deleteBtnURL = `https://phonebook-nakov.firebaseio.com/phonebook/${user[0]}.json`;
                let liEl = document.createElement('li');

                deleteBtnEl.textContent = 'Delete';
                deleteBtnEl.addEventListener('click', deleteElement)

                liEl.textContent = `<${user[1].person}>: <${user[1].phone}>`;
                liEl.appendChild(deleteBtnEl);

                phonebookEl.appendChild(liEl);

                function deleteElement() {
                    fetch(deleteBtnURL, {method: "DELETE"});
                    liEl.remove();
                }
            });
        }
    }
    function postUser() {
        fetch(`https://phonebook-nakov.firebaseio.com/phonebook.json`, {
            method: 'POST',
            body: JSON.stringify({
                person: nameInput.value,
                phone: numberInput.value,
            })
        })

    }
}

attachEvents();