function solve() {
    const lectureInputEl = document.querySelector('body > main > section.admin-view.section-view > div > div > form > div:nth-child(1) > input[type=text]');
    const dateInputEl = document.querySelector('body > main > section.admin-view.section-view > div > div > form > div:nth-child(2) > input[type=datetime-local]');
    const moduleInputEl = document.querySelector('body > main > section.admin-view.section-view > div > div > form > div:nth-child(3) > select');
    const addButtonEl = document.querySelector('body > main > section.admin-view.section-view > div > div > form > div:nth-child(4) > button');
    const trainingsBoxEl = document.querySelector('body > main > section.user-view.section-view > div');

    addButtonEl.addEventListener('click', addTraining)
    function addTraining(e) {
        console.log(this);
        e.preventDefault();
        if (lectureInputEl.value == '' || dateInputEl.value == '' || moduleInputEl.value == 'Select module') {
            return;
        }
        let divEl = document.createElement('div');
        let h3El = document.createElement('h3');
        let ulEl = document.createElement('ul');
        let liEl = document.createElement('li');
        let h4El = document.createElement('h4');
        let buttonEl = document.createElement('button');
        let ulToAddTo;

        liEl.setAttribute('class', 'flex');
        let properDate = dateInputEl.value.split('-');
        properDate = properDate.join('/');
        properDate = properDate.split('T');
        properDate = properDate.join(' - ');
        h4El.textContent = `${lectureInputEl.value} - ${properDate}`;
        buttonEl.setAttribute('class', 'red');
        buttonEl.textContent = 'Del';

        let hasModule = false;
        for (const box of trainingsBoxEl.childNodes) {
            if (box.textContent.trim() == '') {
                box.remove();
            }
            else if (hasModule == false) {
                if (box.firstChild.textContent == `${moduleInputEl.value.toUpperCase()}-MODULE`) {
                    ulToAddTo = box.childNodes[1];
                    hasModule = true;
                }
            }
            
        }
        if (hasModule != true) {
            divEl.setAttribute('class', 'module');
            h3El.textContent = `${moduleInputEl.value.toUpperCase()}-MODULE`;
            divEl.appendChild(h3El);
            liEl.appendChild(h4El);
            liEl.appendChild(buttonEl);
            ulEl.appendChild(liEl);
            divEl.appendChild(ulEl);
            trainingsBoxEl.appendChild(divEl);
        }
        else{
            liEl.appendChild(h4El);
            liEl.appendChild(buttonEl);
    
            ulToAddTo.appendChild(liEl);

            let array = [];
            for (const h4 of liEl.parentElement.querySelectorAll('li > h4')) {
                array.push(h4.textContent);
                h4.parentElement.remove();
            }

            array = array.sort((a, b) => {
                a = a.split(' - ')[1];
                b = b.split(' - ')[1];
                return a.localeCompare(b);
            });
            array.forEach(textContent => {
                let newLI = document.createElement('li');
                newLI.setAttribute('class', 'flex');
                let newH4El = document.createElement('h4');
                let newButton = buttonEl.cloneNode(true);
                newH4El.textContent = textContent;
                newLI.appendChild(newH4El);
                newLI.appendChild(newButton);
                ulToAddTo.appendChild(newLI);
                newButton.addEventListener('click', deleteLi);
            });
        }
        
        
        buttonEl.addEventListener('click', deleteLi);
        function deleteLi(e){
            console.log();
            if (e.currentTarget.parentElement.parentElement.parentElement.childNodes[1].childElementCount == 1) {
                e.currentTarget.parentElement.parentElement.parentElement.remove()
            }
            else{
                e.currentTarget.parentElement.remove();
            }
        }
    }
}