import { setViewportHeightUnit } from './utils/viewport';
import { randomActivityRings } from './services/LoadActivityRings';
import handleClock from './controllers/clock.controller';
import handleWeather from './controllers/weather.controller';
import handleClientLocation from './controllers/location.controller';
import './css/styles.scss';

// viewport height set
setViewportHeightUnit();
window.addEventListener('resize', setViewportHeightUnit);

// clock
handleClock();

// rings
randomActivityRings();

document
  .getElementById('bottom')
  .addEventListener('click', randomActivityRings);

// weather
document
  .getElementById('btn')
  .addEventListener('click', () =>
    handleWeather(document.getElementById('location').value),
  );

// location
handleClientLocation();

// initial input focus
document.getElementById('location').focus();

// greetings
console.log(`

----------

Hi fellow dev
They Call Me Wolf

@ https://github.com/bruno-wolf

----------

`);
