import { handleActivityRings } from './controllers/rings.controller';
import { handleClock } from './controllers/clock.controller';
import { handleViewport } from './controllers/viewport.controller';
import { handleModal } from './controllers/modal.controller';
import './css/styles.scss';

handleViewport();
handleActivityRings();
handleClock();
handleModal();

// greetings
console.log(`

----------

Hi fellow dev
They Call Me Wolf

@ https://github.com/bruno-wolf

----------

`);
