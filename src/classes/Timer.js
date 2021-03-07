export default class Timer {
  constructor() {
    this.elements = {
      buttons: {
        increase: document.getElementById('add-minutes'),
        decrease: document.getElementById('remove-minutes'),
        start: document.getElementById('timer-start'),
      },
      timer: document.getElementById('timer-minutes'),
      complication: document.getElementById('complication-timer'),
    };

    this.timerMinutes = 25;
  }

  increase() {
    if (this.timerMinutes >= 60) {
      return;
    }
    this.timerMinutes += 5;
    this.elements.timer.innerText = this.timerMinutes;
  }

  decrease() {
    if (this.timerMinutes <= 0) {
      return;
    }
    this.timerMinutes -= 5;
    this.elements.timer.innerText = this.timerMinutes;
  }

  start() {}

  stop() {}

  reset() {}

  execute() {
    this.elements.buttons.increase.onclick = () => this.increase();
    this.elements.buttons.decrease.onclick = () => this.decrease();
  }
}
