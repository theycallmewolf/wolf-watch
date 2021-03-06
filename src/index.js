import Clock from './classes/Clock';
import Modal from './classes/Modal';
import Rings from './classes/Rings';

import { executeViewport } from './controllers/viewport.controller';
import { executeTimer } from './controllers/timer.controller';
import './css/styles.scss';

const clock = new Clock();
const modal = new Modal();
const rings = new Rings();

clock.execute();
modal.execute();
rings.execute();

executeViewport();
executeTimer();

// greetings
console.log(`

----------

Hi fellow dev
They Call Me Wolf

@ https://github.com/bruno-wolf

----------

`);
