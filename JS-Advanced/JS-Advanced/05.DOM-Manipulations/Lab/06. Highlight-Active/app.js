function focus() {
    let boxesEl = document.querySelectorAll('body > div > div > input');
    for (const box of boxesEl) {
        box.addEventListener('blur', blur);
        box.addEventListener('focus', focus);
    }
    function focus(e) {
        let parent = e.target.parentNode;
       parent.classList.add("focused");
    }
    function blur(e) {
        let parent = e.target.parentNode;
       parent.classList.remove("focused");
    }
}