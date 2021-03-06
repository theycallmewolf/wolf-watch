export default class Modal {
  constructor() {}

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
    document.getElementById('modal').classList.add('show');
  }

  close() {
    document.getElementById('modal').classList.remove('show');
    document.getElementById('location').value = '';
    document.querySelectorAll('#modal > div').forEach(element => {
      element.classList.add('hide');
    });
  }

  execute() {
    document.getElementById('button-top').addEventListener('click', () => {
      this.open({ content: 'search' });
    });

    document
      .getElementById('button-bottom-left')
      .addEventListener('click', () => {
        this.open({ content: 'timer' });
      });

    document
      .getElementById('close-button')
      .addEventListener('click', this.close);
  }
}
