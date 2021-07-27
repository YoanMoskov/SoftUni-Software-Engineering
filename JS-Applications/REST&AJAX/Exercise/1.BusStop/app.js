function getInfo() {
    const stopIdEl = document.querySelector('#stopId');
    const stopNameEl = document.querySelector('#stopName');
    const busEls = document.querySelector('#buses');
    const validBusses = ['1287', '1308', '1327', '2334'];

    stopNameEl.textContent = '';
    while (busEls.firstChild) {
        busEls.firstChild.remove();
    }

    let stopId = stopIdEl.value;
    if (!validBusses.includes(stopId)) {
        stopNameEl.textContent = 'Error';
        return;
    }

    let url = `https://judgetests.firebaseio.com/businfo/${stopId}.json`
    fetch(url)
        .then(response => response.json())
        .then(data => useData(data));

    function useData(data) {
        stopNameEl.textContent = data.name;
        Object.keys(data.buses).forEach(bus => {
            let liBus = document.createElement('li');
            liBus.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`;
            busEls.appendChild(liBus);
        });
    }
}