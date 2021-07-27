function solve() {
    const taskInputEl = document.querySelector('#task');
    const descriptionInputEl = document.querySelector('#description');
    const dueDateInputEl = document.querySelector('#date');
    const addButton = document.querySelector('#add');
    const openSectionEl = document.querySelector('body > main > div > section:nth-child(2) > div:nth-child(2)');
    const inProgressSectionEl = document.querySelector('#in-progress');
    const completeSectionEl = document.querySelector('body > main > div > section:nth-child(4) > div:nth-child(2)');

    addButton.addEventListener('click', addArticleToOpen);
    function addArticleToOpen(e) {
        e.preventDefault();
        if (taskInputEl.value != '' && descriptionInputEl.value != '' && dueDateInputEl.value != '') {
            let articleEl = document.createElement('article');
            let h3El = document.createElement('h3');
            let pDescEl = document.createElement('p');
            let pDueDateEl = document.createElement('p');

            let divEl = document.createElement('div');
            divEl.setAttribute('class', 'flex');
            let startButtonEl = document.createElement('button');
            startButtonEl.setAttribute('class', 'green');
            startButtonEl.textContent = 'Start';
            let deleteButtonEl = document.createElement('button');
            deleteButtonEl.setAttribute('class', 'red');
            deleteButtonEl.textContent = 'Delete';

            divEl.appendChild(startButtonEl);
            divEl.appendChild(deleteButtonEl);

            h3El.textContent = taskInputEl.value;
            pDescEl.textContent = `Description: ${descriptionInputEl.value}`;
            pDueDateEl.textContent = `Due Date: ${dueDateInputEl.value}`;

            articleEl.appendChild(h3El);
            articleEl.appendChild(pDescEl);
            articleEl.appendChild(pDueDateEl);
            articleEl.appendChild(divEl);
            openSectionEl.appendChild(articleEl);
            startButtonEl.addEventListener('click', moveTastToProgress);
            deleteButtonEl.addEventListener('click', deleteTask);
        }
    }
    function moveTastToProgress(e) {
        e.preventDefault();

        let finishButtonEl = document.createElement('button');
        finishButtonEl.setAttribute('class', 'orange');
        finishButtonEl.textContent = 'Finish';
        finishButtonEl.addEventListener('click', moveTaskToComplete);

        e.currentTarget.parentElement.appendChild(finishButtonEl);
        inProgressSectionEl.appendChild(e.currentTarget.parentElement.parentElement);
        e.currentTarget.remove();
    }
    function moveTaskToComplete(e) {
        console.log(e.currentTarget.parentElement.parentElement);
        completeSectionEl.appendChild(e.currentTarget.parentElement.parentElement);
        e.currentTarget.parentElement.remove();
    }
    function deleteTask(e) {
        e.currentTarget.parentElement.parentElement.remove();
    }
}