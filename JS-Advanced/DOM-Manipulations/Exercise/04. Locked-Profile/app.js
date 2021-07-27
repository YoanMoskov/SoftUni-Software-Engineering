function lockedProfile() {
    let profilesEl = document.querySelectorAll('#main > div');
    for (const profile of profilesEl) {
        profile.children[2].addEventListener('click', checkSelected);
        profile.children[4].addEventListener('click', checkSelected);
        profile.children[10].addEventListener('click', ifCheckedAction)
    }
    function checkSelected(e) {
        let lock = e.target.parentNode.children[2];
        let unlock = e.target.parentNode.children[4];
        if (lock === e.target) {
            lock.setAttribute('checked', '');
            unlock.removeAttribute('checked', '')
        }
        else if (unlock === e.target) {
            unlock.setAttribute('checked', '')
            lock.removeAttribute('checked', '');
        }
    }
    function ifCheckedAction(e) {
        let unlock = e.target.parentNode.children[4];
        let divEl = e.target.parentNode.children[9];
        if (unlock.hasAttribute('checked') && e.target.textContent == 'Show more') {
            divEl.setAttribute('style', 'display: block;')
            e.target.textContent = 'Hide it';
        }
        else if (unlock.hasAttribute('checked') && e.target.textContent == 'Hide it') {
            divEl.setAttribute('style', 'display: none;')
            e.target.textContent = 'Show more';
        }
    }
}