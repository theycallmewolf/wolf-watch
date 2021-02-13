//
function updateClock(hours, minutes, seconds, weekday, month) {
  const weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const hourHand = document.getElementById('hour');
  const minuteHand = document.getElementById('minute');
  const secondHand = document.getElementById('second');
  const weekdayDisplay = document.getElementById('weekday');
  const dayDisplay = document.getElementById('day');

  let m = minutes;
  let h = hours;
  let s = seconds;
  let w = weekDays[weekday];
  let M = month;

  h > 12 ? (h = h - 12) : h;
  h = h * 30;
  m = m * 6;
  s = s * 6;

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

setTimeout(() => {
  document.getElementById('watch').classList.add('show');
}, 1000);
