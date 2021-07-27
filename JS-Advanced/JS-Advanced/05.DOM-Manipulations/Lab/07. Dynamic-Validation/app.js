function validate() {
    let emailInputEl = document.querySelector('#email');
    emailInputEl.addEventListener('change', onChange)

    function onChange(e) {
        if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))*$/.test(emailInputEl.value)) {
            e.target.setAttribute('class', 'clear');
        }
        else{
            e.target.className = 'error';
        }
    }
}