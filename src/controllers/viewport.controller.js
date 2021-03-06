//
// adjust viewport units on mobile
const setViewportHeightUnit = () => {
  document.documentElement.style.setProperty(
    '--app-height',
    `${window.innerHeight}px`,
  );
};

export const executeViewport = () => {
  setViewportHeightUnit();
  window.addEventListener('resize', setViewportHeightUnit);
};
