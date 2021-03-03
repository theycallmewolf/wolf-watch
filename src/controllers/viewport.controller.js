import { setViewportHeightUnit } from '../utils/viewport';

export const handleViewport = () => {
  setViewportHeightUnit();
  window.addEventListener('resize', setViewportHeightUnit);
};
