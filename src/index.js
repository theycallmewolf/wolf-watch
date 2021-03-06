import { executeActivityRings } from './controllers/rings.controller';
import Clock from './classes/Clock';
import Modal from './classes/Modal';
import { executeViewport } from './controllers/viewport.controller';
import { executeTimer } from './controllers/timer.controller';
import './css/styles.scss';

const clock = new Clock();
const modal = new Modal();

clock.execute();
modal.execute();

executeViewport();
executeActivityRings();
executeTimer();

// greetings
console.log(`

----------

Hi fellow dev
They Call Me Wolf

@ https://github.com/bruno-wolf

----------

`);
