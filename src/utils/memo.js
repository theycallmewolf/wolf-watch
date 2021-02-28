const weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const complications = {
  rain: {
    element: document.getElementById('top-left'),
    current: document.querySelector('#top-left .value-xs'),
  },
  temp: {
    element: document.getElementById('top-right'),
    current: document.querySelector('#top-right .value-lg'),
    min: document.querySelectorAll('#top-right .value-xs')[0],
    max: document.querySelectorAll('#top-right .value-xs')[1],
  },
  weatherState: {
    element: document.getElementById('bottom-right'),
    icon: document.querySelector('#bottom-right svg'),
  },
};

export { weekDays, complications };
