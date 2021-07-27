const inputEl = document.querySelector('#towns');
const loadBtnEl = document.querySelector('#btnLoadTowns');
const ulTownsEl = document.querySelector('#root > ul');
const townsView = document.getElementById('towns-template').innerHTML;


loadBtnEl.addEventListener('click', addTownsToUl)
function addTownsToUl(e) {
    e.preventDefault();
    const townsTemplate = Handlebars.compile(townsView);
    let townsHTML = ``;
    let townsArr = inputEl.value.split(', ');
    let towns = [];
    townsArr.map(town => {
        let newTown = {
            town,
        }
        towns.push(newTown);
    });
    townsHTML = townsTemplate({towns});

    ulTownsEl.innerHTML = townsHTML;
}