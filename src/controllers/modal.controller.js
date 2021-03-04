const openModal = () => {
  document.getElementById('modal').classList.add('show');
};

const closeModal = () => {
  document.getElementById('modal').classList.remove('show');
  document.getElementById('location').value = '';
};

const handleModal = () => {
  document.getElementById('button-top').addEventListener('click', openModal);
};

export { openModal, closeModal, handleModal };
