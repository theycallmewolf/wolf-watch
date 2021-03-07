export default class Timer {
  constructor() {
    this.elements = {
      buttons: {
        increase: document.getElementById('add-minutes'),
        decrease: document.getElementById('remove-minutes'),
        toggleStart: document.getElementById('timer-start'),
        reset: document.getElementById('timer-reset'),
      },
      timer: {
        minutes: document.getElementById('timer-minutes'),
        seconds: document.getElementById('timer-seconds'),
        colon: document.getElementById('timer-colon'),
      },
      complication: document.getElementById('complication-timer'),
    };

    this.timerInSeconds = 25 * 60;
    this.isActive = false;
    this.isAnimating = false;
    this.interval = null;
  }

  pulseAnimation({ element }) {
    element.animate([{ opacity: 1 }, { opacity: 0.8 }], {
      duration: 1000,
      easing: 'ease-out',
      iterations: 1,
    });
  }

  renderTimeOnDisplay() {
    const minutes = Math.floor(this.timerInSeconds / 60);
    const seconds = String(Math.floor(this.timerInSeconds % 60)).padStart(
      2,
      '0',
    );
    this.elements.timer.minutes.innerText = minutes;
    this.elements.timer.seconds.innerText = seconds;
    this.elements.complication.innerText = `${minutes}: ${seconds}`;
  }

  renderButton() {
    this.elements.buttons.toggleStart.innerText = this.isActive
      ? 'stop'
      : 'start';
  }

  increase() {
    this.timerInSeconds += 5 * 60;
    if (this.timerInSeconds >= 60 * 60) {
      this.timerInSeconds = 60 * 60;
    }
    this.renderTimeOnDisplay();
  }

  decrease() {
    this.timerInSeconds -= 5 * 60;
    if (this.timerInSeconds <= 0) {
      this.timerInSeconds = 0;
    }
    this.renderTimeOnDisplay();
  }

  start() {
    this.interval = setInterval(() => {
      if (this.timerInSeconds > 0) {
        this.timerInSeconds--;
        this.renderTimeOnDisplay();
        this.elements.buttons.increase.disabled = true;
        this.elements.buttons.decrease.disabled = true;
        this.elements.buttons.reset.disabled = true;
        this.isActive = true;
        this.renderButton();
        this.pulseAnimation({
          element: this.elements.timer.colon,
        });
        this.pulseAnimation({
          element: this.elements.timer.seconds,
        });
        if (this.timerInSeconds % 60 === 0) {
          this.pulseAnimation({
            element: this.elements.timer.minutes,
          });
        }
      }
    }, 1000);
  }

  stop() {
    this.elements.buttons.increase.disabled = false;
    this.elements.buttons.decrease.disabled = false;
    this.elements.buttons.reset.disabled = false;
    clearInterval(this.interval);
    this.isActive = false;
    this.renderButton();
  }

  reset() {
    this.timerInSeconds = 25 * 60;
    this.renderTimeOnDisplay();
  }

  execute() {
    this.renderTimeOnDisplay();
    this.renderButton();
    this.elements.buttons.increase.onclick = () => this.increase();
    this.elements.buttons.decrease.onclick = () => this.decrease();
    this.elements.buttons.reset.onclick = () => this.reset();
    this.elements.buttons.toggleStart.onclick = () => {
      !this.isActive ? this.start() : this.stop();
    };
  }
}
