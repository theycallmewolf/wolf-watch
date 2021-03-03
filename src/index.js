import { randomActivityRings } from './services/LoadActivityRings';
import { handleClock } from './controllers/clock.controller';
import { openModal } from './controllers/modal.controller';
import { handleViewport } from './controllers/viewport.controller';
import './css/styles.scss';

handleViewport();

handleClock();

randomActivityRings();

document
  .getElementById('bottom')
  .addEventListener('click', randomActivityRings);

// initial input focus
document.getElementById('location').focus();

document.getElementById('button-top').addEventListener('click', openModal);

// greetings
console.log(`

----------

Hi fellow dev
They Call Me Wolf

@ https://github.com/bruno-wolf

----------

`);
