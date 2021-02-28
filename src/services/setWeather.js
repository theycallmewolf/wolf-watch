import { complications } from '../utils/memo';

export const setWeather = ({ weather }) => {
  complications.rain.current.innerHTML = `${weather.predictability}%`;
  complications.temp.current.innerHTML = `${parseInt(weather.the_temp)}º`;
  complications.temp.min.innerHTML = `${parseInt(weather.min_temp)}º`;
  complications.temp.max.innerHTML = `${parseInt(weather.max_temp)}º`;
  complications.weatherState.icon.innerHTML = `<svg>
    <use href="#${weather.weather_state_abbr}" />
  </svg>`;
};
