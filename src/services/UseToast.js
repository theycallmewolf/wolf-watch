export const showToast = ({ title, description }) => {
  const toast = document.getElementById('toast');
  const titleEl = document.createElement('strong');
  const descriptionEl = document.createElement('span');
  titleEl.innerText = title;
  descriptionEl.innerText = description;
  toast.appendChild(titleEl);
  toast.appendChild(descriptionEl);

  toast.classList.add('show');

  setInterval(() => {
    toast.innerHTML = '';
    toast.classList.remove('show');
  }, 4000);
};
