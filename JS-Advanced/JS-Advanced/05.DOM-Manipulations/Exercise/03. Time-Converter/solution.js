function attachEventsListeners() {
    let allButtonEl = document.querySelectorAll('body > main > div')
    let daysInputEl = document.querySelector('#days');
    let hoursInputEl = document.querySelector('#hours');
    let minutesInputEl = document.querySelector('#minutes');
    let secondsInputEl = document.querySelector('#seconds');


    for (const element of allButtonEl) {
        console.log(element);
        let button = element.lastChild.previousSibling;
        button.addEventListener('click', convert);
    }
    function convert(e) {
        let inputEl = findChangedEl();
        if (inputEl.id == 'seconds') {
            seconds = inputEl.value;
            [minutesInputEl.value, hoursInputEl.value, daysInputEl.value] = timeConvertionSeconds(seconds);
        }
        else if (inputEl.id == 'minutes') {
            minutes = inputEl.value;
            [secondsInputEl.value, hoursInputEl.value, daysInputEl.value] = timeConvertionMinutes(minutes);
        }
        else if (inputEl.id == 'hours') {
            hours = inputEl.value;
            [secondsInputEl.value, minutesInputEl.value, daysInputEl.value] = timeConvertionHours(hours);
        }
        else if (inputEl.id == 'days') {
            days = inputEl.value;
            [secondsInputEl.value, minutesInputEl.value, hoursInputEl.value] = timeConvertionDays(days);
        }
    }
    function timeConvertionSeconds(seconds) {
        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;
        return [minutes, hours, days];
    }
    function timeConvertionMinutes(minutes) {
        let seconds = minutes * 60;
        let hours = minutes / 60;
        let days = hours / 24;
        return [seconds, hours, days];
    }
    function timeConvertionHours(hours) {
        let minutes = hours * 60;
        let seconds = minutes * 60;
        let days = hours / 24;
        return [seconds, minutes, days];
    }
    function timeConvertionDays(days) {
        let hours = days * 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;
        return [seconds, minutes, hours];
    }
    function findChangedEl() {
        for (const element of allButtonEl) {
            let inputEl = element.childNodes[3];
            if (inputEl.value != '') {
                return inputEl;
            }
        }
    }
}

