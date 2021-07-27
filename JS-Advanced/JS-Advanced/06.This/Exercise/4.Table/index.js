function solve(){
   let clickableEls = document.querySelectorAll('body > table > tbody > tr');
   for (const element of clickableEls) {
      element.addEventListener('click', changeBackgroundAction)
   }
   function changeBackgroundAction(e){
      if (e.currentTarget.hasAttribute('style', 'background: #413f5e')){
         e.currentTarget.removeAttribute('style');
      }
      else{
         for (const element of clickableEls) {
            element.removeAttribute('style');
         }
         e.currentTarget.setAttribute('style', 'background: #413f5e');
      }
   }
}
