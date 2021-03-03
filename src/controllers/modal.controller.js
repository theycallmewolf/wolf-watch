const openModal = () => {
  document.getElementById('modal').classList.add('show');
};

const closeModal = () => {
  document.getElementById('modal').classList.remove('show');
};

export { openModal, closeModal };
