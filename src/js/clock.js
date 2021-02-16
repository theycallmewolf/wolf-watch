import { weekDays } from './utils/weekdays';
//
// handling date
export const updateClock = (hours, minutes, seconds, weekday, month) => {
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
};
