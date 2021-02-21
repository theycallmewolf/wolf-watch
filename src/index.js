import './css/styles.scss';
import { setViewportHeightUnit } from './utils/viewport';
import { updateClock } from './services/UpdateClock';
import { randomActivityRings } from './services/LoadActivityRings';
import { getWeather, getLocation } from './services/GetWeather';
import { getLocationByID } from './services/GetLocationByID';
import { showToast } from './services/UseToast';

//
// viewport height set
setViewportHeightUnit();
window.addEventListener('resize', setViewportHeightUnit);

//
// clock
setInterval(() => {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const weekday = time.getDay();
  const month = time.getDate();

  updateClock(hours, minutes, seconds, weekday, month);
}, 1000);

//
// rings
randomActivityRings();

document
  .getElementById('bottom')
  .addEventListener('click', randomActivityRings);

//
// weather
const searchField = document.getElementById('location');

async function handleWeather(local) {
  const complications = {
    rain: {
      element: document.getElementById('top-left'),
      current: document.querySelector('#top-left .value-xs'),
    },
    temp: {
      element: document.getElementById('top-right'),
      current: document.querySelector('#top-right .value-lg'),
      min: document.querySelectorAll('#top-right .value-xs')[0],
      max: document.querySelectorAll('#top-right .value-xs')[1],
    },
  };

  const locationData = await getLocation({ local });
  if (!locationData) {
    showToast({
      title: 'Oops!',
      description: `We couldn't find "${local}". Try another one.`,
    });

    return;
  }

  const weatherReport = await getWeather({ woeid: locationData.woeid });

  // dev
  console.log({ weatherReport });

  complications.rain.current.innerHTML = `${weatherReport.predictability}%`;
  complications.temp.current.innerHTML = `${parseInt(weatherReport.the_temp)}º`;
  complications.temp.min.innerHTML = `${parseInt(weatherReport.min_temp)}º`;
  complications.temp.max.innerHTML = `${parseInt(weatherReport.max_temp)}º`;
}

document
  .getElementById('btn')
  .addEventListener('click', () => handleWeather(searchField.value));

const handleClientLocation = async () => {
  const location = await getLocationByID();
  handleWeather(location.city);
};

handleClientLocation();

//
//
//
console.log(`

----------

Hi fellow dev
They Call Me Wolf

@ https://github.com/bruno-wolf

----------

`);
