function attachEvents() {
    const inputEl = document.querySelector('#location');
    const getBttnEl = document.querySelector('#submit');
    const forecastEl = document.querySelector('#forecast');
    const forecastCurrEl = document.querySelector('#current');
    const forecast3Day = document.querySelector('#upcoming');
    let validNames = ['London', 'New York', 'Barcelona'];

    getBttnEl.addEventListener('click', getWeather)

    async function getWeather() {
        if (checkIfValid()) {
            forecastEl.style.display = '';
            let urlBase = `https://judgetests.firebaseio.com/locations.json`;
            let inputText = inputEl.value;
            let code = '';

            let weatherResponse = await fetch(urlBase);
            let weatherPlaces = await weatherResponse.json();

            weatherPlaces.forEach(x => {
                if (x.name === inputText) {
                    code = x.code;
                }
            });

            let urlCurrConditions = `https://judgetests.firebaseio.com/forecast/today/${code}.json`;
            let url3DayForecast = `https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`;

            try {
                let currConditionsResponse = await fetch(urlCurrConditions);
                let threeDayConditionsResponse = await fetch(url3DayForecast);

                let currConditions = await currConditionsResponse.json();
                let threeDayConditions = await threeDayConditionsResponse.json();

                await updateCurrConditions(currConditions, 'condition');
                await updateUpcomingConditions(threeDayConditions, 'upcoming');
            } catch (err) {
                alert('Oops, something went wrong.')
            }
        } else {
            alert('Sorry, the given location is invalid.');
        }
    }

    async function updateCurrConditions(currConditions) {
        let data = currConditions.forecast;

        let divEl = document.createElement('div');
        let spanContainer = document.createElement('span');
        let spanSymbol = document.createElement('span');
        let spanCity = document.createElement('span');
        let spanDegreesMinMax = document.createElement('span');
        let spanCondition = document.createElement('span');

        divEl.setAttribute('class', 'forecasts');
        spanContainer.setAttribute('class', 'condition');

        spanSymbol.setAttribute('class', 'condition symbol');
        spanSymbol.textContent = returnType(data);

        spanCity.setAttribute('class', 'forecast-data');
        spanCity.textContent = currConditions.name;

        spanDegreesMinMax.setAttribute('class', 'forecast-data');
        spanDegreesMinMax.textContent = `${data.low}${String.fromCharCode(176)}${data.high}${String.fromCharCode(176)}`;

        spanCondition.setAttribute('class', 'forecast-data');
        spanCondition.textContent = data.condition;

        divEl.appendChild(spanSymbol);
        spanContainer.appendChild(spanCity);
        spanContainer.appendChild(spanDegreesMinMax);
        spanContainer.appendChild(spanCondition);
        divEl.appendChild(spanContainer);
        forecastCurrEl.appendChild(divEl);
    }

    async function updateUpcomingConditions(threeDayConditions) {
        let data = threeDayConditions.forecast;
        let divEl = document.createElement('div');
        divEl.setAttribute('class', 'forecast-info');
        data.map(forecast => {

            let spanContainer = document.createElement('span');
            let spanSymbol = document.createElement('span');
            let spanDegreesMinMax = document.createElement('span');
            let spanCondition = document.createElement('span');

            spanContainer.setAttribute('class', 'upcoming');

            spanSymbol.setAttribute('class', 'symbol');
            spanSymbol.textContent = returnType(forecast);

            spanDegreesMinMax.setAttribute('class', 'forecast-data');
            spanDegreesMinMax.textContent = `${forecast.low}${String.fromCharCode(176)}${forecast.high}${String.fromCharCode(176)}`;

            spanCondition.setAttribute('class', 'forecast-data');
            spanCondition.textContent = forecast.condition;

            spanContainer.appendChild(spanSymbol);
            spanContainer.appendChild(spanDegreesMinMax);
            spanContainer.appendChild(spanCondition);
            divEl.appendChild(spanContainer);
        });
        forecast3Day.appendChild(divEl);
    }

    function returnType(data) {
        let symbol = '';
        if (data.condition === 'Sunny') {
            symbol = '\u2600';
        } else if (data.condition === 'Partly sunny') {
            symbol = '\u26C5';
        } else if (data.condition === 'Overcast') {
            symbol = '\u2601';
        } else if (data.condition === 'Rain') {
            symbol = '\u2614';
        }
        return symbol;
    }

    function checkIfValid() {
        let isValid = true;
        if (!validNames.includes(inputEl.value)) {
            isValid = false;
        }
        return isValid;
    }
}
attachEvents();