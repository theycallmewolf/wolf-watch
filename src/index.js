import { handleActivityRings } from './controllers/rings.controller';
import { handleClock } from './controllers/clock.controller';
import { openModal } from './controllers/modal.controller';
import { handleViewport } from './controllers/viewport.controller';
import './css/styles.scss';

handleViewport();
handleActivityRings();
handleClock();

document.getElementById('button-top').addEventListener('click', openModal);

// greetings
console.log(`

----------

Hi fellow dev
They Call Me Wolf

@ https://github.com/bruno-wolf

----------

`);
