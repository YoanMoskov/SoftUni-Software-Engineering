function solve() {
   let sendButtonEl = document.querySelector('#send');
   let chatCurrMsgEl = document.querySelector('#chat_input')
   let chatMessagesEl = document.querySelector('#chat_messages');
   let lastMessageEl = document.querySelector('#chat_messages > div.message.my-message')

   sendButtonEl.addEventListener('click', actionOnClick)

   function actionOnClick(e) {
      let newMessage = lastMessageEl.cloneNode(false);
      newMessage.textContent = chatCurrMsgEl.value;
      chatMessagesEl.appendChild(newMessage);
      chatCurrMsgEl.value = '';
   }
} 


