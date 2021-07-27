function solve() {
  let generateButtonEl = document.querySelector('#exercise > button:nth-child(3)');
  let firstTextBoxEl = document.querySelector('#exercise > textarea:nth-child(2)');
  let secongTextBoxEl = document.querySelector('#exercise > textarea:nth-child(5)');
  let buyButtonEl = document.querySelector('#exercise > button:nth-child(6)');
  let tableEl = document.querySelector('#exercise > div > div > div > div > table > tbody');

  generateButtonEl.addEventListener('click', generate)
  function generate(e) {
    let furnitureObj = JSON.parse(firstTextBoxEl.value);
    furnitureObj.forEach(el => {
      let trEl = document.createElement('tr');

      let imgTdEl = document.createElement('td');
      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', `${el.img}`)
      imgTdEl.appendChild(imgEl);
      trEl.appendChild(imgTdEl);

      let nameTdEl = document.createElement('td');
      let nameParEl = document.createElement('p');
      nameParEl.textContent = `${el.name}`;
      nameTdEl.appendChild(nameParEl);
      trEl.appendChild(nameTdEl);

      let priceTdEl = document.createElement('td');
      let priceParEl = document.createElement('p');
      priceParEl.textContent = `${el.price}`;
      priceTdEl.appendChild(priceParEl);
      trEl.appendChild(priceTdEl);

      let decFactorTdEl = document.createElement('td');
      let decFactorParEl = document.createElement('p');
      decFactorParEl.textContent = `${el.decFactor}`;
      decFactorTdEl.appendChild(decFactorParEl);
      trEl.appendChild(decFactorTdEl);

      let checkboxTdEl = document.createElement('td');
      let checkboxInputEl = document.createElement('input');
      checkboxInputEl.setAttribute('type', 'checkbox');
      checkboxTdEl.appendChild(checkboxInputEl);
      trEl.appendChild(checkboxTdEl);

      tableEl.appendChild(trEl);
    });
    firstTextBoxEl.value = '';
  }
  buyButtonEl.addEventListener('click', printBought);
  function printBought(e) {
    let products = tableEl.querySelectorAll('tbody > tr');
    let names = [];
    let priceTotal = 0;
    let averageDec = 0;
    let stringOutput = '';
    console.log(products);
    for (const row of products) {
      if(row.querySelector('input').checked){
        let values = row.querySelectorAll('p');
        names.push(values[0].textContent);
        priceTotal += Number(values[1].textContent);
        averageDec += Number(values[2].textContent);
      }
    }
    stringOutput += `Bought furniture: ${names.join(', ')}\n`;
    stringOutput += `Total price: ${priceTotal.toFixed(2)}\n`;
    stringOutput += `Average decoration factor: ${Number(averageDec/names.length)}`;
    secongTextBoxEl.value = stringOutput;
  }
}