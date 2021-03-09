export default class Toast {
  constructor() {
    this.DOM = {
      toast: document.getElementById('toast'),
      title: document.createElement('strong'),
      description: document.createElement('span'),
    };
  }

  remove() {
    this.DOM.toast.classList.remove('show');
    this.DOM.title.innerText = '';
    this.DOM.description.innerText = '';
  }

  add({ title, description }) {
    this.DOM.title.innerText = title;
    this.DOM.description.innerText = description;
    this.DOM.toast.appendChild(this.DOM.title);
    this.DOM.toast.appendChild(this.DOM.description);
    this.DOM.toast.classList.add('show');

    setTimeout(() => {
      this.remove();
    }, 4000);
  }
}
