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
    this.DOM = {
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
    const weekday = this.currentTime.weekday;
    const dayOfTheMonth = this.currentTime.dayOfTheMonth;
    let seconds = this.currentTime.seconds;
    let minutes = this.currentTime.minutes;
    let hours = this.currentTime.hours;

    seconds *= 6;
    minutes *= 6;
    hours > 12 ? (hours -= 12) : hours;
    hours *= 30;

    // fine-tunning hour hand
    switch (true) {
      case minutes > 330:
        hours += 27.5;
        break;

      case minutes > 300:
        hours += 25;
        break;

      case minutes > 270:
        hours += 22.5;
        break;

      case minutes > 240:
        hours += 20;
        break;

      case minutes > 210:
        hours += 17.5;
        break;

      case minutes > 180:
        hours += 15;
        break;

      case minutes > 150:
        hours += 12.5;
        break;

      case minutes > 120:
        hours += 10;
        break;

      case minutes > 90:
        hours += 7.5;
        break;

      case minutes > 60:
        hours += 5;
        break;

      case minutes > 30:
        hours += 2.5;
        break;

      default:
        hours;
        break;
    }

    // update DOM
    {
      this.DOM.watch.hand.hour.setAttribute(
        'style',
        `transform: translate(-50%, -50%) rotate(${hours}deg)`,
      );

      this.DOM.watch.hand.minute.setAttribute(
        'style',
        `transform: translate(-50%, -50%) rotate(${minutes}deg)`,
      );

      this.DOM.watch.hand.second.setAttribute(
        'style',
        `transform: translate(-50%, -50%) rotate(${seconds}deg)`,
      );

      this.DOM.watch.display.weekday.innerHTML = weekday;
      this.DOM.watch.display.day.innerHTML = dayOfTheMonth;
    }
  }

  async updateClock() {
    const { location, time, weather } = await getApiData({
      city: this.currentCity,
    });

    this.DOM.input.city.innerText = location.title;

    this.setCurrentTime({ time });
    this.setClock();
    setWeather({ weather });
    this.modal.close;
  }

  updateClockOnWindowFocus() {
    window.addEventListener('focus', () => {
      if (!this.hasFocus) {
        this.updateClock();
        this.hasFocus = true;
      }
    });
    window.addEventListener('blur', () => {
      this.hasFocus = false;
    });
  }

  async execute() {
    this.currentCity = await getCityNameByIP();
    this.updateClock();

    this.DOM.button.citySearch.addEventListener('click', () => {
      let inputValue = this.DOM.input.location.value;

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
