function attachGradientEvents() {
    let gradientEl = document.querySelector('#gradient');
    let resultEl = document.querySelector('#result');

    gradientEl.addEventListener('mousemove', register)
    gradientEl.addEventListener('mouseout', registerOne)
    function register(e) {
        let power = e.offsetX / (e.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        resultEl.textContent = `${power}%`;
    }
    function registerOne(e) {
        resultEl.textContent = '';
    }
}