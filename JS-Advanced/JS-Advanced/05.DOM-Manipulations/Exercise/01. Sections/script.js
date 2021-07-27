function create(words) {
   let contentEl = document.getElementById('content');
   words.forEach(word => {
      let newDiv = document.createElement('div');
      newDiv.addEventListener('click', showText)
      let newText = document.createElement('p');
      newText.setAttribute('style', 'display: none')
      newText.textContent = word;
      newDiv.appendChild(newText);
      contentEl.appendChild(newDiv);
   });
   function showText(e) {
      console.log(e.currentTarget.children);
      e.currentTarget.firstChild.setAttribute('style', 'display: block');
   }
}