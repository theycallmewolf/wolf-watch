export default class Rings {
  constructor() {
    this.DOM = {
      rings: {
        move: document.querySelector('.move-ring .completed'),
        exercise: document.querySelector('.exercise-ring .completed'),
        stand: document.querySelector('.stand-ring .completed'),
      },
      button: document.getElementById('button-bottom'),
    };
  }

  getRandomInt({ max }) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  set() {
    const one = this.getRandomInt({ max: 80 });
    const two = this.getRandomInt({ max: one });
    const three = this.getRandomInt({ max: 90 });

    this.DOM.rings.move.setAttribute('stroke-dasharray', `${one}, 100`);
    this.DOM.rings.exercise.setAttribute('stroke-dasharray', `${two}, 100`);
    this.DOM.rings.stand.setAttribute('stroke-dasharray', `${three}, 100`);
  }

  execute() {
    this.set();
    this.DOM.button.addEventListener('click', () => this.set());
  }
}
