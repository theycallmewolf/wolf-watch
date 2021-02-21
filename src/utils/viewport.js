//
// adjust viewport units on mobile
export const setViewportHeightUnit = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};
