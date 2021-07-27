function solve() {
   let player1CardEls = document.querySelectorAll('#player1Div > img');
   let player2CardEls = document.querySelectorAll('#player2Div > img');
   let resultEl = document.querySelectorAll('#result > span');
   let historyEl = document.querySelector('#history');

   for (const card of player1CardEls) {
      card.addEventListener('click', actionP1)
   }
   for (const card of player2CardEls) {
      card.addEventListener('click', actionP2)
   }

   function actionP1(e) {
      turnCard(e);
      let card = e.target;
      resultEl[0].textContent = card.name;
      setBorder(card);
   }
   function actionP2(e) {
      turnCard(e);
      let card = e.target;
      resultEl[2].textContent = card.name;
      setBorder(card);
   }

   function addToHistory(name1, name2) {
      let result = `[${name1} vs ${name2}] `;
      historyEl.textContent += result;
   }
   function clearSpan() {
      resultEl[0].textContent = '';
      resultEl[2].textContent = '';
   }

   function setBorder(card) {
      if (resultEl[0].textContent !== '' && resultEl[2].textContent !== '') {
         if (card.parentNode.id == 'player1Div') {
            if (Number(card.name) > Number(resultEl[2].textContent)) {
               card.setAttribute('style', 'border: 2px solid green;');
               for (const losingCard of player2CardEls) {
                  if (losingCard.name == resultEl[2].textContent) {
                     losingCard.setAttribute('style', 'border: 2px solid red;')
                  }
               }
            }
            else {
               card.setAttribute('style', 'border: 2px solid red;')
               for (const winningCard of player2CardEls) {
                  if (winningCard.name == resultEl[2].textContent) {
                     winningCard.setAttribute('style', 'border: 2px solid green;')
                  }
               }
            }
         }
         else if (card.parentNode.id == 'player2Div') {
            if (Number(card.name) > Number(resultEl[0].textContent)) {
               card.setAttribute('style', 'border: 2px solid green;');
               for (const losingCard of player1CardEls) {
                  if (losingCard.name == resultEl[0].textContent) {
                     losingCard.setAttribute('style', 'border: 2px solid red;')
                  }
               }
            }
            else {
               card.setAttribute('style', 'border: 2px solid red;')
               for (const winningCard of player1CardEls) {
                  if (winningCard.name == resultEl[0].textContent) {
                     winningCard.setAttribute('style', 'border: 2px solid green;')
                  }
               }
            }
         }
         addToHistory(resultEl[0].textContent, resultEl[2].textContent);
         clearSpan();
      }
   }
   function turnCard(e) {
      e.target.setAttribute('src', 'images/whiteCard.jpg');
   }
}

