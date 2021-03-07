export default class Timer {
  constructor() {
    this.elements = {
      buttons: {
        increase: document.getElementById('add-minutes'),
        decrease: document.getElementById('remove-minutes'),
        start: document.getElementById('timer-start'),
      },
      timer: {
        minutes: document.getElementById('timer-minutes'),
        seconds: document.getElementById('timer-seconds'),
      },
      complication: document.getElementById('complication-timer'),
    };

    this.timerInSeconds = 25 * 60;
  }

  renderTimeOnDisplay() {
    const minutes = this.timerInSeconds / 60;
    let seconds = this.timerInSeconds % 60;
    seconds = String(seconds).padStart(2, '0');
    this.elements.timer.minutes.innerText = minutes;
    this.elements.timer.seconds.innerText = seconds;
    this.elements.complication.innerText = `${minutes}: ${seconds}`;
  }

  increase() {
    if (this.timerInSeconds >= 60 * 60) {
      return;
    }
    this.timerInSeconds += 5 * 60;
    this.renderTimeOnDisplay();
  }

  decrease() {
    if (this.timerInSeconds <= 0) {
      return;
    }
    this.timerInSeconds -= 5 * 60;
    this.renderTimeOnDisplay();
  }

  start() {}

  stop() {}

  reset() {}

  execute() {
    this.renderTimeOnDisplay();
    this.elements.buttons.increase.onclick = () => this.increase();
    this.elements.buttons.decrease.onclick = () => this.decrease();
    this.elements.buttons.start.onclick = () => this.start();
  }
}
