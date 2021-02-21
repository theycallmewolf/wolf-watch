import { getWeather, getLocation } from '../services/GetWeather';
import { showToast } from '../services/UseToast';

async function execute(local) {
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

  complications.rain.current.innerHTML = `${weatherReport.predictability}%`;
  complications.temp.current.innerHTML = `${parseInt(weatherReport.the_temp)}º`;
  complications.temp.min.innerHTML = `${parseInt(weatherReport.min_temp)}º`;
  complications.temp.max.innerHTML = `${parseInt(weatherReport.max_temp)}º`;
}

export default execute;
