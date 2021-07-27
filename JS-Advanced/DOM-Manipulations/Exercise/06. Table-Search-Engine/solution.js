function solve() {
   let searchButtonEl = document.querySelector('#searchBtn');
   let tableEl = document.querySelectorAll('tbody > tr');
   let inputEl = document.querySelector('#searchField');

   searchButtonEl.addEventListener('click', findElInTable)
   function findElInTable(e) {
      let stringToFind = inputEl.value;
      for (const row of tableEl) {
         if (row.textContent.includes(stringToFind) && stringToFind != '') {
            row.classList.add('select');
         }
         else {
            row.classList.remove('class');
         }
      }
   }
   inputEl.value = '';
}

