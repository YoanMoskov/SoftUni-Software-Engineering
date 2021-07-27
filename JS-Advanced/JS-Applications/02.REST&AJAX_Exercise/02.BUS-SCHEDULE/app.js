function solve() {
    const infoEl = document.querySelector('#info > span');
    const departButtonEl = document.querySelector('#depart');
    const arriveButtonEl = document.querySelector('#arrive');

    let currentId = '';
    let nextStop = '';
    if (infoEl.textContent === 'Not Connected') {
        currentId = 'depot';
    }

    function depart() {

        fetch(`https://judgetests.firebaseio.com/schedule/${currentId}.json`)
            .then(response => response.json())
            .then(data => useData(data))
            .catch(() => {
                infoEl.textContent = 'ERROR';
            });

        function useData({name, next}) {
            currentId = name;
            nextStop = next;
            infoEl.textContent = `Next stop ${currentId}`;
            departButtonEl.setAttribute('disabled', 'true');
            arriveButtonEl.removeAttribute('disabled');
        }
    }

    function arrive() {
        infoEl.textContent = `Arriving at ${currentId}`;
        departButtonEl.removeAttribute('disabled');
        arriveButtonEl.setAttribute('disabled', 'true');
        currentId = nextStop;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();