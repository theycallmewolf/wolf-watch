import { randomActivityRings } from '../services/LoadActivityRings';

export const executeActivityRings = () => {
  randomActivityRings();

  document
    .getElementById('bottom')
    .addEventListener('click', randomActivityRings);
};
