import { setClock } from '../services/setClock';
import { setWeather } from '../services/setWeather';
import { getCityNameByIP } from '../services/getCityNameByIP';
import { getApiData } from '../services/getApiData';
import { weekDays } from '../utils/memo';
import { closeModal } from '../controllers/modal.controller';

export const handleClock = () => {
  let currentCity;
  let currentTime = {
    hours: null,
    minutes: null,
    seconds: null,
    weekday: null,
    dayOfTheMonth: null,
  };

  const setTime = ({ time }) => {
    const date = new Date(time.replace(' ', 'T'));
    currentTime.hours = date.getHours();
    currentTime.minutes = date.getMinutes();
    currentTime.seconds = new Date().getSeconds();
    currentTime.weekday = weekDays[date.getDay()];
    currentTime.dayOfTheMonth = date.getDate();
  };

  const getClientCity = async () => {
    currentCity = await getCityNameByIP();
    try {
      const { location, time, weather } = await getApiData({
        city: currentCity,
      });

      console.log({ location, time, weather });
      document.getElementById('city').innerText = currentCity;
      setTime({ time });
      setClock({
        hours: currentTime.hours,
        minutes: currentTime.minutes,
        seconds: currentTime.seconds,
        weekDays: currentTime.weekday,
        dayOfTheMonth: currentTime.dayOfTheMonth,
      });
      setWeather({ weather });
    } catch (error) {
      console.log(error);
    }
  };
  getClientCity();

  document.getElementById('btn').addEventListener('click', async () => {
    currentCity = document.getElementById('location').value;
    const { location, time, weather } = await getApiData({
      city: currentCity,
    });
    document.getElementById('city').innerText = location.title;
    setTime({ time });
    setClock({
      hours: currentTime.hours,
      minutes: currentTime.minutes,
      seconds: currentTime.seconds,
      weekDays: currentTime.weekday,
      dayOfTheMonth: currentTime.dayOfTheMonth,
    });
    setWeather({ weather });
    closeModal();
  });

  const refreshClock = () => {
    setInterval(async () => {
      if (currentTime.seconds < 59) {
        currentTime.seconds++;
      } else {
        currentTime.seconds = 0;
        if (currentTime.minutes < 59) {
          currentTime.minutes++;
        } else {
          currentTime.minutes = 0;
          if (currentTime.hours < 23) {
            currentTime.hours++;
          } else {
            currentTime.hours = 0;
            const { time } = await getApiData({ city: currentCity });
            setTime({ time });
          }
        }
      }
      setClock({
        hours: currentTime.hours,
        minutes: currentTime.minutes,
        seconds: currentTime.seconds,
        weekDays: currentTime.weekday,
        dayOfTheMonth: currentTime.dayOfTheMonth,
      });
    }, 1000);
  };
  refreshClock();
};
