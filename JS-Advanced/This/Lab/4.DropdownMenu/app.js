function solve() {
    let dropdownButtonEl = document.querySelector('#dropdown');
    let dropdownMenuEl = document.querySelector('#dropdown-ul');
    let optionsDropdownEls = document.querySelectorAll('#dropdown-ul > li')
    let boxEl = document.querySelector('#box');
    boxEl.style = 'background-color: black';

    dropdownButtonEl.addEventListener('click', actionDropdown);
    function actionDropdown(e){
        
        if (dropdownMenuEl.style.display == 'block') {
            dropdownMenuEl.style = 'display: none';
            boxEl.style = 'background-color: black; color: white';
        }
        else{
            dropdownMenuEl.style = 'display: block';
        }
    }

    for (const colorOption of optionsDropdownEls) {
        colorOption.addEventListener('click', colorizeBox);
    }
    function colorizeBox(e) {
        let wantedColor = e.currentTarget.textContent;
        boxEl.style = `background-color: ${wantedColor}; color: black`;
    }
}
// document.body.innerHTML = `
// <div class="container">
//     <button id="dropdown" >
//         Choose your style
//     </button>
//     <ul id="dropdown-ul" >
//         <li class = "deep">orange</li>
//         <li class = "deep1">pink</li>
//         <li class = "deep2">red</li>
//         <li class = "deep3">green</li>
//         <li class = "deep4">blue</li>
//     </ul>
// </div>
// <div id = "box">Box</div>
// `;

// result();

// let button = document.querySelector('#dropdown');
// let ul = document.querySelector('#dropdown-ul');
// let box = document.querySelector('#box');

// assert.equal(ul.style.display,"","The ul should be hidden in the beggining");

// button.click();
// assert.equal(ul.style.display,"block","The ul should be visible when the button is clicked");

// let lis = ul.children;
// lis[2].click();
// let bc = document.querySelector('#box').style['background-color'];
// assert.equal(bc,lis[2].textContent,"Background color is not correct 1");
// assert.equal(document.querySelector('#box').style.color,"black");

// lis[0].click();
// assert.equal(document.querySelector('#box').style.backgroundColor,lis[0].textContent,"Background color is not correct2");
// assert.equal(document.querySelector('#box').style.color,"black");

// button.click();
// assert.equal(ul.style.display,"none","The ul should be hidden");
// assert.equal(document.querySelector('#box').style.backgroundColor,"black");
// assert.equal(document.querySelector('#box').style.color,"white");