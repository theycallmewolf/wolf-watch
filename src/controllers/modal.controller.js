const openModal = ({ content }) => {
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
};

const closeModal = () => {
  document.getElementById('modal').classList.remove('show');
  document.getElementById('location').value = '';

  document.querySelectorAll('#modal > div').forEach(element => {
    element.classList.add('hide');
  });
};

const executeModal = () => {
  document.getElementById('button-top').addEventListener('click', () => {
    openModal({ content: 'search' });
  });

  document
    .getElementById('button-bottom-left')
    .addEventListener('click', () => {
      openModal({ content: 'timer' });
    });

  document.getElementById('close-button').addEventListener('click', closeModal);
};

export { openModal, closeModal, executeModal };
