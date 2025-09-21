


async function GetWeatherLocation(location) {
    try {
    const requst = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=QEQCK3U8BXDDJBMJ87JJY5NGW`);
    const requstJSON = await requst.json();
    const TempRightNow = requstJSON.currentConditions.temp;
    console.log(requstJSON);
    console.log(`The temp in ${location} right now is: ${((TempRightNow-32)/1.8).toFixed(1)}`);
    return {
      city: requstJSON.address,
      temperature: ((TempRightNow-32)/1.8).toFixed(1)
    };
    } catch (err) {
        alert('not a valid location');
        throw new (err);
    }
}


function RequestUserCity(city) {(async () => {
    const location = await GetWeatherLocation(`${city}`);
    console.log(location);
    const Div = document.querySelector('#output');
    
    Div.innerHTML = `${location.city}, ${location.temperature}°C`;
})()};


const input = document.querySelector('input');
const button = document.querySelector('.getTemp');
button.addEventListener('click', () => {
    if (input.value == `` || input.value == undefined) {return;};

RequestUserCity(input.value);

});