import { executeActivityRings } from './controllers/rings.controller';
import Clock from './classes/Clock';
import { executeViewport } from './controllers/viewport.controller';
import { executeModal } from './controllers/modal.controller';
import { executeTimer } from './controllers/timer.controller';
import './css/styles.scss';

const clock = new Clock();

clock.execute();

executeViewport();
executeActivityRings();
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
