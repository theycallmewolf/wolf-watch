export const complications = {
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
};
