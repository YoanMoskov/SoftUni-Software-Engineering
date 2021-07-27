function solve(){
   let authorInputEl = document.querySelector('#creator');
   let titleInputEl = document.querySelector('#title');
   let categoryInputEl = document.querySelector('#category');
   let contentInputEl = document.querySelector('#content');
   let articlesBoxEl = document.querySelector('body > div > div > main > section');
   let createButtonEl = document.querySelector('body > div > div > aside > section:nth-child(1) > form > button');
   let archiveEl = document.querySelector('body > div > div > aside > section.archive-section > ul');

   createButtonEl.addEventListener('click', addArticle)
   function addArticle(e) {
      e.preventDefault();
      let articleEl = document.createElement('article');
      let h1El = document.createElement('h1');
      let pCategoryEl = document.createElement('p');
      let categoryTextEl = document.createTextNode('Category: ');
      let categoryEl = document.createElement('strong');
      let pCreatorEl = document.createElement('p');
      let pCreatorText = document.createTextNode('Creator: ');
      let creatorEl = document.createElement('strong');
      let pTextEl = document.createElement('p');

      categoryEl.textContent = categoryInputEl.value;
      creatorEl.textContent = authorInputEl.value;

      pCategoryEl.appendChild(categoryTextEl);
      pCategoryEl.appendChild(categoryEl);
      pCreatorEl.appendChild(pCreatorText);
      pCreatorEl.appendChild(creatorEl);

      let divEl = document.createElement('div');
      divEl.setAttribute('class', 'buttons');
      let buttonDeleteEl = document.createElement('button');
      let buttonArchiveEl = document.createElement('button');

      divEl.appendChild(buttonDeleteEl);
      divEl.appendChild(buttonArchiveEl);

      h1El.textContent = titleInputEl.value;
      pTextEl.textContent = contentInputEl.value;
      buttonDeleteEl.setAttribute('class', 'btn delete');
      buttonDeleteEl.textContent = 'Delete';
      buttonArchiveEl.setAttribute('class', 'btn archive');
      buttonArchiveEl.textContent = 'Archive';

      articleEl.appendChild(h1El);
      articleEl.appendChild(pCategoryEl);
      articleEl.appendChild(pCreatorEl);
      articleEl.appendChild(pTextEl);
      articleEl.appendChild(divEl);
      
      articlesBoxEl.appendChild(articleEl);

      buttonDeleteEl.addEventListener('click', deleteArticle);
      buttonArchiveEl.addEventListener('click', archiveArticle);
   }
   function deleteArticle(e) {
      e.target.parentNode.parentNode.remove();
   }
   function archiveArticle(e) {
      let h1 = e.target.parentNode.parentNode.firstChild.textContent;
      let liEl = document.createElement('li');
      liEl.textContent = h1;
      archiveEl.appendChild(liEl);
      let arrContent = [];
      for (const li of archiveEl.childNodes) {
         arrContent.push(li.textContent);
      }
      arrContent.sort((a, b) => a.localeCompare(b));
      e.target.parentNode.parentNode.remove();
      if (arrContent.length > 1) {
         while (archiveEl.firstChild) {
            archiveEl.firstChild.remove();
         }
         arrContent.forEach(liContent => {
            let li = document.createElement('li');
            li.textContent = liContent;
            if (liContent.includes('          ')) {
               
            }
            else{
               archiveEl.appendChild(li);
            }
         });
      }
   }
}
