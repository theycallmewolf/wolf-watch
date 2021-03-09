export default class Timer {
  constructor() {
    this.DOM = {
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
      complication: {
        timer: document.getElementById('complication-timer'),
        graph: document.querySelector('#bottom-left .completed'),
      },
    };

    this.timerInSeconds = 25 * 60;
    this.timerStartValueInSeconds = 0;
    this.isActive = false;
    this.isAnimating = false;
    this.interval = null;
    this.onblurDate;
    this.onFocusDate;
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
    this.DOM.timer.minutes.innerText = minutes;
    this.DOM.timer.seconds.innerText = seconds;
    this.DOM.complication.timer.innerText = `${minutes}:${seconds}`;
  }

  renderButton() {
    this.DOM.buttons.toggleStart.innerText = this.isActive ? 'stop' : 'start';
  }

  renderGraph() {
    const value = (6.5 * this.timerInSeconds) / this.timerStartValueInSeconds;
    this.DOM.complication.graph.setAttribute(
      'stroke-dasharray',
      `${value}, 100`,
    );
  }

  updateTimerOnWindowFocus() {
    window.addEventListener('blur', () => {
      this.onblurDate = new Date();
    });

    window.addEventListener('focus', () => {
      this.onFocusDate = new Date();
      const diffInSeconds = Math.abs(
        (this.onFocusDate - this.onblurDate) / 1000,
      );

      if (this.isActive) {
        this.timerInSeconds -= diffInSeconds;
      }
    });
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
    this.timerStartValueInSeconds = this.timerInSeconds;
    this.interval = setInterval(() => {
      if (this.timerInSeconds > 0) {
        this.isActive = true;
        this.timerInSeconds--;
        this.renderTimeOnDisplay();
        this.DOM.buttons.increase.disabled = true;
        this.DOM.buttons.decrease.disabled = true;
        this.DOM.buttons.reset.disabled = true;
        this.renderButton();
        this.pulseAnimation({
          element: this.DOM.complication.timer,
        });
        this.pulseAnimation({
          element: this.DOM.timer.colon,
        });
        this.pulseAnimation({
          element: this.DOM.timer.seconds,
        });
        if (this.timerInSeconds % 60 === 0) {
          this.pulseAnimation({
            element: this.DOM.timer.minutes,
          });
        }
        this.renderGraph();
      }
    }, 1000);
    this.updateTimerOnWindowFocus();
  }

  stop() {
    this.DOM.buttons.increase.disabled = false;
    this.DOM.buttons.decrease.disabled = false;
    this.DOM.buttons.reset.disabled = false;
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
    this.DOM.buttons.increase.onclick = () => this.increase();
    this.DOM.buttons.decrease.onclick = () => this.decrease();
    this.DOM.buttons.reset.onclick = () => this.reset();
    this.DOM.buttons.toggleStart.onclick = () => {
      !this.isActive ? this.start() : this.stop();
    };
  }
}
