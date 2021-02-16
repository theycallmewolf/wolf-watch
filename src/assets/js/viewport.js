//
// adjust viewport units on mobile
const windowHeight = window.innerHeight;
const current_scroll = window.scrollY;

let vh = windowHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = windowHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
