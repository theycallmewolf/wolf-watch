import { randomActivityRings } from '../services/LoadActivityRings';

export const handleActivityRings = () => {
  randomActivityRings();

  document
    .getElementById('bottom')
    .addEventListener('click', randomActivityRings);
};
