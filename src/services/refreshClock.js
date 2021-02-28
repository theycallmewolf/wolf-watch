import { getApiData } from './getApiData';

export const refreshClock = () => {
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
