import { executeActivityRings } from './controllers/rings.controller';
import { executeClock } from './controllers/clock.controller';
import { executeViewport } from './controllers/viewport.controller';
import { executeModal } from './controllers/modal.controller';
import './css/styles.scss';

executeViewport();
executeActivityRings();
executeClock();
executeModal();

// greetings
console.log(`

----------

Hi fellow dev
They Call Me Wolf

@ https://github.com/bruno-wolf

----------

`);
