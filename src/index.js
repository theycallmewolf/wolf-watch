import Clock from './classes/Clock';
import Modal from './classes/Modal';
import Rings from './classes/Rings';
import Window from './classes/Window';

import { executeTimer } from './controllers/timer.controller';
import './css/styles.scss';

const window = new Window();
const clock = new Clock();
const modal = new Modal();
const rings = new Rings();

window.execute();
clock.execute();
modal.execute();
rings.execute();

executeTimer();

// greetings
console.log(`

----------

Hi fellow dev
They Call Me Wolf

@ https://github.com/bruno-wolf

----------

`);
