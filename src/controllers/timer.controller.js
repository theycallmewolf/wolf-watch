const elements = {
  buttons: {
    addMinutes: document.getElementById('add-minutes'),
    removeMinutes: document.getElementById('remove-minutes'),
    start: document.getElementById('timer-start'),
  },
  timer: {
    minutes: document.getElementById('timer-minutes'),
    seconds: document.getElementById('timer-seconds'),
  },
  complication: document.getElementById('complication-timer'),
};

let timerMinutes = 25;

const increaseMinutes = () => {
  if (timerMinutes >= 60) {
    return;
  }
  timerMinutes += 5;
  elements.timer.minutes.innerText = timerMinutes;
};

const decreaseMinutes = () => {
  if (timerMinutes <= 0) {
    return;
  }
  timerMinutes -= 5;
  elements.timer.minutes.innerText = timerMinutes;
};

export const executeTimer = () => {
  console.log({ timerMinutes });
  elements.buttons.addMinutes.addEventListener('click', increaseMinutes);
  elements.buttons.removeMinutes.addEventListener('click', decreaseMinutes);
  // elements.buttons.start.addEventListener('click', startTimer);
};
