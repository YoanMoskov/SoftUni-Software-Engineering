function attachEvents() {
    const textAreaEl = document.querySelector('#messages');
    const nameInput = document.querySelector('#author');
    const messageInput = document.querySelector('#content');
    const sendBtnEl = document.querySelector('#submit');
    const refreshBtnEl = document.querySelector('#refresh');

    let url = `https://rest-messanger.firebaseio.com/messanger.json`

    sendBtnEl.addEventListener('click', postReq)
    refreshBtnEl.addEventListener('click', getReq)
    function postReq() {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                author: nameInput.value,
                content: messageInput.value,
            })
        })
    }
    function getReq() {
        textAreaEl.textContent = '';
        fetch(url)
            .then(response => response.json())
            .then(data => useData(data));
        function useData(data) {
            Object.entries(data).forEach(message => {
               let textEl = document.createTextNode(`${message[1].author}: ${message[1].content}\n`);
               textAreaEl.appendChild(textEl);
            });
        }
    }
}

attachEvents();