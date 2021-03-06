export default class Toast {
  constructor() {
    this.elements = {
      toast: document.getElementById('toast'),
      title: document.createElement('strong'),
      description: document.createElement('span'),
    };
  }

  remove() {
    this.elements.toast.classList.remove('show');
    this.elements.title.innerText = '';
    this.elements.description.innerText = '';
  }

  add({ title, description }) {
    this.elements.title.innerText = title;
    this.elements.description.innerText = description;
    this.elements.toast.appendChild(this.elements.title);
    this.elements.toast.appendChild(this.elements.description);
    this.elements.toast.classList.add('show');

    setTimeout(() => {
      this.remove();
    }, 4000);
  }
}
