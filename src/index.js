import { executeActivityRings } from './controllers/rings.controller';
import { executeClock } from './controllers/clock.controller';
import { executeViewport } from './controllers/viewport.controller';
import { executeModal } from './controllers/modal.controller';
import { executeTimer } from './controllers/timer.controller';
import './css/styles.scss';

executeViewport();
executeActivityRings();
executeClock();
executeModal();
executeTimer();

// greetings
console.log(`

----------

Hi fellow dev
They Call Me Wolf

@ https://github.com/bruno-wolf

----------

`);
