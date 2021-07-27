function stopwatch() {
    let timeEl = document.querySelector('#time');
    let startButtonEl = document.querySelector('#startBtn');
    let stopButtonEl = document.querySelector('#stopBtn');

    let seconds = 0;
    let minutes = 0;

    let timeout;

    startButtonEl.addEventListener('click', startTimer)
    stopButtonEl.addEventListener('click', stopTimer)

    function timer() {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
        timeEl.textContent = (`${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`);
    }

    function startTimer(e) {
        timeEl.textContent = '00:00';
        startButtonEl.disabled = true;
        stopButtonEl.disabled = false;
        timeout = setInterval(timer, 1000);
    }

    function stopTimer(e) {
        startButtonEl.disabled = false;
        stopButtonEl.disabled = true;
        clearInterval(timeout);
        seconds = 0;
        minutes = 0;
    }
}