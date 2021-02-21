import { getWeather, getLocation } from '../services/GetWeather';
import { showToast } from '../services/UseToast';
import { complications } from '../utils/dom-selectors';

async function execute(local) {
  const locationData = await getLocation({ local });

  if (!locationData) {
    showToast({
      title: 'Oops!',
      description: `We couldn't find "${local}". Try another one.`,
    });

    return;
  }

  const weatherReport = await getWeather({ woeid: locationData.woeid });

  document.getElementById('city').innerText = local;
  complications.rain.current.innerHTML = `${weatherReport.predictability}%`;
  complications.temp.current.innerHTML = `${parseInt(weatherReport.the_temp)}º`;
  complications.temp.min.innerHTML = `${parseInt(weatherReport.min_temp)}º`;
  complications.temp.max.innerHTML = `${parseInt(weatherReport.max_temp)}º`;
}

export default execute;
