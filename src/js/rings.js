import { getRandomInt } from './utils/get-random-int';

export const randomActivityRings = () => {
  const moveRing = document.querySelector('.move-ring .completed');
  const exerciseRing = document.querySelector('.exercise-ring .completed');
  const standRing = document.querySelector('.stand-ring .completed');

  const random1 = getRandomInt(80);
  const random2 = getRandomInt(random1);
  const random3 = getRandomInt(90);

  moveRing.setAttribute('stroke-dasharray', `${random1}, 100`);
  exerciseRing.setAttribute('stroke-dasharray', `${random2}, 100`);
  standRing.setAttribute('stroke-dasharray', `${random3}, 100`);
};
