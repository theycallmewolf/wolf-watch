export default class Window {
  constructor() {}

  setViewportHeightUnit() {
    document.documentElement.style.setProperty(
      '--app-height',
      `${window.innerHeight}px`,
    );
  }

  execute() {
    this.setViewportHeightUnit();
    window.addEventListener('resize', this.setViewportHeightUnit);
  }
}
