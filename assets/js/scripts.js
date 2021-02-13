//
function updateClock(hours, minutes, seconds) {
  const hourHand = document.getElementById('hour');
  const minuteHand = document.getElementById('minute');
  const secondHand = document.getElementById('second');
  let m = minutes;
  let h = hours;
  let s = seconds;

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
}

setInterval(() => {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  updateClock(hours, minutes, seconds);
}, 1000);

const watch = document.getElementById('watch');
setTimeout(() => {
  watch.classList.add('show');
}, 1000);
