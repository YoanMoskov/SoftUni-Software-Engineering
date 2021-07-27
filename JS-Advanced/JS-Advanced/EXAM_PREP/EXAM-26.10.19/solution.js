function solve() {
  const addToAvailableProductsButtonEl = document.querySelector(
    '#add-new > button'
  );
  const nameBoxEl = document.querySelector(
    '#add-new > input[type=text]:nth-child(2)'
  );
  const qtyBoxEl = document.querySelector(
    '#add-new > input[type=text]:nth-child(3)'
  );
  const priceBoxEl = document.querySelector(
    '#add-new > input[type=text]:nth-child(4)'
  );
  const availableProductsUlEl = document.querySelector('#products > ul');
  const myProductsEl = document.querySelector('#myProducts > ul');
  const totalPriceEl = document.querySelector('body > h1:nth-child(4)');
  const buyButtonEl = document.querySelector('#myProducts > button');
  const filterButtonEl = document.querySelector('#products > div > button');
  const filterBoxEl = document.querySelector('#filter');

  //Functionality - add items to Available Products
  addToAvailableProductsButtonEl.addEventListener('click', addToAP);
  function addToAP(e) {
    e.preventDefault();
    let addToClientListButton = document.createElement('button');
    if (
      nameBoxEl.value != '' &&
      qtyBoxEl.value != '' &&
      priceBoxEl.value != ''
    ) {
      let liEl = document.createElement('li');
      let spanEl = document.createElement('span');
      spanEl.textContent = nameBoxEl.value;
      let strongQtyEl = document.createElement('strong');
      strongQtyEl.textContent = `Available: ${qtyBoxEl.value}`;

      let divEl = document.createElement('div');
      let strongPriceEl = document.createElement('strong');
      strongPriceEl.textContent = priceBoxEl.value;
      addToClientListButton.textContent = "Add to Client's List";
      divEl.appendChild(strongPriceEl);
      divEl.appendChild(addToClientListButton);

      liEl.appendChild(spanEl);
      liEl.appendChild(strongQtyEl);
      liEl.appendChild(divEl);
      availableProductsUlEl.appendChild(liEl);

   }
   nameBoxEl.value = '';
   qtyBoxEl.value = '';
   priceBoxEl.value = '';
   
   //Functionality - filter products
   
   filterButtonEl.addEventListener('click', showOnlyMatching);
   
   function showOnlyMatching(e) {
      e.preventDefault();
      for (const product of availableProductsUlEl.children) {
         if (
            product.children[0].textContent
            .toUpperCase()
            .includes(filterBoxEl.value.toUpperCase())
            ) {
               product.style.display = '';
            } else {
               product.style.display = 'none';
            }
         }
         filterBoxEl.value = '';
      }
      //Functionality - Add to customer list, add to total price;
      addToClientListButton.addEventListener('click', addToMyProducts);
  }

  function addToMyProducts(e) {
            e.preventDefault();
            let currQty = Number((e.currentTarget.parentNode.previousSibling.textContent.split(' ')[1]) - 1);
            let qtyAfter = e.currentTarget.parentNode.previousSibling;
            qtyAfter.textContent = `Available: ${currQty}`;
            if (currQty == 0) {
               e.currentTarget.parentNode.parentNode.remove();
            }
      
            let liEl = document.createElement('li');
            let selectedProductName = e.currentTarget.parentNode.previousSibling.previousSibling.textContent;
            let selectedProductPrice = e.currentTarget.previousSibling.textContent;
      
            string = totalPriceEl.textContent.split(' ')[0] + ' ' + totalPriceEl.textContent.split(' ')[1];
            let totalPrice = Number(totalPriceEl.textContent.split(' ')[2]);
            totalPrice += Number(selectedProductPrice);
            totalPriceEl.textContent = `${string} ${totalPrice.toFixed(2)}`;
      
            let text = document.createTextNode(selectedProductName);
            let strongPrice = document.createElement('strong');
            strongPrice.textContent = selectedProductPrice;
      
            liEl.appendChild(text);
            liEl.appendChild(strongPrice);
      
            myProductsEl.appendChild(liEl);
         }
  //Functionality - Buy
  buyButtonEl.addEventListener('click', action);
  function action(e) {
    e.preventDefault();
    while (myProductsEl.firstChild) {
      myProductsEl.firstChild.remove();
    }

    totalPriceEl.textContent = 'Total Price: 0.00';
  }
}
