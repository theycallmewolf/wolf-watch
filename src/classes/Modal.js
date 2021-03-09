export default class Modal {
  constructor() {
    this.DOM = {
      complications: document.querySelectorAll('.complication'),
      modal: document.getElementById('modal'),
      locationInput: document.getElementById('location'),
      views: document.querySelectorAll('#modal > div'),
      buttons: {
        top: document.getElementById('button-top'),
        bottomLeft: document.getElementById('button-bottom-left'),
        close: document.getElementById('close-button'),
      },
    };
  }

  open({ content }) {
    switch (content) {
      case 'search':
        document.getElementById('search').classList.remove('hide');
        break;

      case 'timer':
        document.getElementById('timer').classList.remove('hide');
        break;

      default:
        break;
    }

    this.DOM.complications.forEach(complication => {
      complication.classList.add('hide');
    });

    this.DOM.modal.classList.add('show');
  }

  close() {
    this.DOM.complications.forEach(complication => {
      complication.classList.remove('hide');
    });
    this.DOM.modal.classList.contains('show')
      ? this.DOM.modal.classList.remove('show')
      : null;
    this.DOM.locationInput.value = '';
    this.DOM.views.forEach(element => {
      element.classList.add('hide');
    });
  }

  execute() {
    this.DOM.buttons.top.addEventListener('click', () => {
      this.open({ content: 'search' });
    });

    this.DOM.buttons.bottomLeft.addEventListener('click', () => {
      this.open({ content: 'timer' });
    });

    this.DOM.buttons.close.addEventListener('click', () => {
      this.close();
    });
  }
}
