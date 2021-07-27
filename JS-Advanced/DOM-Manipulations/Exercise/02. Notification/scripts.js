function notify(message) {
    let notificationEl = document.querySelector('#notification');
    notificationEl.innerHTML = message;
    
    notificationEl.setAttribute('style', 'display: block');
    setTimeout(function(){notificationEl.style.display = 'none'}, 2000);
}