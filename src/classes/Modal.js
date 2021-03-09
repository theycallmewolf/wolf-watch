export default class Modal {
  constructor() {
    this.elements = {
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

    this.elements.complications.forEach(complication => {
      complication.classList.add('hide');
    });

    this.elements.modal.classList.add('show');
  }

  close() {
    this.elements.complications.forEach(complication => {
      complication.classList.remove('hide');
    });
    this.elements.modal.classList.remove('show');
    this.elements.locationInput.value = '';
    this.elements.views.forEach(element => {
      element.classList.add('hide');
    });
  }

  execute() {
    this.elements.buttons.top.addEventListener('click', () => {
      this.open({ content: 'search' });
    });

    this.elements.buttons.bottomLeft.addEventListener('click', () => {
      this.open({ content: 'timer' });
    });

    this.elements.buttons.close.addEventListener('click', () => {
      this.close();
    });
  }
}
