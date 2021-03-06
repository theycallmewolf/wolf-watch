import { setClock } from '../services/setClock';
import { setWeather } from '../services/setWeather';
import { getCityNameByIP } from '../services/getCityNameByIP';
import { getApiData } from '../services/getApiData';
import { weekDays } from '../utils/memo';
import { closeModal } from '../controllers/modal.controller';
import { showToast } from '../services/UseToast';

let currentCity;
let currentTime = {
  hours: null,
  minutes: null,
  seconds: null,
  weekday: null,
  dayOfTheMonth: null,
};

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

const setTime = ({ time }) => {
  const date = new Date(time.replace(' ', 'T'));
  currentTime.hours = date.getHours();
  currentTime.minutes = date.getMinutes();
  currentTime.seconds = new Date().getSeconds();
  currentTime.weekday = weekDays[date.getDay()];
  currentTime.dayOfTheMonth = date.getDate();
};

const updateClock = async () => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

const updateClockOnWindowFocus = () => {
  let hasFocus = true;
  window.onfocus = () => {
    if (!hasFocus) {
      updateClock();
      hasFocus = true;
    }
  };

  window.onblur = () => (hasFocus = false);
};

export const handleClock = async () => {
  currentCity = await getCityNameByIP();
  updateClock();

  document.getElementById('btn').addEventListener('click', () => {
    let inputValue = document.getElementById('location').value;

    if (inputValue) {
      currentCity = inputValue;
      updateClock();
    } else {
      showToast({
        title: `We can't explore the unknown!`,
        description: 'Please add a city before clicking on the button',
      });
    }
  });

  refreshClock();
  updateClockOnWindowFocus();
};
