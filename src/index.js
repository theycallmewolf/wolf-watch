import { setViewportHeightUnit } from './js/viewport';
import { fadeIn } from './js/fade-in';
import { updateClock } from './js/clock';
import { randomActivityRings } from './js/rings';

// viewport height set
setViewportHeightUnit();
window.addEventListener('resize', setViewportHeightUnit);

// initial watch fade-in
fadeIn();

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

// rings
randomActivityRings();

const bottomComplicationButton = document.getElementById('bottom');
bottomComplicationButton.addEventListener('click', () => {
  randomActivityRings();
});
