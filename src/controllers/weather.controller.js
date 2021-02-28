import { getLocation } from '../services/GetWeather';
import { showToast } from '../services/UseToast';
import { complications } from '../utils/dom-selectors';

async function execute(local) {
  const data = await getLocation({ local });

  if (!data) {
    showToast({
      title: 'Oops!',
      description: `We couldn't find "${local}". Try another one.`,
    });

    return;
  }

  document.getElementById('city').innerText = local;
  complications.rain.current.innerHTML = `${data.weather.predictability}%`;
  complications.temp.current.innerHTML = `${parseInt(data.weather.the_temp)}º`;
  complications.temp.min.innerHTML = `${parseInt(data.weather.min_temp)}º`;
  complications.temp.max.innerHTML = `${parseInt(data.weather.max_temp)}º`;
  complications.weatherState.icon.innerHTML = `<svg>
    <use href="#${data.weather.weather_state_abbr}" />
  </svg>`;

  return new Date(data.time.replace(' ', 'T'));
}

export default execute;
