import { setWeather } from '../services/setWeather';
import { getCityNameByIP } from '../services/getCityNameByIP';
import { getApiData } from '../services/getApiData';
import { weekDays } from '../utils/memo';
import Toast from './Toast';
import Modal from './Modal';

export default class Clock {
  constructor() {
    this.date = new Date();
    this.currentTime = {
      hours: this.date.getHours(),
      minutes: this.date.getMinutes(),
      seconds: this.date.getSeconds(),
      weekday: weekDays[this.date.getDay()],
      dayOfTheMonth: this.date.getDate(),
    };
    this.currentCity;
    this.hasFocus = true;
    this.elements = {
      watch: {
        hand: {
          hour: document.getElementById('hour'),
          minute: document.getElementById('minute'),
          second: document.getElementById('second'),
        },
        display: {
          weekday: document.getElementById('weekday'),
          day: document.getElementById('day'),
        },
      },
      input: {
        location: document.getElementById('location'),
        city: document.getElementById('city'),
      },
      button: {
        citySearch: document.getElementById('search-button'),
      },
    };
    this.toast = new Toast();
    this.modal = new Modal();
  }

  refresh() {
    setInterval(async () => {
      if (this.currentTime.seconds < 59) {
        this.currentTime.seconds++;
      } else {
        this.currentTime.seconds = 0;
        if (this.currentTime.minutes < 59) {
          this.currentTime.minutes++;
        } else {
          this.currentTime.minutes = 0;
          if (this.currentTime.hours < 23) {
            this.currentTime.hours++;
          } else {
            this.currentTime.hours = 0;
            const { time } = await getApiData({ city: currentCity });
            this.setCurrentTime({ time });
          }
        }
      }
      this.setClock();
    }, 1000);
  }

  setCurrentTime({ time }) {
    const date = new Date(time.replace(' ', 'T'));
    this.currentTime.hours = date.getHours();
    this.currentTime.minutes = date.getMinutes();
    this.currentTime.seconds = new Date().getSeconds();
    this.currentTime.weekday = weekDays[date.getDay()];
    this.currentTime.dayOfTheMonth = date.getDate();
  }

  setClock() {
    let s = this.currentTime.seconds;
    let m = this.currentTime.minutes;
    let h = this.currentTime.hours;
    let w = this.currentTime.weekday;
    let M = this.currentTime.dayOfTheMonth;

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

    this.elements.watch.hand.hour.setAttribute(
      'style',
      `transform: translate(-50%, -50%) rotate(${h}deg)`,
    );

    this.elements.watch.hand.minute.setAttribute(
      'style',
      `transform: translate(-50%, -50%) rotate(${m}deg)`,
    );

    this.elements.watch.hand.second.setAttribute(
      'style',
      `transform: translate(-50%, -50%) rotate(${s}deg)`,
    );

    this.elements.watch.display.weekday.innerHTML = w;
    this.elements.watch.display.day.innerHTML = M;
  }

  async updateClock() {
    const { location, time, weather } = await getApiData({
      city: this.currentCity,
    });

    this.elements.input.city.innerText = location.title;

    this.setCurrentTime({ time });
    this.setClock();
    setWeather({ weather });
    this.modal.close();
  }

  updateClockOnWindowFocus() {
    window.onfocus = () => {
      if (!this.hasFocus) {
        this.updateClock();
        this.hasFocus = true;
      }
    };

    window.onblur = () => (this.hasFocus = false);
  }

  async execute() {
    this.currentCity = await getCityNameByIP();
    this.updateClock();

    this.elements.button.citySearch.addEventListener('click', () => {
      let inputValue = this.elements.input.location.value;

      if (inputValue) {
        this.currentCity = inputValue;
        this.updateClock();
      } else {
        this.toast.add({
          title: `Exploring the unknown?`,
          description: 'Please add a city before clicking the button',
        });
      }
    });

    this.refresh();
    this.updateClockOnWindowFocus();
  }
}
