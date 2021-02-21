import { updateClock } from '../services/UpdateClock';

const execute = () => {
  setInterval(() => {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const weekday = time.getDay();
    const month = time.getDate();

    updateClock(hours, minutes, seconds, weekday, month);
  }, 1000);
};

export default execute;
