function attachEvents() {
    const anglerEl = document.querySelector('#addForm > input.angler');
    const weightEl = document.querySelector('#addForm > input.weight');
    const speciesEl = document.querySelector('#addForm > input.species');
    const locationEl = document.querySelector('#addForm > input.location');
    const baitEl = document.querySelector('#addForm > input.bait');
    const captureTimeEl = document.querySelector('#addForm > input.captureTime');
    const catchesFieldEl = document.querySelector('#catches');

    const loadButtonEl = document.querySelector('body > aside > button');//GET
    const addButtonEl = document.querySelector('#addForm > button');//POST

    let urlBase = ` https://fisher-game.firebaseio.com/catches.json`;

    loadButtonEl.addEventListener('click', getCatches)

    async function getCatches() {
        while (catchesFieldEl.firstChild) {
            catchesFieldEl.firstChild.remove();
        }
        let catchesResponse = await fetch(urlBase);
        let catches = await catchesResponse.json();

        Object.keys(catches).forEach(_catch => {
            let obj = catches[_catch];
            createCatches(_catch, obj);
        })
    }

    addButtonEl.addEventListener('click', postCatch)

    async function postCatch() {
        let obj = {
            angler: anglerEl.value,
            weight: weightEl.value,
            species: speciesEl.value,
            location: locationEl.value,
            bait: baitEl.value,
            captureTime: captureTimeEl.value,
        }
        await fetch(urlBase, {
            method: 'POST',
            body: JSON.stringify(obj),
        });
    }

    function createCatches(_catch, obj) {
        let divEl = document.createElement('div');
        divEl.setAttribute('class', 'catch');
        divEl.setAttribute('data-id', `${_catch}`)
        divEl.innerHTML = `
                <label>Angler</label>
                <input type="text" class="angler" value="${obj.angler}" />
                <hr>
                <label>Weight</label>      
                <input type="number" class="weight" value="${obj.weight}" />
                <hr>
                <label>Species</label>
                <input type="text" class="species" value="${obj.species}" />
                <hr>
                <label>Location</label>
                <input type="text" class="location" value="${obj.location}" />
                <hr>
                <label>Bait</label>
                <input type="text" class="bait" value="${obj.bait}" />
                <hr>
                <label>Capture Time</label>
                <input type="number" class="captureTime" value="${obj.captureTime}" />
                <hr>`;
        let buttonUpdate = document.createElement('button');
        let buttonDelete = document.createElement('button');
        buttonUpdate.class = 'update';
        buttonDelete.class = 'delete';
        buttonUpdate.textContent = 'Update';
        buttonDelete.textContent = 'Delete';
        let urlDelUpd = `https://fisher-game.firebaseio.com/catches/${_catch}.json`;
        buttonUpdate.addEventListener('click', updateCatch);

        async function updateCatch() {
            await fetch(urlDelUpd, {
                method: 'PUT',
                body: JSON.stringify({
                    angler: this.parentElement.querySelector('input.angler').value,
                    weight: this.parentElement.querySelector('input.weight').value,
                    species: this.parentElement.querySelector('input.species').value,
                    location: this.parentElement.querySelector('input.location').value,
                    bait: this.parentElement.querySelector('input.bait').value,
                    captureTime: this.parentElement.querySelector('input.captureTime').value,
                })
            });
        }

        buttonDelete.addEventListener('click', deleteCatch);

        async function deleteCatch() {
            await fetch(urlDelUpd, {
                method: 'DELETE',
            });
            this.parentElement.remove();
        }

        divEl.appendChild(buttonUpdate);
        divEl.appendChild(buttonDelete);
        catchesFieldEl.appendChild(divEl);
    }
}

attachEvents();

