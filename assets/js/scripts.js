//
// initial fade-in
setTimeout(() => {
  document.getElementById('watch').classList.add('show');
}, 1000);

//
// handling date
function updateClock(hours, minutes, seconds, weekday, month) {
  const weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const hourHand = document.getElementById('hour');
  const minuteHand = document.getElementById('minute');
  const secondHand = document.getElementById('second');
  const weekdayDisplay = document.getElementById('weekday');
  const dayDisplay = document.getElementById('day');

  let s = seconds;
  let m = minutes;
  let h = hours;
  let w = weekDays[weekday];
  let M = month;

  s = s * 6;
  m = m * 6;
  h > 12 ? (h = h - 12) : h;
  h = h * 30;

  // fine-tunning hour hand
  switch (true) {
    case m > 330:
      h += 27.5;
      break;

    case m > 300:
      h += 25;
      break;

    case m > 270:
      h += 22.5;
      break;

    case m > 240:
      h += 20;
      break;

    case m > 210:
      h += 17.5;
      break;

    case m > 180:
      h += 15;
      break;

    case m > 150:
      h += 12.5;
      break;

    case m > 120:
      h += 10;
      break;

    case m > 90:
      h += 7.5;
      break;

    case m > 60:
      h += 5;
      break;

    case m > 30:
      h += 2.5;
      break;

    default:
      h;
      break;
  }

  hourHand.setAttribute(
    'style',
    `transform: translate(-50%, -50%) rotate(${h}deg)`,
  );

  minuteHand.setAttribute(
    'style',
    `transform: translate(-50%, -50%) rotate(${m}deg)`,
  );

  secondHand.setAttribute(
    'style',
    `transform: translate(-50%, -50%) rotate(${s}deg)`,
  );

  weekdayDisplay.innerHTML = w;
  dayDisplay.innerHTML = M;
}

setInterval(() => {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const weekday = time.getDay();
  const month = time.getDate();

  updateClock(hours, minutes, seconds, weekday, month);
}, 1000);

//
// handling Activity Rings
function randomActivityRings() {
  const moveRing = document.querySelector('.move-ring .completed');
  const exerciseRing = document.querySelector('.exercise-ring .completed');
  const standRing = document.querySelector('.stand-ring .completed');

  const random1 = getRandomInt(80);
  const random2 = getRandomInt(random1);
  const random3 = getRandomInt(90);

  moveRing.setAttribute('stroke-dasharray', `${random1}, 100`);
  exerciseRing.setAttribute('stroke-dasharray', `${random2}, 100`);
  standRing.setAttribute('stroke-dasharray', `${random3}, 100`);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const bottomComplicationButton = document.getElementById('bottom');

randomActivityRings();

bottomComplicationButton.addEventListener('click', () => {
  randomActivityRings();
});
