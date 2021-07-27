const allCatsEl = document.getElementById('allCats');
const catsView = document.getElementById('cat-template').innerHTML;
const catsTemplate = Handlebars.compile(catsView);
let catsHTML;
catsHTML = catsTemplate({cats});
allCatsEl.innerHTML = catsHTML;

allCatsEl.addEventListener('click', showHideDetails)
function showHideDetails(e) {
    if (e.target.nodeName === 'BUTTON'){
        let currEl = e.target.parentElement.querySelector('.status');
        let currButton = e.target.parentElement.querySelector('.showBtn');
        if (currEl.style.display === 'none'){
            currEl.style.display = 'block';
            currButton.textContent = 'Hide status code'
        }
        else{
            currEl.style.display = 'none';
            currButton.textContent = 'Show status code'
        }
    }
}