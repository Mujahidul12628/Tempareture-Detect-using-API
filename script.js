const API_KEY = `e69f72450ea993ae048899c7f86212ea`;

const searchTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTempareture(data));
}

const displayTempareture = data => {

    // const t = document.getElementById('temperature')
    // t.innerText = data.main.temp;
    // const city = document.getElementById('city')
    // city.innerText = data.name;
    const item = document.getElementById('temperature')
    item.innerHTML = `
            <h1 id="city">${data.name}</h1>
            <h3><span id="temperature">${data.main.temp}</span>&deg;C</h3>
    `;
    console.log(data.main.temp);

}

searchTemperature('dhaka');
