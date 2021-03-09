import './css/styles.scss';
import appleTouchIcon from './img/icons/apple-touch-icon.png';
import favicon16 from './img/icons/favicon-16x16.png';
import favicon32 from './img/icons/favicon-32x32.png';
import safariPinnedTab from './img/icons/safari-pinned-tab.svg';

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

document.getElementById('appleTouchIcon').href = appleTouchIcon;
document.getElementById('favicon32').href = favicon32;
document.getElementById('favicon16').href = favicon16;
document.getElementById('safariPinnedTab').href = safariPinnedTab;

// greetings
console.log(`

----------

Hi fellow dev
They Call Me Wolf

@ https://github.com/bruno-wolf

----------

`);
