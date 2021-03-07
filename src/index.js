import './css/styles.scss';
import Clock from './classes/Clock';
import Modal from './classes/Modal';
import Rings from './classes/Rings';
import Window from './classes/Window';
import Timer from './classes/Timer';

const window = new Window();
const clock = new Clock();
const modal = new Modal();
const rings = new Rings();
const timer = new Timer();

window.execute();
clock.execute();
modal.execute();
rings.execute();
timer.execute();

// greetings
console.log(`

----------

Hi fellow dev
They Call Me Wolf

@ https://github.com/bruno-wolf

----------

`);
