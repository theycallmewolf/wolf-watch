//
// adjust viewport units on mobile
const setViewportHeightUnit = () => {
  document.documentElement.style.setProperty(
    '--app-height',
    `${window.innerHeight}px`,
  );
};

export const handleViewport = () => {
  setViewportHeightUnit();
  window.addEventListener('resize', setViewportHeightUnit);
};
